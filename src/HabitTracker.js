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


    const habitClick = (e) => {
        if (e.target.style.backgroundColor === "rgb(236, 155, 0)") {
            e.target.style.backgroundColor = "gray";
        } else {
            e.target.style.backgroundColor = "#EC9B00";
        }
    };

    const habitClick2 = (e) => {
        if (e.target.style.backgroundColor === "rgb(154, 35, 37)") {
            e.target.style.backgroundColor = "gray";
        } else {
            e.target.style.backgroundColor = "rgb(154, 35, 37)";
        }
    };

    const habitClick3 = (e) => {
        if (e.target.style.backgroundColor === "rgb(1, 93, 114)") {
            e.target.style.backgroundColor = "gray";
        } else {
            e.target.style.backgroundColor = "rgb(1, 93, 114)";
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
                            {chronotype === "Wolf" && <div><Checkbox id="habit1" onChange={onChange1}> If you feel sleepy, quickly go and wash your face with some cold water</Checkbox></div>}
                            {learningstyle === "Auditory" && <div><Checkbox id="habit2" onChange={onChange2}> Read out important part of your notes if you have to do so</Checkbox></div>}
                            {learningstyle === "Auditory" && <div><Checkbox id="habit3" onChange={onChange3}> Record important parts of the lessons, especially if the content taught is important</Checkbox></div>}
                            {mbti === "INFJ" && <div><Checkbox id="habit4" onChange={onChange4}> Reminder to use the PLDs to ask questions through the use of padlet</Checkbox></div>}
                            {mbti === "INFJ" && <div><Checkbox id="habit5" onChange={onChange5}> Review past assignments</Checkbox></div>}
                            {mbti === "INFJ" && <div><Checkbox id="habit6" onChange={onChange6}> Make associations with the content taught in the lesson</Checkbox></div>}
                            {mbti === "INFJ" && <div><Checkbox id="habit7" onChange={onChange7}> Create mental maps in your notes</Checkbox></div>}
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
                            <span><span className="habit-ind lsicon1"></span> Learning Style</span>
                            <span><span className="habit-ind mbtiicon1"></span> MBTI</span>
                            <span><span className="habit-ind chroicon1"></span> Chronotype</span>
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
                                    <span>If you feel sleepy, quickly go and wash your face with some cold water</span>
                                </div>}
                                {habit_2 === "Habit 2" && <div className='habit-ind'>
                                    <span>Read out important part of your notes if you have to do so</span>
                                </div>}
                                {habit_3 === "Habit 3" && <div className='habit-ind'>
                                    <span>Record important parts of the lessons, especially if the content taught is important</span>
                                </div>}
                                {habit_4 === "Habit 4" && <div className='habit-ind'>
                                    <span>Reminder to use the PLDs to ask questions through the use of padlet</span>
                                </div>}
                                {habit_5 === "Habit 5" && <div className='habit-ind'>
                                    <span>Review past assignments</span>
                                </div>}
                                {habit_6 === "Habit 6" && <div className='habit-ind'>
                                    <span>Make associations with the content taught in the lesson</span>
                                </div>}
                                {habit_7 === "Habit 7" && <div className='habit-ind'>
                                    <span>Create mental maps in your notes</span>
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
                                {habit_2 === "Habit 2" && <div className='habit habit-4 lsicon' onClick={habitClick2}></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4 lsicon' onClick={habitClick2}></div>}
                                {habit_4 === "Habit 4" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_5 === "Habit 5" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_6 === "Habit 6" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_7 === "Habit 7" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                            </Col>
                            <Col className="text-center day">
                                <h3>Tue</h3>
                                {/* <div className='habit habit-1' onClick={habitClick}></div>
                                <div className='habit habit-2' onClick={habitClick}></div>
                                <div className='habit habit-3' onClick={habitClick}></div> */}
                                {/* <div className='habit habit-e'></div>
                                <div className='habit habit-5'></div> */}
                                {habit_1 === "Habit 1" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_2 === "Habit 2" && <div className='habit habit-4 lsicon' onClick={habitClick2}></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4 lsicon' onClick={habitClick2}></div>}
                                {habit_4 === "Habit 4" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_5 === "Habit 5" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_6 === "Habit 6" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_7 === "Habit 7" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                            </Col>
                            <Col className="text-center day">
                                <h3>Wed</h3>
                                {/* <div className='habit habit-1' onClick={habitClick}></div>
                                <div className='habit habit-2' onClick={habitClick}></div>
                                <div className='habit habit-3' onClick={habitClick}></div> */}
                                {/* <div className='habit habit-4'></div>
                                <div className='habit habit-5'></div> */}
                                {habit_1 === "Habit 1" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_2 === "Habit 2" && <div className='habit habit-4 lsicon' onClick={habitClick2}></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4 lsicon' onClick={habitClick2}></div>}
                                {habit_4 === "Habit 4" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_5 === "Habit 5" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_6 === "Habit 6" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_7 === "Habit 7" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                            </Col>
                            <Col className="text-center day">
                                <h3>Thu</h3>
                                {/* <div className='habit habit-e' onClick={habitClick}></div>
                                <div className='habit habit-2' onClick={habitClick}></div>
                                <div className='habit habit-3' onClick={habitClick}></div> */}
                                {/* <div className='habit habit-4'></div>
                                <div className='habit habit-e'></div> */}
                                {habit_1 === "Habit 1" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_2 === "Habit 2" && <div className='habit habit-4 lsicon' onClick={habitClick2}></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4 lsicon' onClick={habitClick2}></div>}
                                {habit_4 === "Habit 4" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_5 === "Habit 5" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_6 === "Habit 6" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_7 === "Habit 7" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                            </Col>
                            <Col className="text-center day">
                                <h3>Fri</h3>
                                {/* <div className='habit habit-1' onClick={habitClick}></div>
                                <div className='habit habit-2' onClick={habitClick}></div>
                                <div className='habit habit-3' onClick={habitClick}></div> */}
                                {/* <div className='habit habit-4'></div>
                                <div className='habit habit-5'></div> */}
                                {habit_1 === "Habit 1" && <div className='habit habit-4 chroicon' onClick={habitClick}></div>}
                                {habit_2 === "Habit 2" && <div className='habit habit-4 lsicon' onClick={habitClick2}></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4 lsicon' onClick={habitClick2}></div>}
                                {habit_4 === "Habit 4" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_5 === "Habit 5" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_6 === "Habit 6" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                                {habit_7 === "Habit 7" && <div className='habit habit-4 mbtiicon' onClick={habitClick3}></div>}
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default HabitTracker;