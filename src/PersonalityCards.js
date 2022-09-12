import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import auditory_img from './Images/auditory.png';
import visual_img from './Images/visual.png';
import kinesthetic_img from './Images/kinesthetic.png';
import lion_img from './Images/lion.png';
import bear_img from './Images/bear.png';
import wolf_img from './Images/wolf.png';
import dolphin_img from './Images/dolphin.png';

const PersonalityCards = () => {
    const learningstyle = sessionStorage.getItem("learningstyle")
    const mbti = sessionStorage.getItem("mbti")
    const chronotype = sessionStorage.getItem("chronotype")
    return (
        <div className="personalityCards">
            <Row className="text-center">
                <Col><Card><h4>Learning Style</h4><div className="personalityImg">
                    {learningstyle === "Auditory" && <img src={auditory_img} style={{ width: "150px", height: "150px" }} alt="auditory" />}
                    {learningstyle === "Visual" && <img src={visual_img} style={{ width: "150px", height: "150px" }} alt="visual" />}
                    {learningstyle === "Kinesthetic" && <img src={kinesthetic_img} style={{ width: "150px", height: "150px" }} alt="kinesthetic" />}
                </div><div>{learningstyle}</div><Link to="/startsurvey" state={{ name: "learning style", time: "8 mins", route: "learningstyle" }}><button>Test it now!</button></Link></Card></Col>
                <Col><Card><h4>MBTI</h4><div className="personalityImg">Image/Icon</div><div>{mbti}</div><Link to="/startsurvey" state={{ name: "MBTI", time: "12 mins", route: "mbti" }}><button>Test it now!</button></Link></Card></Col>
                <Col><Card><h4>Chronotype</h4><div className="personalityImg">
                    {chronotype === "Lion" && <img src={lion_img} style={{ width: "150px", height: "150px" }} alt="auditory" />}
                    {chronotype === "Bear" && <img src={bear_img} style={{ width: "150px", height: "150px" }} alt="visual" />}
                    {chronotype === "Wolf" && <img src={wolf_img} style={{ width: "150px", height: "150px" }} alt="kinesthetic" />}
                    {chronotype === "Dolphin" && <img src={dolphin_img} style={{ width: "150px", height: "150px" }} alt="visual" />}
                </div><div>{chronotype}</div><Link to="/startsurvey" state={{ name: "Chronotype", time: "12 mins", route: "chronotype" }}><button>Test it now!</button></Link></Card></Col>
            </Row>
        </div>
    )
};

export default PersonalityCards;