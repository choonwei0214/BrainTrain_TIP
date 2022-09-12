import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'antd';
import lion_img from './Images/lion.png';
import bear_img from './Images/bear.png';
import wolf_img from './Images/wolf.png';
import dolphin_img from './Images/dolphin.png';

const Survey3Result = (props) => {
    let idx = Math.floor(Math.random() * 4)
    if (idx === 0) {
        sessionStorage.setItem("chronotype", "Lion")
    } else if (idx === 1) {
        sessionStorage.setItem("chronotype", "Bear")
    } else if (idx === 2) {
        sessionStorage.setItem("chronotype", "Wolf")
    } else {
        sessionStorage.setItem("chronotype", "Dolphin")
    }
    const lion = {
        type: "Lion",
        meaning: "They are early risers and most productive during the morning. They would experience a burst in energy in the morning, but would see it drop in the in the afternoon.",
        traits: ["Natural leaders", "Charismatic influence", "Disciplined", "Practical"],
        ideal_schedule: ["6–7 a.m.: Wake up", "8 a.m.–12 p.m.: Focus on deep work", "12–4 p.m.: Focus on lighter tasks", "4–9 p.m.: Daily unwind and relax", "9–10 p.m.: Get ready for bed", "10 p.m. – 6 a.m.: Sleep"],
        notes: ["Energy levels will slump in the afternoon, so pace yourself and take breaks or naps", "Have a night-time wind-down routine to prepare to turn in before 10pm", "Maintain discipline in your routines and habits to keep optimal levels of energy"]
    }

    const bear = {
        type: "Bear",
        meaning: "The sleep schedule is synced with the sun’s rising and setting. They are productive during the day time but would see a dip in productivity levels when it gets closer to the night. ",
        traits: ["Are extroverted", "Tend to have high energy levels", "Easy-going", "Can work in typical office hours"],
        ideal_schedule: ["7–8 a.m.: Wake up", "10 a.m.–2 p.m.: Focus on deep work", "2–4 p.m.: Work on lighter tasks", "4–10 p.m.: Relax and unwind", "10–11 p.m.: Get ready for bed", "11 p.m.–7 a.m.: Sleep"],
        notes: ["Make sure you get at least 7 hours of sleep to have optimal levels of energy", "Try to limit or ideally, remove distractions when working. Leave leisure at night", "To avoid severe food coma, have lighter lunch which has lesser carbs or at least have a light exercise like walking"]
    }

    const wolf = {
        type: "Wolf",
        meaning: "Similar to night-owls, they have a good burst of energy in the evening. As they sleep later, they tend to wake up later as well.",
        traits: ["Thoughtfully reflective", "Creative and impulsive", "Risk-takers", "Introverted and reserved"],
        ideal_schedule: ["7:30–9 a.m.: Wake up", "10 a.m.–12 p.m.: Focus on lighter tasks", "12–2 p.m.: Complete deep or creative work", "2–5 p.m.: Focus on lighter, less intense tasks", "5–9 p.m.: Engage in creative tasks", "9–10 p.m.: Unwind from the day", "10 p.m.–12 a.m.: Prepare for bed", "12–7:30 a.m.: Sleep"],
        notes: ["Get as much work done as soon as possible as you are working in the night to avoid delaying the time to sleep", "Do turn in before 12 a.m. as you would need get at least 7 hours of sleep", "You might struggle with daily schedules, hence try to have a routine when you wake up to get yourself refreshed for the day"]
    }

    const dolphin = {
        type: "Dolphin",
        meaning: "Known as insomniacs, they are known to be light sleepers. They tend to sleep later and have shorter sleep duration.",
        traits: ["Detail-oriented", "Intelligent", "Shows bursts of creative energy", "Anxious and overthinkers"],
        ideal_schedule: ["6:30–7:30 a.m.: Wake up", "8–10 a.m.: Engage with easy to-dos", "10 a.m.–12 p.m.: Focus on demanding tasks", "12–4 p.m.: Complete less demanding tasks", "4–10 p.m.: Relax, unwind from the day", "10–11:30 p.m.: Prepare for bed", "12–6:30 a.m.: Sleep"],
        notes: ["Take breaks to mentally reset yourself to keep youself going on for the day", "Do unwind yourself and avoid distractions before you sleep", "Start with small tasks before progressing to even more demanding tasks"]
    }


    return (
        <div className="surveyresultpage">
            <h3>Your results...</h3>
            <Row>
                <Col>
                    {idx === 0 && <div className='text-center'><img src={lion_img} style={{ width: "300px", height: "155px" }} alt="auditory" /></div>}
                    {idx === 1 && <div className='text-center'><img src={bear_img} style={{ width: "300px", height: "155px" }} alt="visual" /></div>}
                    {idx === 2 && <div className='text-center'><img src={wolf_img} style={{ width: "300px", height: "155px" }} alt="kinesthetic" /></div>}
                    {idx === 3 && <div className='text-center'><img src={dolphin_img} style={{ width: "300px", height: "155px" }} alt="kinesthetic" /></div>}
                </Col>
                <Col>
                    <h2>You're a <span>
                        {idx === 0 && lion.type}
                        {idx === 1 && bear.type}
                        {idx === 2 && wolf.type}
                        {idx === 3 && dolphin.type}
                    </span> learner!</h2>
                </Col>
            </Row>
            <Row className="meaningrow">
                <Col>
                    <div className="surveymeaning">
                        <h3>The meaning:</h3>
                        <h5>
                            {idx === 0 && lion.meaning}
                            {idx === 1 && bear.meaning}
                            {idx === 2 && wolf.meaning}
                            {idx === 3 && dolphin.meaning}
                        </h5>
                        <h3>Characteristics and traits:</h3>
                        <h5>
                            {idx === 0 && <div>{lion.traits.map((trait) => <li>{trait}</li>)}</div>}
                            {idx === 1 && <div>{bear.traits.map((trait) => <li>{trait}</li>)}</div>}
                            {idx === 2 && <div>{wolf.traits.map((trait) => <li>{trait}</li>)}</div>}
                            {idx === 3 && <div>{dolphin.traits.map((trait) => <li>{trait}</li>)}</div>}
                        </h5>
                        <div className="feedbackBtn text-center">
                            <h5>Was this helpful?</h5>
                            <Button className="feedbackYes">Yes</Button>
                            <Button className="feedbackNo">No</Button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="surveymeaning">
                        <h3>Ideal daily schedule:</h3>
                        <h5>
                            {idx === 0 && <div>{lion.ideal_schedule.map((schedule) => <li>{schedule}</li>)}</div>}
                            {idx === 1 && <div>{bear.ideal_schedule.map((schedule) => <li>{schedule}</li>)}</div>}
                            {idx === 2 && <div>{wolf.ideal_schedule.map((schedule) => <li>{schedule}</li>)}</div>}
                            {idx === 3 && <div>{dolphin.ideal_schedule.map((schedule) => <li>{schedule}</li>)}</div>}
                        </h5>
                        <h3>Your weaknesses:</h3>
                        <h5>
                            {idx === 0 && <div>{lion.notes.map((note) => <li>{note}</li>)}</div>}
                            {idx === 1 && <div>{bear.notes.map((note) => <li>{note}</li>)}</div>}
                            {idx === 2 && <div>{wolf.notes.map((note) => <li>{note}</li>)}</div>}
                            {idx === 3 && <div>{dolphin.notes.map((note) => <li>{note}</li>)}</div>}
                        </h5>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Survey3Result;    