import { Stack, Carousel, Card} from 'react-bootstrap';
import { FaPeopleArrows } from 'react-icons/fa';
import { CgDanger } from 'react-icons/cg';
import { GiCartwheel } from 'react-icons/gi';
import { MdOutlineQuiz } from 'react-icons/md';

const games = [
    { _id: 1, name: ['Class Feud', 'Endangerment', 'Wheel of knowledge', 'The answer is correct']},
    { _id: 2, name: ['Class Feud', 'Endangerment', 'Wheel of knowledge', 'The answer is correct']},
];

const GameCarousel = () => {
    return (
        <div>
            <Carousel interval={null}>
                {games.map((game_name) => (
                    <Carousel.Item>
                        <Stack
                            direction="horizontal"
                            className="h-100 justify-content-center align-items-center"
                            gap={4}
                        >
                            <Card style={{ backgroundColor: "#669282"}}><Card.Title><FaPeopleArrows/></Card.Title><Card.Text className="text-center">{game_name.name[0]}</Card.Text></Card>
                            <Card style={{ backgroundColor: "#669282"}}><Card.Title><CgDanger/></Card.Title><Card.Text className="text-center">{game_name.name[1]}</Card.Text></Card>
                            <Card style={{ backgroundColor: "#669282"}}><Card.Title><GiCartwheel/></Card.Title><Card.Text className="text-center">{game_name.name[2]}</Card.Text></Card>
                            <Card style={{ backgroundColor: "#669282"}}><Card.Title><MdOutlineQuiz/></Card.Title><Card.Text className="text-center">{game_name.name[3]}</Card.Text></Card>
                        </Stack>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default GameCarousel;