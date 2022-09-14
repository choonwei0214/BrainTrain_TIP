import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'antd';
import { GiWerewolf } from 'react-icons/gi';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const Survey3Result = (props) => {
    let idx = 1
    if (idx === 0) {
        sessionStorage.setItem("chronotype", "Bear")
    } else if (idx === 1) {
        sessionStorage.setItem("chronotype", "Wolf")
    } else if (idx === 2) {
        sessionStorage.setItem("chronotype", "Bear")
    } else {
        sessionStorage.setItem("chronotype", "Bear")
    }
    // const lion = {
    //     type: "Lion",
    //     meaning: "They are early risers and most productive during the morning. They would experience a burst in energy in the morning, but would see it drop in the in the afternoon.",
    //     traits: ["Natural leaders", "Charismatic influence", "Disciplined", "Practical"],
    //     ideal_schedule: ["6–7 a.m.: Wake up", "8 a.m.–12 p.m.: Focus on deep work", "12–4 p.m.: Focus on lighter tasks", "4–9 p.m.: Daily unwind and relax", "9–10 p.m.: Get ready for bed", "10 p.m. – 6 a.m.: Sleep"],
    //     notes: ["Energy levels will slump in the afternoon, so pace yourself and take breaks or naps", "Have a night-time wind-down routine to prepare to turn in before 10pm", "Maintain discipline in your routines and habits to keep optimal levels of energy"]
    // }

    // const bear = {
    //     type: "Bear",
    //     meaning: "The sleep schedule is synced with the sun’s rising and setting. They are productive during the day time but would see a dip in productivity levels when it gets closer to the night. ",
    //     traits: ["Are extroverted", "Tend to have high energy levels", "Easy-going", "Can work in typical office hours"],
    //     ideal_schedule: ["7–8 a.m.: Wake up", "10 a.m.–2 p.m.: Focus on deep work", "2–4 p.m.: Work on lighter tasks", "4–10 p.m.: Relax and unwind", "10–11 p.m.: Get ready for bed", "11 p.m.–7 a.m.: Sleep"],
    //     notes: ["Make sure you get at least 7 hours of sleep to have optimal levels of energy", "Try to limit or ideally, remove distractions when working. Leave leisure at night", "To avoid severe food coma, have lighter lunch which has lesser carbs or at least have a light exercise like walking"]
    // }

    // const wolf = {
    //     type: "Wolf",
    //     meaning: "Similar to night-owls, they have a good burst of energy in the evening. As they sleep later, they tend to wake up later as well.",
    //     traits: ["Thoughtfully reflective", "Creative and impulsive", "Risk-takers", "Introverted and reserved"],
    //     ideal_schedule: ["7:30–9 a.m.: Wake up", "10 a.m.–12 p.m.: Focus on lighter tasks", "12–2 p.m.: Complete deep or creative work", "2–5 p.m.: Focus on lighter, less intense tasks", "5–9 p.m.: Engage in creative tasks", "9–10 p.m.: Unwind from the day", "10 p.m.–12 a.m.: Prepare for bed", "12–7:30 a.m.: Sleep"],
    //     notes: ["Get as much work done as soon as possible as you are working in the night to avoid delaying the time to sleep", "Do turn in before 12 a.m. as you would need get at least 7 hours of sleep", "You might struggle with daily schedules, hence try to have a routine when you wake up to get yourself refreshed for the day"]
    // }

    // const dolphin = {
    //     type: "Dolphin",
    //     meaning: "Known as insomniacs, they are known to be light sleepers. They tend to sleep later and have shorter sleep duration.",
    //     traits: ["Detail-oriented", "Intelligent", "Shows bursts of creative energy", "Anxious and overthinkers"],
    //     ideal_schedule: ["6:30–7:30 a.m.: Wake up", "8–10 a.m.: Engage with easy to-dos", "10 a.m.–12 p.m.: Focus on demanding tasks", "12–4 p.m.: Complete less demanding tasks", "4–10 p.m.: Relax, unwind from the day", "10–11:30 p.m.: Prepare for bed", "12–6:30 a.m.: Sleep"],
    //     notes: ["Take breaks to mentally reset yourself to keep youself going on for the day", "Do unwind yourself and avoid distractions before you sleep", "Start with small tasks before progressing to even more demanding tasks"]
    // }

    const handleClick1 = (e) => {
        if (e.target.nodeName === "SPAN") {
            e.target.parentElement.parentElement.parentElement.style.transform = "rotateY(180deg)";
        } else {
            e.target.parentElement.parentElement.style.transform = "rotateY(180deg)";
        }
    };

    const handleClick2 = (e) => {
        if (e.target.nodeName === "SPAN") {
            e.target.parentElement.parentElement.parentElement.style.transform = "rotateY(360deg)";
        } else {
            e.target.parentElement.parentElement.style.transform = "rotateY(360deg)";
        }
    };

    return (
        <div class="flip-card text-center">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <Button onClick={handleClick1}>Click here to flip!</Button>
                    <Row>
                        <Col>
                            <div className='flip-card-def'>
                                <h1 className="flip-card-type">
                                    Wolf
                                </h1>
                                <div className="flip-card-icon"><GiWerewolf /></div>
                                <h3>What does this mean?</h3>
                                <p>Similar to night-owls, they have a good burst of energy in the evening. As they sleep later, they tend to wake up later as well.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="flip-card-char text-left">
                                <h3>Characteristics of a Bear</h3>
                                <ul>
                                    <li>Thoughtfully reflective</li>
                                    <li>Reflective and impulsive</li>
                                    <li>Risk-takers</li>
                                    <li>Introverted and reserved</li>
                                </ul>
                            </div>
                            <div className="flip-card-ttn">
                                <h3>Things to note</h3>
                                <ul>
                                    <li>Get as much work done as soon as possible</li>
                                    <li>Do turn in before 12 a.m.</li>
                                    <li>Have a routine when you wake up to get yourself refreshed for the day</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div class="flip-card-back">
                    <Button onClick={handleClick2}>Click here to flip!</Button>
                    <div className="idealschedule">
                        <h1>Ideal daily schedule</h1>
                        <Timeline position="right">
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    07:30 a.m. - 09:00 a.m.
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Wake up</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    10:00 a.m. - 12:00 p.m.
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Focus on lighter tasks</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    12:00 p.m. - 2:00 p.m.
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Complete deep or creative work</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    2:00 p.m. - 5:00 p.m.
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Focus on lighter, less intense tasks</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    5:00 p.m. - 9:00 p.m.
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Engage in creative tasks</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    9:00 p.m. - 10:00 p.m.
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Unwind from the day</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    10:00 p.m. - 12:00 a.m.
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Prepare for bed</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    12:00 a.m. - 07:30 a.m.
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent>Sleep</TimelineContent>
                            </TimelineItem>

                        </Timeline>
                    </div>
                </div>
            </div>
        </div>
        // <div className="surveyresultpage">
        //     <Row>
        //         <Col xs={4}>
        //             {idx === 0 && <div className='text-center'><GiLion className="personality-icon"/></div>}
        //             {idx === 1 && <div className='text-center'><GiPolarBear className="personality-icon"/></div>}
        //             {idx === 2 && <div className='text-center'><GiWolfHead className="personality-icon"/></div>}
        //             {idx === 3 && <div className='text-center'><GiDolphin className="personality-icon"/></div>}
        //         </Col>
        //         <Col>
        //             <h2>You're a <span>
        //                 {idx === 0 && lion.type}
        //                 {idx === 1 && bear.type}
        //                 {idx === 2 && wolf.type}
        //                 {idx === 3 && dolphin.type}
        //             </span> learner!</h2>
        //             <h5>
        //                 {idx === 0 && lion.meaning}
        //                 {idx === 1 && bear.meaning}
        //                 {idx === 2 && wolf.meaning}
        //                 {idx === 3 && dolphin.meaning}
        //             </h5>
        //         </Col>
        //     </Row>
        //     <Row className="meaningrow">
        //         <Col xs={6}>
        //             <div className="surveymeaning">
        //                 <h3>Characteristics and traits:</h3>
        //                 <h5>
        //                     {idx === 0 && <div>{lion.traits.map((trait) => <li>{trait}</li>)}</div>}
        //                     {idx === 1 && <div>{bear.traits.map((trait) => <li>{trait}</li>)}</div>}
        //                     {idx === 2 && <div>{wolf.traits.map((trait) => <li>{trait}</li>)}</div>}
        //                     {idx === 3 && <div>{dolphin.traits.map((trait) => <li>{trait}</li>)}</div>}
        //                 </h5>
        //                 <div className="feedbackBtn text-center">
        //                     <h5>Was this helpful?</h5>
        //                     <Button className="feedbackYes">Yes</Button>
        //                     <Button className="feedbackNo">No</Button>
        //                 </div>
        //             </div>
        //         </Col>
        //         <Col>
        //             <div className="surveymeaning">
        //                 <h3>Ideal daily schedule:</h3>
        //                 <h5>
        //                     {idx === 0 && <div>{lion.ideal_schedule.map((schedule) => <li>{schedule}</li>)}</div>}
        //                     {idx === 1 && <div>{bear.ideal_schedule.map((schedule) => <li>{schedule}</li>)}</div>}
        //                     {idx === 2 && <div>{wolf.ideal_schedule.map((schedule) => <li>{schedule}</li>)}</div>}
        //                     {idx === 3 && <div>{dolphin.ideal_schedule.map((schedule) => <li>{schedule}</li>)}</div>}
        //                 </h5>
        //             </div>
        //         </Col>
        //         <Col>
        //             <div className="surveymeaning">
        //                 <h3>Things to note:</h3>
        //                 <h5>
        //                     {idx === 0 && <div>{lion.notes.map((note) => <li>{note}</li>)}</div>}
        //                     {idx === 1 && <div>{bear.notes.map((note) => <li>{note}</li>)}</div>}
        //                     {idx === 2 && <div>{wolf.notes.map((note) => <li>{note}</li>)}</div>}
        //                     {idx === 3 && <div>{dolphin.notes.map((note) => <li>{note}</li>)}</div>}
        //                 </h5>
        //             </div>
        //         </Col>
        //     </Row>
        // </div>
    );
}

export default Survey3Result;    