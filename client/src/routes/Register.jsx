import { createRef, useEffect, useState } from "react";
import NavBar from "../components/navbar";
import { getUpEvent, registerForEvent } from "../Firebase";

export default function Register() {
    const inputBox = {maxWidth: 600, marginTop: 30, marginBottom: 30, marginLeft: 'auto', marginRight: 'auto', textAlign: 'start', fontWeight: 500 };
    const input = {marginTop: 20, color: "#3a3a3a",marginBottom: 20, height: '30px', width: "100%", outline: 0, border: 0,  padding: 4, fontSize: 18, borderRadius: 5 }
    const Star = ()=>{
        return( 
            <span style={{color: "#FF4646"}}>*</span>
        );
    }
    const [events, setEvents] = useState([{event: "Loading...", date: 0, timestamp: "12121234"}]);
    
    let email = createRef();
    let name = createRef();
    let college = createRef();
    let reg = createRef();
    let roll = createRef();
    let ph = createRef();
    let dept = createRef();
    let grad = createRef();
    let comment = createRef();
    let event = createRef();

    const date = new Date();;
    // email
    // name
    // college
    // reg
    // roll
    // ph
    // dept
    // grad
    // comment
    // event

    useEffect(() => {
        getUpEvent().then(data => {
            setEvents(data).then(()=>{
                (!data.length) && alert("No events are available right now");
            });
        });
      }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(e); 
        console.log(email.current.value);
        registerForEvent({
                email: email.current.value,
                name: name.current.value,
                college: college.current.value,
                reg: reg.current.value,
                roll: roll.current.value,
                ph: ph.current.value,
                dept: dept.current.value,
                grad: grad.current.value,
                comment: comment.current.value,
                event: events[event.current.value].id
            }
        )
        
        alert(`${name.current.value} submitted your data`);
    }
    return <div style={{color: '#FFF'}}>
        <NavBar/>
        <h1 style={{color: '#FFF', marginTop: 30, marginBottom: 60}}>Register</h1>
        <form onSubmit={submit}>
        <div style={{ marginLeft: 20, marginRight: 20}}>
            <div style={inputBox}>
                <label>Email Address <Star/></label>
                <br/>
                <input style={input} ref={email} type="email" required></input>
            </div>
            <div style={inputBox}>
                <label>Name <Star/></label>
                <br/>
                <input style={input} ref={name} type="text" required></input>
            </div>
            <div style={inputBox}>
                <label>College <Star/></label>
                <br/>
                <input style={input} ref={college} type="text" required></input>
            </div>
            <div style={inputBox}>
                <label>Register Number <Star/></label>
                <br/>
                <input style={input} ref={reg} type="number" required></input>
            </div>
            <div style={inputBox}>
                <label>Roll Number <Star/></label>
                <br/>
                <input style={input} ref={roll} type="text" required></input>
            </div>
            <div style={inputBox}>
                <label>Phone Number <Star/></label>
                <br/>
                <input style={input} ref={ph} type="tel" required></input>
            </div>
            <div style={inputBox}>
                <label>Department <Star/></label>
                <br/>
                <select  required defaultValue="" ref={dept} style={{...input, height: 40, backgroundColor: "#FFF"}}>
                    <option key={-1} value="" disabled>Select Option</option>
                    <option key={1} value={"Computer Science and Engineering"}>Computer Science and Engineering</option>
                    <option key={2} value={"Information Technology"}>Information Technology</option>
                    <option key={3} value={"Electrical and Electronics"}>Electrical and Electronics</option>
                    <option key={4} value={"Electronics and Communication"}>Electronics and Communication</option>
                    <option key={5} value={"Mechatronics"}>Mechatronics</option>
                    <option key={6} value={"Aeronautical"}>Aeronautical</option>
                    <option key={7} value={"Biotechnology"}>Biotechnology</option>
                    <option key={8} value={"Automobile"}>Automobile</option>
                    <option key={9} value={"Medical"}>Medical</option>
                    <option key={10} value={"Other"}>Other</option>
                </select>
            </div>
            <div style={inputBox}>
                <label>Event <Star/></label>
                <br/>
                <select  required defaultValue="" ref={event} style={{...input, height: 40, backgroundColor: "#FFF"}}>
                    <option key={-1} value="" disabled>Select Option</option>
                    {
                    events.map((value, key) =>
                    <option key={key} value={key}> {value.event} </option>
                    )}
                </select>
            </div>
            <div style={inputBox}>
                <label>Expected Graduation Year <Star/></label>
                <br/>
                <select  required defaultValue="" ref={grad} style={{...input, height: 40, backgroundColor: "#FFF"}}>
                    <option key={-1} value="" disabled>Select Option</option>
                    <option key={1} value={date.getFullYear()}>{date.getFullYear()}</option>
                    <option key={1} value={date.getFullYear()+1}>{date.getFullYear()+1}</option>
                    <option key={1} value={date.getFullYear()+2}>{date.getFullYear()+2}</option>
                    <option key={1} value={date.getFullYear()+3}>{date.getFullYear()+3}</option>
                    <option key={1} value={date.getFullYear()+4}>{date.getFullYear()+4}</option>
                    <option key={1} value={"NA"}>Not Applicable</option>
                </select>
            </div>
            <div style={inputBox}>
                <label>Have you joined our Discord Server? (this will be used for getting the updates and staying in touch with us on a daily basis)</label>
                <br/>
                <br/>
                Server Invite: <a style={{color: "#5865F2"}} href="https://bit.ly/mclub-s4">https://bit.ly/mclub-s4</a>
                <br/>
                <br/>
                <input required style={{input}} type="checkbox"></input> Yes, I'm in discord server.
            </div>
            <div style={inputBox}>
                <label>Comments</label>
                <br/>
                <input style={input} ref={comment} type="text"></input>
            </div>
            <button className="event-card-registerbutton" style={{padding: 13, paddingLeft: 40, paddingRight: 40, marginBottom: 40}}>Submit</button>
        </div>
        </form>
    </div>
}