import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'antd';
import { MdEmojiPeople } from 'react-icons/md';

const Survey2Result = (props) => {
    let idx = 0;
    if (idx === 0) {
        sessionStorage.setItem("mbti", "INFJ")
    } else if (idx === 1) {
        sessionStorage.setItem("mbti", "ENTP")
    }
    // const infj = {
    //     type: "INFJ",
    //     meaning: "INFJ are the advocates. Their ideals and principles are what keeps them going as they want to see a change for the greater good.",
    //     traits: ["Find new perspectives on how to solve certain problems", "Accept constructive feedback", "Clarify your doubts or raise your views when there is something interesting", "Organising facts or themes into patterns and themes work best"],
    //     strengths: ["Creative", "Insightful", "Principled", "Passionate", "Altruistic"],
    //     weaknesses: ["Sensitive to criticism", "Reserved", "Perfectionist", "Overly ambitious", "Burnt out easily"]
    // }

    // const entp = {
    //     type: "ENTP",
    //     meaning: "ENTP are the debators. Their curious nature sets fire to debating qualities, as they would challenge the norms and find new perspectives.",
    //     traits: ["Find new perspectives on how to solve certain problems", "Accept constructive feedback", "Clarify your doubts or raise your views when there is something interesting", "Organising facts or themes into patterns and themes work best"],
    //     strengths: ["Quick-thinking", "Original", "Knowledgeable, if not curious", "Energetic", "Charismatic", "Excellent brainstormers"],
    //     weaknesses: ["Insensitive", "Intolerant", "Tendency to argue over the boundaries", "Short attention span", "Too ambitious"]
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


        // <div className="surveyresultpage">
        //     <Row>
        //         <Col xs={4}>
        //             {idx === 0 && <div className='text-center mbti-text' style={{color: "#88619a"}}>INFJ</div>}
        //             {idx === 1 && <div className='text-center mbti-text' style={{color: "#33a474"}}>ENTP</div>}
        //         </Col>
        //         <Col>
        //             <h2>You're a <span>
        //                 {idx === 0 && infj.type}
        //                 {idx === 1 && entp.type}
        //             </span> !</h2>
        //             <h5>
        //                     {idx === 0 && infj.meaning}
        //                     {idx === 1 && entp.meaning}
        //                 </h5>
        //         </Col>
        //     </Row>
        //     <Row className="meaningrow">
        //         <Col xs={6}>
        //             <div className="surveymeaning">
        //                 <h3>Learning traits:</h3>
        //                 <h5>
        //                     {idx === 0 && <div>{infj.traits.map((trait) => <li>{trait}</li>)}</div>}
        //                     {idx === 1 && <div>{entp.traits.map((trait) => <li>{trait}</li>)}</div>}
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
        //                     {idx === 0 && <div>{infj.strengths.map((strength) => <li>{strength}</li>)}</div>}
        //                     {idx === 1 && <div>{entp.strengths.map((strength) => <li>{strength}</li>)}</div>}
        //                 </h5>
        //             </div>
        //         </Col>
        //         <Col>
        //             <div className="surveymeaning">
        //                 <h3>Your weaknesses:</h3>
        //                 <h5>
        //                     {idx === 0 && <div>{infj.weaknesses.map((weakness) => <li>{weakness}</li>)}</div>}
        //                     {idx === 1 && <div>{entp.weaknesses.map((weakness) => <li>{weakness}</li>)}</div>}
        //                 </h5>
        //             </div>
        //         </Col>
        //     </Row>
        // </div>

        <div class="flip-card text-center">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <Button onClick={handleClick1}>Click here to flip!</Button>
                    <Row>
                        <Col>
                            <div className="flip-card-icon"><MdEmojiPeople /></div>
                            <h3>Description</h3>
                            <p style={{margin: "10px 100px","font-size": "1.2rem"}}>INFJ are the advocates. Their ideals and principles are what keeps them going as they want to see a change for the greater good.</p>
                            <div></div>
                        </Col>
                        <Col>
                            <div className="text-center" style={{"margin-top": "50px"}}>
                                <h1>INFJ</h1>
                                <h1 style={{"background-color": "#004A2F","margin":"5px","border-radius":"20px",color:"white"}}>ADVOCATES</h1>
                                <h2>Strengths</h2>
                                <ul>
                                    <li>Thoughtfully reflective</li>
                                    <li>Reflective and impulsive</li>
                                    <li>Risk-takers</li>
                                    <li>Introverted and reserved</li>
                                </ul>
                                <h2>Weaknesses</h2>
                                <ul>
                                    <li>Sensitive to critism</li>
                                    <li>Reserved</li>
                                    <li>Perfectionist</li>
                                    <li>Overly ambitious</li>
                                    <li>Burnt out easily</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div class="flip-card-back">
                    <Button onClick={handleClick2}>Click here to flip!</Button>
                    <h2>Things to note</h2>
                    <ul>
                        <li>Use analogies and acronyms instead of blank memorisation</li>
                        <li>Are independent learners and prefer one-to-one consultation</li>
                        <li>Get your hands on tougher questions to challenge yourself</li>
                        <li>Wants freedom in their work structure and schedule</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Survey2Result;    