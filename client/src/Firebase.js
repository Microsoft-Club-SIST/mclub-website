// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, query, orderBy, where } from 'firebase/firestore/lite';
// import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGING,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();

export const getEvent = async () => {
    const eventRef = collection(db, 'event')
    const q = query(eventRef, orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    const responseList = querySnapshot.docs.map(doc => doc.data());
    return responseList;
}

export const getPastEvent = async () => {
  const eventRef = collection(db, 'event');
  const date = new Date();
  const q = query(eventRef, where("timestamp", "<", customTimeStamp(date)), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);
  const responseList = querySnapshot.docs.map(doc => doc.data());
  return responseList;
}

export const getUpEvent = async () => {
  const eventRef = collection(db, 'event');
  const date = new Date();
  const q = query(eventRef, where("timestamp", ">", customTimeStamp(date)), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);
  const responseList = querySnapshot.docs.map(doc => doc.data());
  return responseList;
}

export const getMembers = async () => {
  const eventRef = collection(db, 'members')
  const q = query(eventRef, orderBy("order"));
  const querySnapshot = await getDocs(q);
  const responseList = querySnapshot.docs.map(doc => doc.data());
  return responseList;
}

function customTimeStamp(date){
  const d = (date.getDate().toString().length > 1) ? date.getDate().toString() : "0"+date.getDate().toString()
  const m =  ((date.getMonth()+1).toString().length > 1) ? (date.getMonth()+1).toString() : "0"+(date.getMonth()+1).toString()
  const y= date.getFullYear().toString()
  const h = (date.getHours().toString().length > 1) ? date.getHours().toString() : "0"+date.getHours().toString()
  const mi = (date.getMinutes().toString().length > 1) ? date.getMinutes().toString() : "0"+date.getMinutes().toString()
  const s = (date.getSeconds().toString().length > 1) ? date.getSeconds().toString() : "0"+date.getSeconds().toString()
  const da = (y+m+d+h+mi+s)
  return(parseInt(da));
}

export const addEvent = async (obj) => {
    const date = new Date();
    const newCityRef = doc(collection(db, "event"));  
      await setDoc(newCityRef, {
        event: obj.event,
        desc: obj.desc,
        link: obj.link,
        image: obj.image,
        timestamp: customTimeStamp(date),
      });
}