import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Calendar = () => {
    return (
        <div className="calendar">
            <h2 className="text-center">Monday, Sept 12 - Friday, Sept 16</h2>
            <Row>
                <Col sm={1}>
                    <div className="time text-center">
                        0800<br />0900<br />1000<br />1100<br />1200<br />1300<br />1400<br />1500<br />1600
                    </div>
                </Col>
                <Col className="day text-center">
                    <h3>Mon</h3>
                    <div className="subject e-math-mon">
                        <p>E Math</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject eng-mon">
                        <p>English</p>
                    </div>
                    <div className="subject chem-mon">
                        <p>Chemistry</p>
                    </div>
                </Col>
                <Col className="day text-center">
                    <h3>Tue</h3>
                    <div className="subject eng-tue">
                        <p>English</p>
                    </div>
                    <div className="subject chem-tue">
                        <p>Chemistry</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject history-tue">
                        <p>History</p>
                    </div>
                </Col>
                <Col className="day text-center">
                    <h3>Wed</h3>
                    <div className="subject chinese-wed">
                        <p>Chinese</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject history-wed">
                        <p>History</p>
                    </div>
                    <div className="subject eng-wed">
                        <p>English</p>
                    </div>
                </Col>
                <Col className="day text-center">
                    <h3>Thu</h3>
                    <div className="subject e-math-thu">
                        <p>E Math</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject chem-thu">
                        <p>Chemistry</p>
                    </div>
                </Col>
                <Col className="day text-center">
                    <h3>Fri</h3>
                    <div className="subject chinese-fri">
                        <p>Chinese</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject e-math-fri">
                        <p>E Math</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Calendar;