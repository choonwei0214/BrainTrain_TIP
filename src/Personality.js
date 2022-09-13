import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import { Avatar } from 'antd';
import PersonalityCards from './PersonalityCards';
import { TiTick } from 'react-icons/ti';
import { AiOutlineCalendar,AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';

const Personality = () => {
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
                        <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/"><AiOutlineMenu/> Main menu</NavLink><br />
                        <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/calendar"><AiOutlineCalendar/> Calendar</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/habittracker"><TiTick/> Habit tracker</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/personality"><BsFillPersonFill />Personality</NavLink>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="personalityText">Personality</div>
                    <div className="personalityBoard">
                        <PersonalityCards />
                    </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Personality;