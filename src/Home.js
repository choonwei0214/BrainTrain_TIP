import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import { BulbOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import ClassesCarousel from './ClassesCarousel';
import GameCarousel from './GameCarousel';
import Assignments from './Assignments';
import TimeSpentChart from './TimeSpent';

const Home = () => {
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
                            <p>The majority of your brain is fat. In fact, the human brain is nearly 60% fat.</p>
                            <Button className="nice">Nice</Button>
                            <Button className="okay">Okay</Button>
                        </div>
                        <div className="menu text-left">
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/calendar">Calendar</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/">Habit tracker</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/personality">Personality</NavLink>
                        </div>
                    </div>
                    <div className="time_spent">
                        <h2>Time spent:</h2>
                        <p>Sort by<Button
                            type="text"
                            icon={<CaretDownOutlined />}
                        /></p>
                        <div id="chart"><TimeSpentChart /></div>
                    </div>
                </Col>
                <Col>
                    <div className="welcomeText">Welcome back,<br></br>Pendejo!</div>
                    <div className="classes_games">
                        <h2>View your classes: <Button className="viewall">View All <CaretDownOutlined/></Button></h2>
                        <ClassesCarousel />
                    </div>
                    <div className="classes_games classes_games_game">
                        <h2>Join game: <Button className="viewall">View All <CaretDownOutlined/></Button></h2>
                        <GameCarousel />
                    </div>
                    <div className="assignments">
                        <h2>Upcoming assignments:</h2>
                        <p>Sort by<Button
                            type="text"
                            icon={<CaretDownOutlined />}
                        /></p>
                        <Assignments />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;