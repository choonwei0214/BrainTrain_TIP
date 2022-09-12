import { useLocation } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'antd';
import { AiFillEye } from 'react-icons/ai';
import { IoEarOutline } from 'react-icons/io5';
import { FaRunning } from 'react-icons/fa';

const SurveyResult = (props) => {
    const location = useLocation();
    const data = location.state;
    let no_1 = 0
    let no_2 = 0
    let no_3 = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 1) {
            no_1 = no_1 + 1
        } else if (data[i] === 2) {
            no_2 = no_2 + 1
        } else {
            no_3 = no_3 + 1
        }
    }
    let idx;
    if (no_1 > no_2 && no_1 > no_3) {
        idx = 0
        sessionStorage.setItem("learningstyle", "Auditory")
    } else if (no_2 > no_1 && no_2 > no_3) {
        idx = 1
        sessionStorage.setItem("learningstyle", "Visual")
    } else if (no_3 > no_1 && no_3 > no_2) {
        idx = 2
        sessionStorage.setItem("learningstyle", "Kinesthetic")
    } else if (no_1 === no_2 && no_1 > no_3) {
        idx = 0
        sessionStorage.setItem("learningstyle", "Auditory")
    } else if (no_1 === no_3 && no_1 > no_2) {
        idx = 0
        sessionStorage.setItem("learningstyle", "Auditory")
    } else if (no_2 === no_3 && no_2 > no_1) {
        idx = 0
        sessionStorage.setItem("learningstyle", "Visual")
    }

    const auditory = {
        type: "Auditory",
        meaning: "You are suited to learn by hearing and listening. You are able to store information from verbal communication and sounds.",
        habits: ["Reading out concepts in your notes repeatedly", "Explaining the concepts and content to yourself or your friends", "Having a discussion with your friend to discuss topics", "Asking for explanations when in need of clarification or recollection"],
        strengths: ["Easier to interpret spoken instructions", "Can store information more easily by hearing sounds and words"],
        weaknesses: ["Might seem like one is distracted when talking to yourself", "Might take more time when repeating content to themselves"]
    }

    const visual = {
        type: "Visual",
        meaning: "You are suited to learn things using visuals, pictures and symbols. You use your sight to interpret, understand and remember things.",
        habits: ["Drawing pictures, diagrams or symbols", "Highlight or underline concepts that need emphasis", "Visualise how the concept works using scenarios or analogies", "Associate concepts with cues for better visualisation"],
        strengths: ["Neat and clean", "Able to visualise concepts in your head", "Find something to watch when bored", "Attracted to something visually appealing"],
        weaknesses: ["Difficulty understanding verbal directions", "Easily distracted by sound"]
    }

    const kinesthetic = {
        type: "Kinesthetic",
        meaning: ["You are suited to learn by touching and doing. You remember and understand content through movement and physical activity."],
        habits: ["Trace your finger when you are trying to read texts or memorise content", "Take breaks when you feel like you have not been able to take in information", "Do as many practice papers or questions to retain information", "When recalling information, break it down before piecing everything together"],
        strengths: ["Tend to be more physically active", "Well-coordinated", "Communicate through physical style"],
        weaknesses: ["Tend to have short attention spans, especially if they face difficult topics", "Require activity to get a better understanding of the topic"]
    }


    return (
        <div className="surveyresultpage">
            <Row>
                <Col xs={4}>
                    {idx === 0 && <div className='text-center'><IoEarOutline className="personality-icon"/></div>}
                    {idx === 1 && <div className='text-center'><AiFillEye className='personality-icon'/></div>}
                    {idx === 2 && <div className='text-center'><FaRunning className='personality-icon'/></div>}
                </Col>
                <Col>
                    <h2>You're a <span>
                        {idx === 0 && auditory.type}
                        {idx === 1 && visual.type}
                        {idx === 2 && kinesthetic.type}
                    </span> learner!</h2>
                    <h5>{idx === 0 && auditory.meaning}
                        {idx === 1 && visual.meaning}
                        {idx === 2 && kinesthetic.meaning}</h5>
                </Col>
            </Row>
            <Row className="meaningrow">
                <Col xs={6}>
                    <div className="surveymeaning">
                        <h3>Habits for optimal learning:</h3>
                        <h5>
                            {idx === 0 && <div>{auditory.habits.map((habit) => <li>{habit}</li>)}</div>}
                            {idx === 1 && <div>{visual.habits.map((habit) => <li>{habit}</li>)}</div>}
                            {idx === 2 && <div>{kinesthetic.habits.map((habit) => <li>{habit}</li>)}</div>}
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
                        <h3>Your strengths:</h3>
                        <h5>
                            {idx === 0 && <div>{auditory.strengths.map((strength) => <li>{strength}</li>)}</div>}
                            {idx === 1 && <div>{visual.strengths.map((strength) => <li>{strength}</li>)}</div>}
                            {idx === 2 && <div>{kinesthetic.strengths.map((strength) => <li>{strength}</li>)}</div>}
                        </h5>
                    </div>
                </Col>
                <Col>
                    <div className="surveymeaning">
                        <h3>Your weaknesses:</h3>
                        <h5>
                            {idx === 0 && <div>{auditory.weaknesses.map((weakness) => <li>{weakness}</li>)}</div>}
                            {idx === 1 && <div>{visual.weaknesses.map((weakness) => <li>{weakness}</li>)}</div>}
                            {idx === 2 && <div>{kinesthetic.weaknesses.map((weakness) => <li>{weakness}</li>)}</div>}
                        </h5>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default SurveyResult;    