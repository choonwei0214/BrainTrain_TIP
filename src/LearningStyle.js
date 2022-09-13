import { useState } from "react";
import { Link } from "react-router-dom";
import { Radio, Space } from 'antd';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

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

    const components = [
        <div className="surveys"><h2>1. What kind of book would you like to read for fun?</h2>
            <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                    <Radio value={1}>A book with lots of pictures in it</Radio>
                    <Radio value={2}>A book with lots of words in it</Radio>
                    <Radio value={3}>A book with word searches or crossword puzzles</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>2. When you are not sure how to spell a word, what are you most likely to do?</h2>
            <Radio.Group onChange={onChange2} value={value2}>
                <Space direction="vertical">
                    <Radio value={1}>Write it down to see if it looks right</Radio>
                    <Radio value={2}>Spell it out loud to see if it sounds right</Radio>
                    <Radio value={3}>Trace the letters in the air (finger spelling)</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>3. You're out shopping for clothes, and you're waiting in line to pay. What are you most likely to do while you are waiting?</h2>
            <Radio.Group onChange={onChange3} value={value3}>
                <Space direction="vertical">
                    <Radio value={1}>Look around at other clothes on the racks</Radio>
                    <Radio value={2}>Talk to the person next to you in line</Radio>
                    <Radio value={3}>Fidget or move back and forth</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>4. When you see the word &quot;cat,&quot; what do you do first?</h2>
            <Radio.Group onChange={onChange4} value={value4}>
                <Space direction="vertical">
                    <Radio value={1}>Picture a cat in your mind</Radio>
                    <Radio value={2}>Say the word &quot;cat&quot; to yourself</Radio>
                    <Radio value={3}>Think about being with a cat (petting it or hearing it purr)</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>5. What's the best way for you to study for a test?</h2>
            <Radio.Group onChange={onChange5} value={value5}>
                <Space direction="vertical">
                    <Radio value={1}>Read the book or your notes and review pictures or charts</Radio>
                    <Radio value={2}>Have someone ask you questions that you can answer out loud</Radio>
                    <Radio value={3}>Make up index cards that you can review</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>6. What's the best way for you to learn about how something works (like a computer or a video game)?</h2>
            <Radio.Group onChange={onChange6} value={value6}>
                <Space direction="vertical">
                    <Radio value={1}>Get someone to show you</Radio>
                    <Radio value={2}>Read about it or listen to someone explain it</Radio>
                    <Radio value={3}>Figure it out on your own</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>7. If you went to a school dance, what would you be most likely to remember the next day?</h2>
            <Radio.Group onChange={onChange7} value={value7}>
                <Space direction="vertical">
                    <Radio value={1}>The faces of the people who were there</Radio>
                    <Radio value={2}>The music that was played</Radio>
                    <Radio value={3}>The dance moves you did and the food you ate</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>8. What do you find most distracting when you are trying to study?</h2>
            <Radio.Group onChange={onChange8} value={value8}>
                <Space direction="vertical">
                    <Radio value={1}>People walking past you</Radio>
                    <Radio value={2}>Loud noises</Radio>
                    <Radio value={3}>An uncomfortable chair</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>9. When you are angry, what are you most likely to do?</h2>
            <Radio.Group onChange={onChange9} value={value9}>
                <Space direction="vertical">
                    <Radio value={1}>Put on your &quot;mad&quot; face</Radio>
                    <Radio value={2}>Yell and scream</Radio>
                    <Radio value={3}>Slam doors</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>10. When you are happy, what are you most likely to do?</h2>
            <Radio.Group onChange={onChange10} value={value10}>
                <Space direction="vertical">
                    <Radio value={1}>Smile from ear to ear</Radio>
                    <Radio value={2}>Talk up a storm</Radio>
                    <Radio value={3}>Act really hyper</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>11. When in a new place, how do you find your way around?</h2>
            <Radio.Group onChange={onChange11} value={value11}>
                <Space direction="vertical">
                    <Radio value={1}>Look for a map or directory that shows you where everything is</Radio>
                    <Radio value={2}>Ask someone for directions</Radio>
                    <Radio value={3}>Just start walking around until you find what you're looking for</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>12. Of these three classes, which is your favorite?</h2>
            <Radio.Group onChange={onChange12} value={value12}>
                <Space direction="vertical">
                    <Radio value={1}>Art class</Radio>
                    <Radio value={2}>Music class</Radio>
                    <Radio value={3}>Gym class</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>13. When you hear a song on the radio, what are you most likely to do?</h2>
            <Radio.Group onChange={onChange13} value={value13}>
                <Space direction="vertical">
                    <Radio value={1}>Picture the video that goes along with it</Radio>
                    <Radio value={2}>Sing or hum along with the music</Radio>
                    <Radio value={3}>Start dancing or tapping your foot</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>14. What do you find most distracting when in class?</h2>
            <Radio.Group onChange={onChange14} value={value14}>
                <Space direction="vertical">
                    <Radio value={1}>Lights that are too bright or too dim</Radio>
                    <Radio value={2}>Noises from the hallway or outside the building (like traffic or someone cutting the grass)</Radio>
                    <Radio value={3}>The temperature being too hot or too cold</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>15. What do you like to do to relax?</h2>
            <Radio.Group onChange={onChange15} value={value15}>
                <Space direction="vertical">
                    <Radio value={1}>Read</Radio>
                    <Radio value={2}>Listen to music</Radio>
                    <Radio value={3}>Exercise (walk, run, play sports, etc.)</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>16. What is the best way for you to remember a friend's phone number?</h2>
            <Radio.Group onChange={onChange16} value={value16}>
                <Space direction="vertical">
                    <Radio value={1}>Picture the numbers on the phone as you would dial them</Radio>
                    <Radio value={2}>Say it out loud over and over and over</Radio>
                    <Radio value={3}>Write it down or store it in your phone contact list</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>17. If you won a game, which of these three prizes would you choose?</h2>
            <Radio.Group onChange={onChange17} value={value17}>
                <Space direction="vertical">
                    <Radio value={1}>A poster for the wall</Radio>
                    <Radio value={2}>A music CD or mp3 download</Radio>
                    <Radio value={3}>A game of some kind (or a football or soccer ball, etc.)</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>18. Which would you rather go to with a group of friends?</h2>
            <Radio.Group onChange={onChange18} value={value18}>
                <Space direction="vertical">
                    <Radio value={1}>A movie</Radio>
                    <Radio value={2}>A concert</Radio>
                    <Radio value={3}>An amusement park</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>19. What are you most likely to remember about new people you meet?</h2>
            <Radio.Group onChange={onChange19} value={value19}>
                <Space direction="vertical">
                    <Radio value={1}>Their face but not their name</Radio>
                    <Radio value={2}>Their name but not their face</Radio>
                    <Radio value={3}>What you talked about with them</Radio>
                </Space>
            </Radio.Group></div>,
        <div className="surveys"><h2>20. When you give someone directions to your house, what are you most likely to tell them?</h2>
            <Radio.Group onChange={onChange20} value={value20}>
                <Space direction="vertical">
                    <Radio value={1}>A description of building and landmarks they will pass on the way</Radio>
                    <Radio value={2}>The names of the roads or streets they will be on</Radio>
                    <Radio value={3}>&quot;Follow me&mdash;it will be easier if I just show you how to get there.&quot;</Radio>
                </Space>
            </Radio.Group></div>
    ]

    return <div className="surveyBtn">
        {
            // render component from our components array
            components[count]
        }
        <div className="text-center">

            {count > 0 && <button onClick={() => setCount(count - 1)}><AiOutlineArrowLeft/></button>}
            {count < components.length - 1 && <button onClick={() => setCount(count + 1)}><AiOutlineArrowRight/></button>}
            {count === components.length - 1 && <Link to="/surveyresult" state={[value,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12,value13,value14,value15,value16,value17,value18,value19,value20]}><button>Submit</button></Link>}
        </div>
    </div>
}

export default LearningStyle;