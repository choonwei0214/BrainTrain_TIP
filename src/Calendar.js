import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const Calendar = () => {

    const [showMon, setShowMon] = useState(false);
    const handleCloseMon = () => setShowMon(false);
    const handleShowMon = () => setShowMon(true);

    const [showTue, setShowTue] = useState(false);
    const handleCloseTue = () => setShowTue(false);
    const handleShowTue = () => setShowTue(true);

    const [showWed, setShowWed] = useState(false);
    const handleCloseWed = () => setShowWed(false);
    const handleShowWed = () => setShowWed(true);

    const [showThu, setShowThu] = useState(false);
    const handleCloseThu = () => setShowThu(false);
    const handleShowThu = () => setShowThu(true);

    const [showFri, setShowFri] = useState(false);
    const handleCloseFri = () => setShowFri(false);
    const handleShowFri = () => setShowFri(true);

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
                    <div onClick={() => { handleShowMon() }} className="subject e-math-mon">
                        <p>E Math</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div onClick={() => { handleShowMon() }} className="subject eng-mon">
                        <p>English</p>
                    </div>
                    <div onClick={() => { handleShowMon() }} className="subject chem-mon">
                        <p>Chemistry</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty-last">
                        <p></p>
                    </div>
                    <Modal size="lg" show={showMon} onHide={handleCloseMon}>
                        <Modal.Header closeButton>
                            <Modal.Title>Study Tips</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='text-center'>
                                <h6 style={{ backgroundColor: "#9A2325" }}>E Math</h6>
                                <p>help type tips plz</p>
                            </div>
                            <div className='text-center'>
                                <h6 style={{ backgroundColor: "#015D72" }}>English</h6>
                                <p>help type tips plz</p>
                            </div>
                            <div className='text-center'>
                                <h6 style={{ backgroundColor: "#96D1BD" }}>Chemistry</h6>
                                <p>help type tips plz</p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleCloseMon}>
                                Back
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col className="day text-center">
                    <h3>Tue</h3>
                    <div onClick={() => { handleShowTue() }} className="subject eng-tue">
                        <p>English</p>
                    </div>
                    <div onClick={() => { handleShowTue() }} className="subject chem-tue">
                        <p>Chemistry</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div onClick={() => { handleShowTue() }} className="subject history-tue">
                        <p>History</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty-last">
                        <p></p>
                    </div>
                    <Modal size="lg" show={showTue} onHide={handleCloseTue}>
                        <Modal.Header closeButton>
                            <Modal.Title>Study Tips</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='text-center'>
                                <h6 style={{ backgroundColor: "#015D72" }}>English</h6>
                                <p>help type tips plz</p>
                            </div>
                            <div className='text-center'>
                                <h6 style={{ backgroundColor: "#96D1BD" }}>Chemistry</h6>
                                <p>help type tips plz</p>
                            </div>
                            <div className='text-center'>
                                <h6 style={{ backgroundColor: "#EC9B00" }}>History</h6>
                                <p>help type tips plz</p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleCloseTue}>
                                Back
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col className="day text-center">
                    <h3>Wed</h3>
                    <div onClick={() => { handleShowWed() }} className="subject chinese-wed">
                        <p>Chinese</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div onClick={() => { handleShowWed() }} className="subject history-wed">
                        <p>History</p>
                    </div>
                    <div onClick={() => { handleShowWed() }} className="subject eng-wed">
                        <p>English</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty-last">
                        <p></p>
                    </div>
                    <Modal size="lg" show={showWed} onHide={handleCloseWed}>
                        <Modal.Header closeButton>
                            <Modal.Title>Study Tips</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='text-center'>
                                <h6 style={{ backgroundColor: "#616B39" }}>Chinese</h6>
                                <p>help type tips plz</p>
                            </div>
                            <div className='text-center'>
                                <h6 style={{ backgroundColor: "#EC9B00" }}>History</h6>
                                <p>help type tips plz</p>
                            </div>
                            <div className='text-center'>
                                <h6 style={{ backgroundColor: "#015D72" }}>English</h6>
                                <p>help type tips plz</p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleCloseWed}>
                                Back
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col className="day text-center">
                    <h3>Thu</h3>
                    <div onClick={() => { handleShowThu() }} className="subject e-math-thu">
                        <p>E Math</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div onClick={() => { handleShowThu() }} className="subject chem-thu">
                        <p>Chemistry</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty-last">
                        <p></p>
                    </div>
                    <Modal size="lg" show={showThu} onHide={handleCloseThu}>
                        <Modal.Header closeButton>
                            <Modal.Title>Study Tips</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='text-center'>
                                <h6 style={{ backgroundColor: "#9A2325" }}>E Math</h6>
                                <p>help type tips plz</p>
                            </div>
                            <div className='text-center'>
                                <h6 style={{ backgroundColor: "#96D1BD" }}>Chemistry</h6>
                                <p>help type tips plz</p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleCloseThu}>
                                Back
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col className="day text-center">
                    <h3>Fri</h3>
                    <div onClick={() => { handleShowFri() }} className="subject chinese-fri">
                        <p>Chinese</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div onClick={() => { handleShowFri() }} className="subject e-math-fri">
                        <p>E Math</p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty">
                        <p></p>
                    </div><div className="subject empty">
                        <p></p>
                    </div>
                    <div className="subject empty-last" style={{ height: "5%" }}>
                        <p></p>
                    </div>
                    <Modal size="lg" show={showFri} onHide={handleCloseFri}>
                        <Modal.Header closeButton>
                            <Modal.Title>Study Tips</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='text-center'>
                                <h6 style={{ backgroundColor: "#616B39" }}>Chinese</h6>
                                <p>help type tips plz</p>
                            </div>
                            <div className='text-center'>
                                <h6 style={{ backgroundColor: "#9A2325" }}>E Math</h6>
                                <p>help type tips plz</p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleCloseFri}>
                                Back
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </div>
    );
}

export default Calendar;