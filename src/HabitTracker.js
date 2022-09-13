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

    const habit_1 = sessionStorage.getItem("habit1")
    const habit_2 = sessionStorage.getItem("habit2")
    const habit_3 = sessionStorage.getItem("habit3")

    const habitClick = (e) => {
        if (e.target.style.backgroundColor === "green") {
            e.target.style.backgroundColor = "black";
        } else {
            e.target.style.backgroundColor = "green";
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
                            <NavLink style={({ isActive }) => ({ color: isActive ? "white" : "#B3C9C1" })} to="/"><AiOutlineMenu /> Dashboard</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "white" : "#B3C9C1" })} to="/calendar"><AiOutlineCalendar /> Calendar</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "white" : "#B3C9C1" })} to="/habittracker"><TiTick /> Habit tracker</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "white" : "#B3C9C1" })} to="/personality"><BsFillPersonFill /> Personality</NavLink>
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
                            <div><Checkbox id="habit1" onChange={onChange1}> Habit 1</Checkbox></div>
                            <div><Checkbox id="habit2" onChange={onChange2}> Habit 2</Checkbox></div>
                            <div><Checkbox id="habit3" onChange={onChange3}> Habit 3</Checkbox></div>
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
                            <span><span className="habit-ind"></span> Learning Style</span>
                            <span><span className="habit-ind"></span> MBTI</span>
                            <span><span className="habit-ind"></span> Chronotype</span>
                        </div>
                        <div className="meter">
                            <div className='meter2'></div>
                        </div>
                        <Row>
                            <Col className="text-center">
                                <p>Ongoing habits</p>
                                <div className='habit-ind'>
                                    <li className='hab1'><span>Habit 1</span></li>
                                </div>
                                <div className='habit-ind'>
                                    <li className='hab2'><span>Habit 2</span></li>
                                </div>
                                <div className='habit-ind'>
                                    <li className='hab3'><span>Habit 3</span></li>
                                </div>
                                {/* <div className='habit-ind'>
                                    <li className='hab4'><span>Habit 4</span></li>
                                </div>
                                <div className='habit-ind'>
                                    <li className='hab5'><span>Habit 5</span></li>
                                </div> */}
                                {habit_1 === "Habit 1" && <div className='habit-ind'>
                                    <li className='hab4'><span>Habit 4</span></li>
                                </div>}
                                {habit_2 === "Habit 2" && <div className='habit-ind'>
                                    <li className='hab4'><span>Habit 5</span></li>
                                </div>}
                                {habit_3 === "Habit 3" && <div className='habit-ind'>
                                    <li className='hab4'><span>Habit 6</span></li>
                                </div>}
                            </Col>
                            <Col className="text-center day">
                                <h3>Mon</h3>
                                <div className='habit habit-1' onClick={habitClick}></div>
                                <div className='habit habit-2'></div>
                                <div className='habit habit-3'></div>
                                {/* <div className='habit habit-4'></div>
                                <div className='habit habit-5'></div> */}
                                {habit_1 === "Habit 1" && <div className='habit habit-4'></div>}
                                {habit_2 === "Habit 2" && <div className='habit habit-4'></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4'></div>}
                            </Col>
                            <Col className="text-center day">
                                <h3>Tue</h3>
                                <div className='habit habit-1'></div>
                                <div className='habit habit-2'></div>
                                <div className='habit habit-3'></div>
                                {/* <div className='habit habit-e'></div>
                                <div className='habit habit-5'></div> */}
                                {habit_1 === "Habit 1" && <div className='habit habit-4'></div>}
                                {habit_2 === "Habit 2" && <div className='habit habit-4'></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4'></div>}
                            </Col>
                            <Col className="text-center day">
                                <h3>Wed</h3>
                                <div className='habit habit-1'></div>
                                <div className='habit habit-2'></div>
                                <div className='habit habit-3'></div>
                                {/* <div className='habit habit-4'></div>
                                <div className='habit habit-5'></div> */}
                                {habit_1 === "Habit 1" && <div className='habit habit-4'></div>}
                                {habit_2 === "Habit 2" && <div className='habit habit-4'></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4'></div>}
                            </Col>
                            <Col className="text-center day">
                                <h3>Thu</h3>
                                <div className='habit habit-e'></div>
                                <div className='habit habit-2'></div>
                                <div className='habit habit-3'></div>
                                {/* <div className='habit habit-4'></div>
                                <div className='habit habit-e'></div> */}
                                {habit_1 === "Habit 1" && <div className='habit habit-4'></div>}
                                {habit_2 === "Habit 2" && <div className='habit habit-4'></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4'></div>}
                            </Col>
                            <Col className="text-center day">
                                <h3>Fri</h3>
                                <div className='habit habit-1'></div>
                                <div className='habit habit-2'></div>
                                <div className='habit habit-3'></div>
                                {/* <div className='habit habit-4'></div>
                                <div className='habit habit-5'></div> */}
                                {habit_1 === "Habit 1" && <div className='habit habit-4'></div>}
                                {habit_2 === "Habit 2" && <div className='habit habit-4'></div>}
                                {habit_3 === "Habit 3" && <div className='habit habit-4'></div>}
                            </Col>
                            <Col className="text-center">
                                <p>Habit Tracker</p>
                                <div className='habit-meaning'></div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default HabitTracker;