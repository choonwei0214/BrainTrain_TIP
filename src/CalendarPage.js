import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import { Avatar } from 'antd';
import Calendar from './Calendar';
import { TiTick } from 'react-icons/ti';
import { AiOutlineCalendar,AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';

const CalendarPage = () => {
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
                    <div className="personalityText">Calendar</div>
                    <Calendar />
                </Col>
            </Row>
        </Container>
    );
}

export default CalendarPage;