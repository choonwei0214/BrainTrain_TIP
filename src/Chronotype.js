import { useState } from "react";
import { Link } from "react-router-dom";
import { Radio, Space } from 'antd';

const LearningStyle = () => {
    const [count, setCount] = useState(0);

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        setValue(e.target.value);
    };
    const [value2, setValue2] = useState(1);
    const onChange2 = (e) => {
        setValue2(e.target.value);
    };
    const [value3, setValue3] = useState(1);
    const onChange3 = (e) => {
        setValue3(e.target.value);
    };
    const [value4, setValue4] = useState(1);
    const onChange4 = (e) => {
        setValue4(e.target.value);
    };
    const [value5, setValue5] = useState(1);
    const onChange5 = (e) => {
        setValue5(e.target.value);
    };
    const [value6, setValue6] = useState(1);
    const onChange6 = (e) => {
        setValue6(e.target.value);
    };
    const [value7, setValue7] = useState(1);
    const onChange7 = (e) => {
        setValue7(e.target.value);
    };
    const [value8, setValue8] = useState(1);
    const onChange8 = (e) => {
        setValue8(e.target.value);
    };
    const [value9, setValue9] = useState(1);
    const onChange9 = (e) => {
        setValue9(e.target.value);
    };
    const [value10, setValue10] = useState(1);
    const onChange10 = (e) => {
        setValue10(e.target.value);
    };
    const [value11, setValue11] = useState(1);
    const onChange11 = (e) => {
        setValue11(e.target.value);
    };
    const [value12, setValue12] = useState(1);
    const onChange12 = (e) => {
        setValue12(e.target.value);
    };
    const [value13, setValue13] = useState(1);
    const onChange13 = (e) => {
        setValue13(e.target.value);
    };
    const [value14, setValue14] = useState(1);
    const onChange14 = (e) => {
        setValue14(e.target.value);
    };
    const [value15, setValue15] = useState(1);
    const onChange15 = (e) => {
        setValue15(e.target.value);
    };
    const [value16, setValue16] = useState(1);
    const onChange16 = (e) => {
        setValue16(e.target.value);
    };
    const [value17, setValue17] = useState(1);
    const onChange17 = (e) => {
        setValue17(e.target.value);
    };
    const [value18, setValue18] = useState(1);
    const onChange18 = (e) => {
        setValue18(e.target.value);
    };
    const [value19, setValue19] = useState(1);
    const onChange19 = (e) => {
        setValue19(e.target.value);
    };
    const [value20, setValue20] = useState(1);
    const onChange20 = (e) => {
        setValue20(e.target.value);
    };
    const [value21, setValue21] = useState(1);
    const onChange21 = (e) => {
        setValue21(e.target.value);
    };
    const [value22, setValue22] = useState(1);
    const onChange22 = (e) => {
        setValue22(e.target.value);
    };
    const [value23, setValue23] = useState(1);
    const onChange23 = (e) => {
        setValue23(e.target.value);
    };
    const [value24, setValue24] = useState(1);
    const onChange24 = (e) => {
        setValue24(e.target.value);
    };
    const [value25, setValue25] = useState(1);
    const onChange25 = (e) => {
        setValue25(e.target.value);
    };
    const [value26, setValue26] = useState(1);
    const onChange26 = (e) => {
        setValue26(e.target.value);
    };
    const [value27, setValue27] = useState(1);
    const onChange27 = (e) => {
        setValue27(e.target.value);
    };
    const [value28, setValue28] = useState(1);
    const onChange28 = (e) => {
        setValue28(e.target.value);
    };
    const [value29, setValue29] = useState(1);
    const onChange29 = (e) => {
        setValue29(e.target.value);
    };
    const [value30, setValue30] = useState(1);
    const onChange30 = (e) => {
        setValue30(e.target.value);
    };

    const components = [
        <div className="surveys"><h2>1. The slightest sound or light can keep me awake or wake me up.</h2>
            <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                    <Radio value={1}>True</Radio>
                    <Radio value={2}>False</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>2. Food is not a great passion for me.</h2>
            <Radio.Group onChange={onChange2} value={value2}>
                <Space direction="vertical">
                    <Radio value={1}>True</Radio>
                    <Radio value={2}>False</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>3. I usually wake up before my alarm rings.</h2>
            <Radio.Group onChange={onChange3} value={value3}>
                <Space direction="vertical">
                    <Radio value={1}>True</Radio>
                    <Radio value={2}>False</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>4. I can’t sleep well on planes, even with an eye mask or earplugs.</h2>
            <Radio.Group onChange={onChange4} value={value4}>
                <Space direction="vertical">
                    <Radio value={1}>True</Radio>
                    <Radio value={2}>False</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>5. I’m often irritable due to fatigue.</h2>
            <Radio.Group onChange={onChange5} value={value5}>
                <Space direction="vertical">
                    <Radio value={1}>True</Radio>
                    <Radio value={2}>False</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>6. I worry inordinately about small details.</h2>
            <Radio.Group onChange={onChange6} value={value6}>
                <Space direction="vertical">
                    <Radio value={1}>True</Radio>
                    <Radio value={2}>False</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>7. I have been diagnosed by a doctor or self-diagnosed as an insomniac.</h2>
            <Radio.Group onChange={onChange7} value={value7}>
                <Space direction="vertical">
                    <Radio value={1}>True</Radio>
                    <Radio value={2}>False</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>8. In school, I was anxious about my grades.</h2>
            <Radio.Group onChange={onChange8} value={value8}>
                <Space direction="vertical">
                    <Radio value={1}>True</Radio>
                    <Radio value={2}>False</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>9. I lose sleep ruminating about what happened in the past and what might happen in the future.</h2>
            <Radio.Group onChange={onChange9} value={value9}>
                <Space direction="vertical">
                    <Radio value={1}>True</Radio>
                    <Radio value={2}>False</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>10. I am a perfectionist.</h2>
            <Radio.Group onChange={onChange10} value={value10}>
                <Space direction="vertical">
                    <Radio value={1}>True</Radio>
                    <Radio value={2}>False</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>11. If you had nothing to do the next day and gave yourself permission to sleep in as long as you like, when would you wake up?</h2>
            <Radio.Group onChange={onChange11} value={value11}>
                <Space direction="vertical">
                    <Radio value={1}>Before 6.30 a.m.</Radio>
                    <Radio value={2}>Between 6.30 a.m. and 8:45 a.m.</Radio>
                    <Radio value={3}>After 8:45 a.m.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>12. When you have to get out of bed by a certain time, do you use an alarm clock?</h2>
            <Radio.Group onChange={onChange12} value={value12}>
                <Space direction="vertical">
                    <Radio value={1}>No need. You wake up on your own at just the right time.</Radio>
                    <Radio value={2}>Yes to the alarm, with no snooze or one snooze.</Radio>
                    <Radio value={3}>Yes to the alarm, with a backup alarm, and multiple snoozes.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>13. When do you wake up on weekends?</h2>
            <Radio.Group onChange={onChange13} value={value13}>
                <Space direction="vertical">
                    <Radio value={1}>The same time as your workweek schedule.</Radio>
                    <Radio value={2}>Within 45 to 90 minutes of your workweek schedule.</Radio>
                    <Radio value={3}>90 minutes or more past your workweek schedule.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>14. How do you experience jet lag?</h2>
            <Radio.Group onChange={onChange14} value={value14}>
                <Space direction="vertical">
                    <Radio value={1}>You struggle with it, no matter what.</Radio>
                    <Radio value={2}>You adjust within 48 hours.</Radio>
                    <Radio value={3}>You adjust quickly, especially when travelling West.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>15. What’s your favorite meal (think time of day more than menu)?</h2>
            <Radio.Group onChange={onChange15} value={value15}>
                <Space direction="vertical">
                    <Radio value={1}>Breakfast</Radio>
                    <Radio value={2}>Lunch</Radio>
                    <Radio value={3}>Dinner</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>16. If you were to flash back to high school and take the SAT again, when would you prefer to start the test for maximum focus and concentration (not just to get it over with)?</h2>
            <Radio.Group onChange={onChange16} value={value16}>
                <Space direction="vertical">
                    <Radio value={1}>Early morning</Radio>
                    <Radio value={2}>Early afternoon</Radio>
                    <Radio value={3}>Midafternoon</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>17. If you could choose any time of day to do an intense workout, when would you do it?</h2>
            <Radio.Group onChange={onChange17} value={value17}>
                <Space direction="vertical">
                    <Radio value={1}>Before 8 a.m.</Radio>
                    <Radio value={2}>Between 8 a.m. and 4 p.m.</Radio>
                    <Radio value={3}>After 4 p.m.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>18. When are you most alert?</h2>
            <Radio.Group onChange={onChange18} value={value18}>
                <Space direction="vertical">
                    <Radio value={1}>One to two hours post wake-up.</Radio>
                    <Radio value={2}>Two to four hours post wake-up.</Radio>
                    <Radio value={3}>Four to six hours post wake-up.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>19. If you could choose your own five-hour workday, which block of consecutive hours would you choose?</h2>
            <Radio.Group onChange={onChange19} value={value19}>
                <Space direction="vertical">
                    <Radio value={1}>4 a.m. to 9 a.m.</Radio>
                    <Radio value={2}>9 a.m. to 2 p.m.</Radio>
                    <Radio value={3}>4 p.m. to 9 p.m.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>20. Do you consider yourself...</h2>
            <Radio.Group onChange={onChange20} value={value20}>
                <Space direction="vertical">
                    <Radio value={1}>Left-brained - that is, a strategic and analytical thinker.</Radio>
                    <Radio value={2}>A balanced thinker.</Radio>
                    <Radio value={3}>Right-brained - that is, a creative and insightful thinker.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>21. Do you nap?</h2>
            <Radio.Group onChange={onChange21} value={value21}>
                <Space direction="vertical">
                    <Radio value={1}>Never</Radio>
                    <Radio value={2}>Sometimes on the weekend.</Radio>
                    <Radio value={3}>If you took a nap, you'd be up all night.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>22. If you had to do two hours of hard physical labor, like moving furniture or chopping wood, when would you choose to do it for maximum efficiency and safety (not just to get it over with)?</h2>
            <Radio.Group onChange={onChange22} value={value22}>
                <Space direction="vertical">
                    <Radio value={1}>8 a.m. to 10 a.m.</Radio>
                    <Radio value={2}>11 a.m. to 1 p.m.</Radio>
                    <Radio value={3}>6 p.m. to 8 p.m.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>23. Regarding your overall health, which statement sounds like you?</h2>
            <Radio.Group onChange={onChange23} value={value23}>
                <Space direction="vertical">
                    <Radio value={1}>"I make healthy choices almost all of the time."</Radio>
                    <Radio value={2}>"I make healthy choices sometimes."</Radio>
                    <Radio value={3}>"I struggle to make healthy choices."</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>24. What’s your comfort level with taking risks?</h2>
            <Radio.Group onChange={onChange24} value={value24}>
                <Space direction="vertical">
                    <Radio value={1}>Low</Radio>
                    <Radio value={2}>Medium</Radio>
                    <Radio value={3}>High</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>25. Do you consider yourself:</h2>
            <Radio.Group onChange={onChange25} value={value25}>
                <Space direction="vertical">
                    <Radio value={1}>Future-oriented with big plans and clear goals.</Radio>
                    <Radio value={2}>Informed by the past, hopeful about the future, and aspiring to live in the moment.</Radio>
                    <Radio value={3}>Present-oriented. It's all about what feels good now.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>26. How would you characterize yourself as a student?</h2>
            <Radio.Group onChange={onChange26} value={value26}>
                <Space direction="vertical">
                    <Radio value={1}>Stellar.</Radio>
                    <Radio value={2}>Solid.</Radio>
                    <Radio value={3}>Slacker.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>27. When you first wake up in the morning, are you...</h2>
            <Radio.Group onChange={onChange27} value={value27}>
                <Space direction="vertical">
                    <Radio value={1}>Bright-eyed.</Radio>
                    <Radio value={2}>Dazed but not confused.</Radio>
                    <Radio value={3}>Groggy, eyelids made of cement.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>28. How would you describe your appetite within half an hour of waking?</h2>
            <Radio.Group onChange={onChange28} value={value28}>
                <Space direction="vertical">
                    <Radio value={1}>Very hungry.</Radio>
                    <Radio value={2}>Hungry.</Radio>
                    <Radio value={3}>Not at all hungry.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>29. How often do you suffer from insomnia symptoms?</h2>
            <Radio.Group onChange={onChange29} value={value29}>
                <Space direction="vertical">
                    <Radio value={1}>Rarely, only when adjusting to a new time zone.</Radio>
                    <Radio value={2}>Occasionally, when going through a rough time or are stressed out.</Radio>
                    <Radio value={3}>Chronically, it comes in waves.</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>30. How would you describe your overall life satisfaction?</h2>
            <Radio.Group onChange={onChange30} value={value30}>
                <Space direction="vertical">
                    <Radio value={1}>High</Radio>
                    <Radio value={2}>Good</Radio>
                    <Radio value={3}>Low</Radio>
                </Space>
            </Radio.Group></div>
    ]

    return <div className="surveyBtn">
        {
            // render component from our components array
            components[count]
        }
        <div className="text-center">

            {count > 0 && <button onClick={() => setCount(count - 1)}>Previous</button>}
            {count < components.length - 1 && <button onClick={() => setCount(count + 1)}>Next</button>}
            {count === components.length - 1 && <Link to="/survey3result" state={[value, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17, value18, value19, value20]}><button>Submit</button></Link>}
        </div>
    </div>
}

export default LearningStyle;