import { Stack, Carousel, Card} from 'react-bootstrap';

const games = [
    { _id: 1, name: ['GAME NAME', 'GAME NAME', 'GAME NAME', 'GAME NAME']},
    { _id: 2, name: ['GAME NAME', 'GAME NAME', 'GAME NAME', 'GAME NAME']},
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
                            <Card style={{ backgroundColor: "#A3A3A3"}}><Card.Title>{game_name.name[0]}</Card.Title><Card.Text></Card.Text></Card>
                            <Card style={{ backgroundColor: "#A3A3A3"}}><Card.Title>{game_name.name[1]}</Card.Title><Card.Text></Card.Text></Card>
                            <Card style={{ backgroundColor: "#A3A3A3"}}><Card.Title>{game_name.name[2]}</Card.Title><Card.Text></Card.Text></Card>
                            <Card style={{ backgroundColor: "#A3A3A3"}}><Card.Title>{game_name.name[3]}</Card.Title><Card.Text></Card.Text></Card>
                        </Stack>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default GameCarousel;