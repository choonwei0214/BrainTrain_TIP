import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import { BulbOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import PersonalityCards from './PersonalityCards';

const Personality = () => {
    return ( 
        <Container className="dashboard">
            <Row>
                <Col xs={3}>
                    <div className="profile text-center">
                        <Avatar style={{ width: 15 }} src="https://joeschmoe.io/api/v1/random" />
                    </div>
                    <div className="profileMenu">
                        <h2 className="text-center">Pendejo, 3A1</h2>
                        <div className="factOfTheDay text-center">
                            <h5><BulbOutlined /> Fact of the day</h5>
                            <p>The majority of your brain is fat. In fact, the human brian is nearly 60% fat.</p>
                            <Button>Helpful</Button>
                            <Button>Not helpful</Button>
                        </div>
                        <div className="menu text-left">
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/calendar">Calendar</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/">Habit tracker</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/personality">Personality</NavLink>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="personalityText">Personality</div>
                    <div className="personalityBoard">
                        <h2>Personality tests:</h2>
                        <PersonalityCards />
                    </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Personality;