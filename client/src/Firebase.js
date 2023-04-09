// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, setDoc, doc, query, orderBy, where, deleteDoc } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

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
const auth = getAuth(app);

export function unakennapa(){
  console.log(auth);
}

export const getEvent = async () => {
    const eventRef = collection(db, 'event')
    const q = query(eventRef, orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    const responseList = querySnapshot.docs.map(doc => { return {id: doc.id, ...doc.data()}});
    console.log(responseList);
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
  const responseList = querySnapshot.docs.map(doc => { return {id: doc.id, ...doc.data()}});
  return responseList;
}


export const getMembers = async () => {
  const eventRef = collection(db, 'Members')
  const q = query(eventRef, );
  const querySnapshot = await getDocs(q);
  const responseList = querySnapshot.docs.map(doc => { return doc.data()});
  console.log(responseList[0]);
  return responseList[0].data;
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
    const newEvent = doc(collection(db, "event"));  
    await setDoc(newEvent, {
      event: obj.event,
      desc: obj.desc,
      link: obj.link,
      image: obj.image,
      timestamp: customTimeStamp(obj.date),
    }).then((res)=>{
      window.location='/dashboard'
    });
}

export const getResponse = async (obj) => {
  const eventRef = doc(collection(db, 'response'), obj)
  const querySnapshot = await getDoc(eventRef);
  if (querySnapshot.exists()) {
    return querySnapshot.data().data;
  } else {
    return [];
  }
}

export const editEvent = async (obj) => {
  const newEvent = doc(collection(db, "event"), obj.id);  
  await setDoc(newEvent, {
    event: obj.event,
    desc: obj.desc,
    link: obj.link,
    image: obj.image,
    timestamp: customTimeStamp(obj.date),
  }).then((res)=>{
    window.location='/dashboard'
  });
}

export const deleteEvent = async (obj) => {
  const newEvent = doc(collection(db, "event"), obj.id);  
  await deleteDoc(newEvent).then((res)=>{
    window.location='/dashboard'
  });
}

export const registerForEvent = async (obj) => {
  getResponse(obj.event).then(async (res)=>{
    const newEvent = doc(collection(db, "response"), obj.event);  
    const date = new Date();
    await setDoc(newEvent, {data: [...res, {
      email: obj.email,
      name: obj.name,
      college: obj.college,
      reg: obj.reg,
      roll: obj.roll,
      ph: obj.ph,
      dept: obj.dept,
      grad: obj.grad,
      comment: obj.comment,
      timestamp: customTimeStamp(date)
    }]});
  })
}

export const addMembers = async (obj) => {
  getMembers().then( async res => 
    {
      const newEvent = doc(collection(db, "Members"), "list");  
      res[res.length] =  {
        batch: obj.batch,
        dept: obj.dept,
        name: obj.name,
        photo: obj.image,
        priority: +obj.priority,
        role: obj.role,
      }
      console.log(res);
      await setDoc(newEvent, {data: res})
  }
  ).then((res)=>{
    window.location='/dashboard'
  });
}

export const editMember = async (obj) => {
  getMembers().then( async res => 
    {
      const newEvent = doc(collection(db, "Members"), "list");  
      res[+obj.id] =  {
        batch: obj.batch,
        dept: obj.dept,
        name: obj.name,
        photo: obj.image,
        priority: +obj.priority,
        role: obj.role,
      }
      console.log(res);
      await setDoc(newEvent, {data: res}
    )
  }
  ).then((res)=>{
    window.location='/dashboard'
  });
}


export const deleteMember = async (obj) => {
  getMembers().then( async res => 
    {
      const newEvent = doc(collection(db, "Members"), "list");  
      res =  [...res.slice(0, +obj.id), ...res.slice(+obj.id+1, res.length)]
      console.log(res);
      await setDoc(newEvent, {data: res}
    )
  }
  ).then(
    (res)=>{
        window.location = '/dashboard'
    }
  );
}