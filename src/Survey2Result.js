import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'antd';

const Survey2Result = (props) => {
    let idx = Math.floor(Math.random() * 2)
    if (idx === 0) {
        sessionStorage.setItem("mbti", "INFJ")
    } else if (idx === 1) {
        sessionStorage.setItem("mbti", "ENTP")
    }
    const infj = {
        type: "INFJ",
        meaning: "INFJ are the advocates. Their ideals and principles are what keeps them going as they want to see a change for the greater good.",
        traits: ["Find new perspectives on how to solve certain problems", "Accept constructive feedback", "Clarify your doubts or raise your views when there is something interesting", "Organising facts or themes into patterns and themes work best"],
        strengths: ["Creative","Insightful","Principled","Passionate","Altruistic"],
        weaknesses: ["Sensitive to criticism","Reserved","Perfectionist","Overly ambitious","Burnt out easily"]
    }

    const entp = {
        type: "ENTP",
        meaning: "ENTP are the debators. Their curious nature sets fire to debating qualities, as they would challenge the norms and find new perspectives.",
        traits: ["Find new perspectives on how to solve certain problems", "Accept constructive feedback", "Clarify your doubts or raise your views when there is something interesting", "Organising facts or themes into patterns and themes work best"],
        strengths: ["Quick-thinking","Original","Knowledgeable, if not curious","Energetic","Charismatic","Excellent brainstormers"],
        weaknesses: ["Insensitive","Intolerant","Tendency to argue over the boundaries","Short attention span","Too ambitious"]
    }


    return (
        <div className="surveyresultpage">
            <h3>Your results...</h3>
            <Row>
                <Col>
                    {idx === 0 && <div className='text-center mbti-text' style={{color: "#88619a"}}>INFJ</div>}
                    {idx === 1 && <div className='text-center mbti-text' style={{color: "#33a474"}}>ENTP</div>}
                </Col>
                <Col>
                    <h2>You're a <span>
                        {idx === 0 && infj.type}
                        {idx === 1 && entp.type}
                    </span> !</h2>
                </Col>
            </Row>
            <Row className="meaningrow">
                <Col>
                    <div className="surveymeaning">
                        <h3>The meaning:</h3>
                        <h5>
                            {idx === 0 && infj.meaning}
                            {idx === 1 && entp.meaning}
                        </h5>
                        <h3>Learning traits:</h3>
                        <h5>
                            {idx === 0 && <div>{infj.traits.map((trait) => <li>{trait}</li>)}</div>}
                            {idx === 1 && <div>{entp.traits.map((trait) => <li>{trait}</li>)}</div>}
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
                            {idx === 0 && <div>{infj.strengths.map((strength) => <li>{strength}</li>)}</div>}
                            {idx === 1 && <div>{entp.strengths.map((strength) => <li>{strength}</li>)}</div>}
                        </h5>
                        <h3>Your weaknesses:</h3>
                        <h5>
                            {idx === 0 && <div>{infj.weaknesses.map((weakness) => <li>{weakness}</li>)}</div>}
                            {idx === 1 && <div>{entp.weaknesses.map((weakness) => <li>{weakness}</li>)}</div>}
                        </h5>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Survey2Result;    