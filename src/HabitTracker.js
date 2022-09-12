import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { Avatar } from 'antd';
import { TiTick } from 'react-icons/ti';
import { AiOutlineCalendar, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';

const HabitTracker = () => {
    return (
        <Container className="dashboard">
            <Row>
                <Col xs={3}>
                    <div className="profile text-center">
                        <Avatar style={{ width: 15 }} src="https://joeschmoe.io/api/v1/random" />
                    </div>
                    <div className="profileMenu">
                        <h2 className="text-center">Pendejo, 3A1</h2>
                        <div className="menu text-left">
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/"><AiOutlineMenu /> Main menu</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/calendar"><AiOutlineCalendar /> Calendar</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/habittracker"><TiTick /> Habit tracker</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/personality"><BsFillPersonFill />Personality</NavLink>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="personalityText">Habit Tracker<Button className='addhabitbtn'>+ Add Habit</Button></div>
                    <div className='habittrackerBoard'>
                        <h2 className="text-center">Monday, Sept 12 - Friday, Sept 16</h2>
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
                                <div className='habit-ind'>
                                    <li className='hab4'><span>Habit 4</span></li>
                                </div>
                                <div className='habit-ind'>
                                    <li className='hab5'><span>Habit 5</span></li>
                                </div>
                            </Col>
                            <Col className="text-center day">
                                <h3>Mon</h3>
                                <div className='habit habit-1'></div>
                                <div className='habit habit-2'></div>
                                <div className='habit habit-3'></div>
                                <div className='habit habit-4'></div>
                                <div className='habit habit-5'></div>
                            </Col>
                            <Col className="text-center day">
                                <h3>Tue</h3>
                                <div className='habit habit-1'></div>
                                <div className='habit habit-2'></div>
                                <div className='habit habit-3'></div>
                                <div className='habit habit-e'></div>
                                <div className='habit habit-5'></div>
                            </Col>
                            <Col className="text-center day">
                                <h3>Wed</h3>
                                <div className='habit habit-1'></div>
                                <div className='habit habit-2'></div>
                                <div className='habit habit-3'></div>
                                <div className='habit habit-4'></div>
                                <div className='habit habit-5'></div>
                            </Col>
                            <Col className="text-center day">
                                <h3>Thu</h3>
                                <div className='habit habit-e'></div>
                                <div className='habit habit-2'></div>
                                <div className='habit habit-3'></div>
                                <div className='habit habit-4'></div>
                                <div className='habit habit-e'></div>
                            </Col>
                            <Col className="text-center day">
                                <h3>Fri</h3>
                                <div className='habit habit-1'></div>
                                <div className='habit habit-2'></div>
                                <div className='habit habit-3'></div>
                                <div className='habit habit-4'></div>
                                <div className='habit habit-5'></div>
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