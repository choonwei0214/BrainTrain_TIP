import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ClockCircleOutlined } from '@ant-design/icons';

const StartSurvey = () => {
    const location = useLocation();
    const data = location.state;
    return ( 
        <div className="text-center beforesurvey">
            <h1>Welcome,</h1>
            <h1>let's find out your {data.name}.</h1>
            <h5><ClockCircleOutlined /> {data.time}</h5>
            { data.route === "learningstyle" && <Link to="/learningstyle"><button>Start</button></Link> }
            { data.route === "mbti" && <Link to="/mbti"><button>Start</button></Link> }
            { data.route === "chronotype" && <Link to="/chronotype"><button>Start</button></Link> }
        </div>
     );
}
 
export default StartSurvey;