import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { AiFillEye } from 'react-icons/ai';
import { IoEarOutline } from 'react-icons/io5';
import { FaRunning } from 'react-icons/fa';
import { GiLion,GiBearFace,GiWolfHead,GiDolphin } from 'react-icons/gi';

const PersonalityCards = () => {
    const learningstyle = sessionStorage.getItem("learningstyle")
    const mbti = sessionStorage.getItem("mbti")
    const chronotype = sessionStorage.getItem("chronotype")
    return (
        <div className="personalityCards">
            <Row className="text-center">
                <Col><Card><h4>Learning Style</h4><div className="personalityImg">
                    {learningstyle === "Auditory" && <AiFillEye className='personalityCard-icon'/>}
                    {learningstyle === "Visual" && <IoEarOutline className='personalityCard-icon'/>}
                    {learningstyle === "Kinesthetic" && <FaRunning className='personalityCard-icon'/>}
                </div><div>{learningstyle}</div><Link to="/startsurvey" state={{ name: "learning style", time: "8 mins", route: "learningstyle" }}><button>Test it now!</button></Link></Card></Col>
                <Col><Card><h4>MBTI</h4><div className="personalityImg">Image/Icon</div><div>{mbti}</div><Link to="/startsurvey" state={{ name: "MBTI", time: "12 mins", route: "mbti" }}><button>Test it now!</button></Link></Card></Col>
                <Col><Card><h4>Chronotype</h4><div className="personalityImg">
                    {chronotype === "Lion" && <GiLion className='personalityCard-icon'/>}
                    {chronotype === "Bear" && <GiBearFace className='personalityCard-icon'/>}
                    {chronotype === "Wolf" && <GiWolfHead className='personalityCard-icon'/>}
                    {chronotype === "Dolphin" && <GiDolphin className='personalityCard-icon'/>}
                </div><div>{chronotype}</div><Link to="/startsurvey" state={{ name: "Chronotype", time: "12 mins", route: "chronotype" }}><button>Test it now!</button></Link></Card></Col>
            </Row>
        </div>
    )
};

export default PersonalityCards;