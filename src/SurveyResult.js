import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import { AiFillEye, AiOutlineArrowRight, AiFillSound } from 'react-icons/ai';
import { useState } from "react";

const SurveyResult = (props) => {
    // let idx = 0;
    const [count, setCount] = useState(0);

    sessionStorage.setItem("learningstyle", "Auditory")
    // const auditory = {
    //     type: "Auditory",
    //     meaning: "You are suited to learn by hearing and listening. You are able to store information from verbal communication and sounds.",
    //     habits: ["Reading out concepts in your notes repeatedly", "Explaining the concepts and content to yourself or your friends", "Having a discussion with your friend to discuss topics", "Asking for explanations when in need of clarification or recollection"],
    //     strengths: ["Easier to interpret spoken instructions", "Can store information more easily by hearing sounds and words"],
    //     weaknesses: ["Might seem like one is distracted when talking to yourself", "Might take more time when repeating content to themselves"]
    // }

    const surveyres = [
        <div className="survey1result">
            <Row>
                <Col>
                    <div className="survey1result-icon text-center"><AiFillEye /></div>
                </Col>
                <Col>
                    <div className="survey1result-type">You're an <br /><b>Auditory Learner</b></div>
                    <div className="survey1result-btn">
                        <button onClick={() => setCount(count + 1)}>What does this mean? <AiOutlineArrowRight /></button>
                    </div>
                </Col>
            </Row>
        </div>,
        <div className="survey1resultpg2">
            <Row>
                <Col>
                    <h1>You are suited to learn by hearing and listening. You are able to store information from verbal communication and sounds.</h1>
                    <div className="survey1resultpg2-icon"><AiFillSound /></div>
                </Col>
                <Col >
                    <div className="survey1resultpg2-num">
                        01
                    </div>
                    <div className="survey1resultpg2-btn">
                        <button onClick={() => setCount(count + 1)}>What are my strengths? <AiOutlineArrowRight /></button>
                    </div>
                </Col>
            </Row>
        </div>,
        <div className="survey1resultpg2">
            <Row>
                <Col>
                    <h1>Your Strengths</h1>
                    <ul>
                        <li>Easier to interpret spoken instructions</li>
                        <li>Can store information more easily by hearing sounds and words</li>
                    </ul>
                </Col>
                <Col >
                    <div className="survey1resultpg2-num">
                        02
                    </div>
                    <div className="survey1resultpg2-btn">
                        <button onClick={() => setCount(count + 1)}>What's holding me back? <AiOutlineArrowRight /></button>
                    </div>
                </Col>
            </Row>
        </div>,
        <div className="survey1resultpg2">
            <Row>
                <Col>
                    <h1>Your Weaknesses</h1>
                    <ul>
                        <li>Might seem like one is distracted when talking to yourself</li>
                        <li>Might take more time when repeating content to themselves</li>
                    </ul>
                </Col>
                <Col >
                    <div className="survey1resultpg2-num">
                        03
                    </div>
                    <div className="survey1resultpg2-btn">
                        <button onClick={() => setCount(count + 1)}>What habits can help my learning? <AiOutlineArrowRight /></button>
                    </div>
                </Col>
            </Row>
        </div>,
        <div className="survey1resultpg2">
            <Row>
                <Col>
                    <h1>Habits for Optimal Learning</h1>
                    <ul>
                        <li>Reading out concepts in your notes repeatedly</li>
                        <li>Explaining the concepts and content to yourself or your friends</li>
                        <li>Having a discussion with your friend to discuss topics</li>
                        <li>Asking for explanations when in need of clarification or recollection</li>
                    </ul>
                </Col>
                <Col >
                    <div className="survey1resultpg2-num">
                        04
                    </div>
                    <div className="survey1resultpg2-btn">
                        <NavLink to="/">Back to Dashboard <AiOutlineArrowRight /></NavLink>
                    </div>
                </Col>
            </Row>
        </div>
    ]

    return (
        <div>
            {
                surveyres[count]
            }
        </div>


        // <div className="surveyresultpage">
        //     <Row>
        //         <Col xs={4}>
        //             {idx === 0 && <div className='text-center'><IoEarOutline className="personality-icon"/></div>}
        //             {idx === 1 && <div className='text-center'><AiFillEye className='personality-icon'/></div>}
        //             {idx === 2 && <div className='text-center'><FaRunning className='personality-icon'/></div>}
        //         </Col>
        //         <Col>
        //             <h2>You're a <span>
        //                 {idx === 0 && auditory.type}
        //                 {idx === 1 && visual.type}
        //                 {idx === 2 && kinesthetic.type}
        //             </span> learner!</h2>
        //             <h5>{idx === 0 && auditory.meaning}
        //                 {idx === 1 && visual.meaning}
        //                 {idx === 2 && kinesthetic.meaning}</h5>
        //         </Col>
        //     </Row>
        //     <Row className="meaningrow">
        //         <Col xs={6}>
        //             <div className="surveymeaning">
        //                 <h3>Habits for optimal learning:</h3>
        //                 <h5>
        //                     {idx === 0 && <div>{auditory.habits.map((habit) => <li>{habit}</li>)}</div>}
        //                     {idx === 1 && <div>{visual.habits.map((habit) => <li>{habit}</li>)}</div>}
        //                     {idx === 2 && <div>{kinesthetic.habits.map((habit) => <li>{habit}</li>)}</div>}
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
        //                 <h3>Your strengths:</h3>
        //                 <h5>
        //                     {idx === 0 && <div>{auditory.strengths.map((strength) => <li>{strength}</li>)}</div>}
        //                     {idx === 1 && <div>{visual.strengths.map((strength) => <li>{strength}</li>)}</div>}
        //                     {idx === 2 && <div>{kinesthetic.strengths.map((strength) => <li>{strength}</li>)}</div>}
        //                 </h5>
        //             </div>
        //         </Col>
        //         <Col>
        //             <div className="surveymeaning">
        //                 <h3>Your weaknesses:</h3>
        //                 <h5>
        //                     {idx === 0 && <div>{auditory.weaknesses.map((weakness) => <li>{weakness}</li>)}</div>}
        //                     {idx === 1 && <div>{visual.weaknesses.map((weakness) => <li>{weakness}</li>)}</div>}
        //                     {idx === 2 && <div>{kinesthetic.weaknesses.map((weakness) => <li>{weakness}</li>)}</div>}
        //                 </h5>
        //             </div>
        //         </Col>
        //     </Row>
        // </div>
    );
}

export default SurveyResult;    