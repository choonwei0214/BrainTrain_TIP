import { Stack, Carousel, Card } from 'react-bootstrap';
import { CalculatorOutlined,FontColorsOutlined,TranslationOutlined,GlobalOutlined } from '@ant-design/icons';
import { GiChemicalDrop, GiAtom } from 'react-icons/gi';
import { MdHistoryEdu,MdOutlineScience,MdDraw } from 'react-icons/md';
import { RiPlantLine } from 'react-icons/ri';
import { BiMusic } from 'react-icons/bi';
import { FaPeopleArrows } from 'react-icons/fa';

const classes = [
    { _id: 1, name: ['E MATH', 'ENGLISH', 'CHEMISTRY', 'HISTORY'], color: ['#9A2325','#015D72','#96D1BD','#EC9B00'], icons:[<CalculatorOutlined />,<FontColorsOutlined />,<GiChemicalDrop/>,<MdHistoryEdu/>], date: ["Monday 12/9", "Monday 12/9", "Monday 12/9", "Monday 12/9"], time: ["0800-0900", "0900-1000", "1030-1130", "1130-1230"] },
    { _id: 2, name: ['PHYSICS', 'BIOLOGY', 'CHINESE', 'GEOGRAPHY'], color: ["#475B5A","#119DA4","#616B39","#63458A"], icons:[<GiAtom/>,<RiPlantLine/>,<TranslationOutlined />,<GlobalOutlined />], date: ["Monday 12/9", "Tuesday 13/9", "Tuesday 13/9", "Tuesday 13/9"], time: ["1300-1400", "0800-0900", "0900-1000", "1030-1130"] },
    { _id: 3, name: ['SCIENCE', 'ART', 'MUSIC', 'SOCIAL STUDIES'], color: ["#C37D92","#00BBF9","#F15BB5","#9B5DE5"], icons:[<MdOutlineScience/>,<MdDraw/>,<BiMusic/>,<FaPeopleArrows/>], date: ["Tuesday 13/9", "Tuesday 13/9", "Wednesday 14/9", "Wednesday 14/9"], time: ["1130-1230", "1300-1400", "0800-0900", "0900-1000"] }
];

const ClassesCarousel = () => {
    return (
        <div>
            <Carousel interval={null}>
                {classes.map((class_name) => (
                    <Carousel.Item>
                        <Stack
                            direction="horizontal"
                            className="h-100 justify-content-center align-items-center"
                            gap={4}
                        >
                            <Card style={{ backgroundColor: class_name.color[0] }}><Card.Title>{class_name.icons[0]}</Card.Title><Card.Text className="text-center">{class_name.name[0]}</Card.Text></Card>
                            <Card style={{ backgroundColor: class_name.color[1] }}><Card.Title>{class_name.icons[1]}</Card.Title><Card.Text className="text-center">{class_name.name[1]}</Card.Text></Card>
                            <Card style={{ backgroundColor: class_name.color[2] }}><Card.Title>{class_name.icons[2]}</Card.Title><Card.Text className="text-center">{class_name.name[2]}</Card.Text></Card>
                            <Card style={{ backgroundColor: class_name.color[3] }}><Card.Title>{class_name.icons[3]}</Card.Title><Card.Text className="text-center">{class_name.name[3]}</Card.Text></Card>
                        </Stack>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default ClassesCarousel;