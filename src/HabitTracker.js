import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { Avatar } from 'antd';
import { TiTick } from 'react-icons/ti';
import { AiOutlineCalendar, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import React, { useState } from 'react';
import { Checkbox } from 'antd';
import Modal from 'react-bootstrap/Modal';

const HabitTracker = () => {

    const [showHabit, setShowHabit] = useState(false);
    const handleCloseHabit = () => setShowHabit(false);
    const handleShowHabit = () => setShowHabit(true);

    const onChange1 = (e) => {
        if (e.target.checked === true) {
            sessionStorage.setItem("habit1", "Habit 1")
        } else {
            localStorage.removeItem("habit1");
        }
    };

    const onChange2 = (e) => {
        if (e.target.checked === true) {
            sessionStorage.setItem("habit2", "Habit 2")
        } else {
            localStorage.removeItem("habit2");
        }
    };

    const onChange3 = (e) => {
        if (e.target.checked === true) {
            sessionStorage.setItem("habit3", "Habit 3")
        } else {
            localStorage.removeItem("habit3");
        }
    };

    const onChange4 = (e) => {
        if (e.target.checked === true) {
            sessionStorage.setItem("habit4", "Habit 4")
        } else {
            localStorage.removeItem("habit4");
        }
    };

    const onChange5 = (e) => {
        if (e.target.checked === true) {
            sessionStorage.setItem("habit5", "Habit 5")
        } else {
            localStorage.removeItem("habit5");
        }
    };

    const onChange6 = (e) => {
        if (e.target.checked === true) {
            sessionStorage.setItem("habit6", "Habit 6")
        } else {
            localStorage.removeItem("habit6");
        }
    };

    const onChange7 = (e) => {
        if (e.target.checked === true) {
            sessionStorage.setItem("habit7", "Habit 7")
        } else {
            localStorage.removeItem("habit7");
        }
    };

    const onChange8 = (e) => {
        if (e.target.checked === true) {
            sessionStorage.setItem("habit8", "Habit 8")
        } else {
            localStorage.removeItem("habit8");
        }
    };

    const onChange9 = (e) => {
        if (e.target.checked === true) {
            sessionStorage.setItem("habit9", "Habit 9")
        } else {
            localStorage.removeItem("habit9");
        }
    };

    const onChange10 = (e) => {
        if (e.target.checked === true) {
            sessionStorage.setItem("habit10", "Habit 10")
        } else {
            localStorage.removeItem("habit10");
        }
    };

    const onChange11 = (e) => {
        if (e.target.checked === true) {
            sessionStorage.setItem("habit11", "Habit 11")
        } else {
            localStorage.removeItem("habit11");
        }
    };

    const onChange12 = (e) => {
        if (e.target.checked === true) {
            sessionStorage.setItem("habit12", "Habit 12")
        } else {
            localStorage.removeItem("habit12");
        }
    };

    const onChange13 = (e) => {
        if (e.target.checked === true) {
            sessionStorage.setItem("habit13", "Habit 13")
        } else {
            localStorage.removeItem("habit13");
        }
    };

    const learningstyle = sessionStorage.getItem("learningstyle")
    const mbti = sessionStorage.getItem("mbti")
    const chronotype = sessionStorage.getItem("chronotype")

    const habit_1 = sessionStorage.getItem("habit1")
    const habit_2 = sessionStorage.getItem("habit2")
    const habit_3 = sessionStorage.getItem("habit3")
    const habit_4 = sessionStorage.getItem("habit4")
    const habit_5 = sessionStorage.getItem("habit5")
    const habit_6 = sessionStorage.getItem("habit6")
    const habit_7 = sessionStorage.getItem("habit7")
    const habit_8 = sessionStorage.getItem("habit8")
    const habit_9 = sessionStorage.getItem("habit9")
    const habit_10 = sessionStorage.getItem("habit10")
    const habit_11 = sessionStorage.getItem("habit11")
    const habit_12 = sessionStorage.getItem("habit12")
    const habit_13 = sessionStorage.getItem("habit13")


    const habitClick = (e) => {
        if (e.target.style.border === "3px solid rgb(77, 128, 109)") {
            e.target.style.border = `3px solid white`;
        } else {
            e.target.style.border = "3px solid rgb(77, 128, 109)";
        }
    };

    return (
        <Container className="dashboard">
            <Row>
                <Col xs={3}>
                    <div className="profile text-center">
                        <Avatar style={{ width: 15 }} src="https://joeschmoe.io/api/v1/random" />
                    </div>
                    <div className="profileMenu">
                        <h2 className="text-center">John Tan, 3A1</h2>
                        <div className="menu text-left">
                            <NavLink style={({ isActive }) => ({ color: isActive ? "white" : "#669282" })} to="/"><AiOutlineMenu /> Dashboard</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "white" : "#669282" })} to="/calendar"><AiOutlineCalendar /> Calendar</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "white" : "#669282" })} to="/habittracker"><TiTick /> Habit tracker</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "white" : "#669282" })} to="/personality"><BsFillPersonFill /> Personality</NavLink>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="personalityText">Habit Tracker<Button onClick={() => { handleShowHabit() }} className='addhabitbtn'>+ Add Habit</Button></div>
                    <Modal className="habitModal" size="lg" show={showHabit} onHide={handleCloseHabit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Habits</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h3>Habit List:</h3>
                            {chronotype === "Bear" && <div><Checkbox id="habit1" onChange={onChange1}> Have a power nap of up to 20 mins</Checkbox></div>}
                            {learningstyle === "Auditory" && <div><Checkbox id="habit2" onChange={onChange2}> Participate in class discussion</Checkbox></div>}
                            {chronotype === "Bear" && <div><Checkbox id="habit3" onChange={onChange3}> Exercise at the school gym</Checkbox></div>}
                            {learningstyle === "Auditory" && <div><Checkbox id="habit4" onChange={onChange4}> Draw out a mind map for a certain topic's notes</Checkbox></div>}
                            {chronotype === "Bear" && <div><Checkbox id="habit5" onChange={onChange5}> No usage of apps that are not productive</Checkbox></div>}
                            {chronotype === "Bear" && <div><Checkbox id="habit6" onChange={onChange6}> Read a book</Checkbox></div>}
                            {chronotype === "Bear" && <div><Checkbox id="habit7" onChange={onChange7}> Write down 2 to 3 things you have learnt</Checkbox></div>}
                            {learningstyle === "Auditory" && <div><Checkbox id="habit8" onChange={onChange8}> Repeat what I have learnt at least 5 times</Checkbox></div>}
                            {chronotype === "Bear" && <div><Checkbox id="habit9" onChange={onChange9}> No usage of device by 2300</Checkbox></div>}
                            {mbti === "INFJ" && <div><Checkbox id="habit10" onChange={onChange10}> Create associations between content taught</Checkbox></div>}
                            {mbti === "INFJ" && <div><Checkbox id="habit11" onChange={onChange11}> Study/do homework at library</Checkbox></div>}
                            {mbti === "INFJ" && <div><Checkbox id="habit12" onChange={onChange12}> Make associations to topic you do not understand</Checkbox></div>}
                            {mbti === "INFJ" && <div><Checkbox id="habit13" onChange={onChange13}> Start with Chinese (Hardest subject)</Checkbox></div>}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleCloseHabit}>
                                Back
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className='habittrackerBoard'>
                        <h2 className="text-center">Monday, Sept 12 - Friday, Sept 16</h2>
                        <div className="habit-indicator text-center">
                            <span><span className="habit-ind lsicon"></span> Learning Style</span>
                            <span><span className="habit-ind mbtiicon"></span> MBTI</span>
                            <span><span className="habit-ind chroicon"></span> Chronotype</span>
                        </div>
                        <div className="meter">
                            <div className='meter2'></div>
                        </div>
                        <Row>
                            <Col xs={4} className="text-center">
                                <p>Ongoing habits</p>
                                {/* <div className='habit-ind'>
                                    <li className='hab1'><span>Habit 1</span></li>
                                </div>
                                <div className='habit-ind'>
                                    <li className='hab2'><span>Habit 2</span></li>
                                </div>
                                <div className='habit-ind'>
                                    <li className='hab3'><span>Habit 3</span></li>
                                </div> */}
                                {/* <div className='habit-ind'>
                                    <li className='hab4'><span>Habit 4</span></li>
                                </div>
                                <div className='habit-ind'>
                                    <li className='hab5'><span>Habit 5</span></li>
                                </div> */}
                                {habit_1 === "Habit 1" && <div className='habit-ind'>
                                    <span>Have a power nap of up to 20 mins</span>
                                </div>}
                                {habit_2 === "Habit 2" && <div className='habit-ind'>
                                    <span>Participate in class discussion</span>
                                </div>}
                                {habit_3 === "Habit 3" && <div className='habit-ind'>
                                    <span>Exercise at the school gym</span>
                                </div>}
                                {habit_4 === "Habit 4" && <div className='habit-ind'>
                                    <span>Draw out a mind map for a certain topic's notes</span>
                                </div>}
                                {habit_5 === "Habit 5" && <div className='habit-ind'>
                                    <span>No usage of apps that are not productive</span>
                                </div>}
                                {habit_6 === "Habit 6" && <div className='habit-ind'>
                                    <span>Read a book</span>
                                </div>}
                                {habit_7 === "Habit 7" && <div className='habit-ind'>
                                    <span>Write down 2 to 3 things you have learnt</span>
                                </div>}
                                {habit_8 === "Habit 8" && <div className='habit-ind'>
                                    <span>Repeat what I have learnt at least 5 times</span>
                                </div>}
                                {habit_9 === "Habit 9" && <div className='habit-ind'>
                                    <span>No usage of device by 2300</span>
                                </div>}
                                {habit_10 === "Habit 10" && <div className='habit-ind'>
                                    <span>Create associations between content taught</span>
                                </div>}
                                {habit_11 === "Habit 11" && <div className='habit-ind'>
                                    <span>Study/do homework at library</span>
                                </div>}
                                {habit_12 === "Habit 12" && <div className='habit-ind'>
                                    <span>Make associations to topic you do not understand</span>
                                </div>}
                                {habit_13 === "Habit 13" && <div className='habit-ind'>
                                    <span>Start with Chinese (Hardest subject)</span>
                                </div>}
                            </Col>
                            <Col className="text-center day">
                                <h3>Mon</h3>
                                {/* <div className='habit habit-1' onClick={habitClick}></div>
                                <div className='habit habit-2' onClick={habitClick}></div>
                                <div className='habit habit-3' onClick={habitClick}></div> */}
                                {/* <div className='habit habit-4'></div>
                                <div className='habit habit-5'></div> */}
                                {habit_1 === "Habit 1" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_2 === "Habit 2" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_4 === "Habit 4" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_5 === "Habit 5" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_6 === "Habit 6" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_7 === "Habit 7" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_8 === "Habit 8" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_9 === "Habit 9" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_10 === "Habit 10" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_11 === "Habit 11" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_12 === "Habit 12" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_13 === "Habit 13" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                            </Col>
                            <Col className="text-center day">
                                <h3>Tue</h3>
                                {/* <div className='habit habit-1' onClick={habitClick}></div>
                                <div className='habit habit-2' onClick={habitClick}></div>
                                <div className='habit habit-3' onClick={habitClick}></div> */}
                                {/* <div className='habit habit-e'></div>
                                <div className='habit habit-5'></div> */}
                                {habit_1 === "Habit 1" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_2 === "Habit 2" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_4 === "Habit 4" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_5 === "Habit 5" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_6 === "Habit 6" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_7 === "Habit 7" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_8 === "Habit 8" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_9 === "Habit 9" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_10 === "Habit 10" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_11 === "Habit 11" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_12 === "Habit 12" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_13 === "Habit 13" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                            </Col>
                            <Col className="text-center day">
                                <h3>Wed</h3>
                                {/* <div className='habit habit-1' onClick={habitClick}></div>
                                <div className='habit habit-2' onClick={habitClick}></div>
                                <div className='habit habit-3' onClick={habitClick}></div> */}
                                {/* <div className='habit habit-4'></div>
                                <div className='habit habit-5'></div> */}
                                {habit_1 === "Habit 1" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_2 === "Habit 2" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_4 === "Habit 4" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_5 === "Habit 5" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_6 === "Habit 6" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_7 === "Habit 7" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_8 === "Habit 8" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_9 === "Habit 9" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_10 === "Habit 10" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_11 === "Habit 11" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_12 === "Habit 12" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_13 === "Habit 13" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                            </Col>
                            <Col className="text-center day">
                                <h3>Thu</h3>
                                {/* <div className='habit habit-e' onClick={habitClick}></div>
                                <div className='habit habit-2' onClick={habitClick}></div>
                                <div className='habit habit-3' onClick={habitClick}></div> */}
                                {/* <div className='habit habit-4'></div>
                                <div className='habit habit-e'></div> */}
                                {habit_1 === "Habit 1" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_2 === "Habit 2" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_4 === "Habit 4" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_5 === "Habit 5" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_6 === "Habit 6" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_7 === "Habit 7" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_8 === "Habit 8" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_9 === "Habit 9" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_10 === "Habit 10" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_11 === "Habit 11" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_12 === "Habit 12" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_13 === "Habit 13" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                            </Col>
                            <Col className="text-center day">
                                <h3>Fri</h3>
                                {/* <div className='habit habit-1' onClick={habitClick}></div>
                                <div className='habit habit-2' onClick={habitClick}></div>
                                <div className='habit habit-3' onClick={habitClick}></div> */}
                                {/* <div className='habit habit-4'></div>
                                <div className='habit habit-5'></div> */}
                                {habit_1 === "Habit 1" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_2 === "Habit 2" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_4 === "Habit 4" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_5 === "Habit 5" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_6 === "Habit 6" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_7 === "Habit 7" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_8 === "Habit 8" && <div className='habit habit-4 lsicon' onClick={habitClick}></div>}
                                {habit_9 === "Habit 9" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_10 === "Habit 10" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_11 === "Habit 11" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_12 === "Habit 12" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                                {habit_13 === "Habit 13" && <div className='habit habit-4 mbtiicon' onClick={habitClick}></div>}
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default HabitTracker;