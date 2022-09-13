import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import { BulbOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import ClassesCarousel from './ClassesCarousel';
import GameCarousel from './GameCarousel';
import Assignments from './Assignments';
import Assignments2 from './Assignments2';
import Assignments3 from './Assignments3';
import TimeSpentChart from './TimeSpent';
import { TiTick } from 'react-icons/ti';
import { AiOutlineCalendar, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';

const Home = () => {

    const assSort = sessionStorage.getItem("assignmentSort")
    return (
        <Container className="dashboard">
            <Row>
                <Col xs={3}>
                    <div className="profile text-center">
                        <Avatar style={{ width: 15 }} src="https://joeschmoe.io/api/v1/random" />
                    </div>
                    <div className="profileMenu">
                        <h2 className="text-center">John Tan, 3A1</h2>
                        <div className="factOfTheDay text-center">
                            <h5><BulbOutlined /> Fact of the day</h5>
                            <p>The majority of your brain is fat. In fact, the human brain is nearly 60% fat.</p>
                            <Button className="nice">Nice</Button>
                            <Button className="okay">Okay</Button>
                        </div>
                        <div className="menu text-left">
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/"><AiOutlineMenu /> Main menu</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/calendar"><AiOutlineCalendar /> Calendar</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/habittracker"><TiTick /> Habit tracker</NavLink><br />
                            <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "gray" })} to="/personality"><BsFillPersonFill />Personality</NavLink>
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
                    <div className="welcomeText">Welcome back,<br></br>John Tan!</div>
                    <div className="classes_games">
                        <h2>View your classes: <Button className="viewall">View All <CaretDownOutlined /></Button></h2>
                        <ClassesCarousel />
                    </div>
                    <div className="classes_games classes_games_game">
                        <h2>Join game: <Button className="viewall">View All <CaretDownOutlined /></Button></h2>
                        <GameCarousel />
                    </div>
                    <div className="assignments">
                        <h2>Upcoming assignments: <Dropdown>
                            <Dropdown.Toggle className="viewall" id="dropdown-basic">
                                Sort By
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => {sessionStorage.setItem("assignmentSort", "highest");window.location.reload(false)}}>Highest weightage</Dropdown.Item>
                                <Dropdown.Item onClick={() => {sessionStorage.setItem("assignmentSort", "lowest");window.location.reload(false)}}>Lowest weightage</Dropdown.Item>
                                <Dropdown.Item onClick={() => {sessionStorage.setItem("assignmentSort", "date");window.location.reload(false)}}>Date</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown></h2>
                        {assSort === null && <Assignments />}
                        {assSort === "highest" && <Assignments2 />}
                        {assSort === "lowest" && <Assignments3 />}
                        {assSort === "date" && <Assignments />}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;