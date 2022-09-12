import { Stack, Carousel, Card } from 'react-bootstrap';

const classes = [
    { _id: 1, name: ['E MATH', 'ENGLISH', 'CHEMISTRY', 'HISTORY'], date: ["Monday 12/9", "Monday 12/9", "Monday 12/9", "Monday 12/9"], time: ["0800-0900", "0900-1000", "1030-1130", "1130-1230"] },
    { _id: 2, name: ['PHYSICS', 'BIOLOGY', 'CHINESE', 'GEOGRAPHY'], date: ["Monday 12/9", "Tuesday 13/9", "Tuesday 13/9", "Tuesday 13/9"], time: ["1300-1400", "0800-0900", "0900-1000", "1030-1130"] },
    { _id: 3, name: ['SCIENCE', 'ART', 'MUSIC', 'SUBJECT'], date: ["Tuesday 13/9", "Tuesday 13/9", "Wednesday 14/9", "Wednesday 14/9"], time: ["1130-1230", "1300-1400", "0800-0900", "0900-1000"] }
];

const ClassesCarousel = () => {

    const colorList = ['#FF5C5D', '#0068FD', '#1FCF6A', '#FE8439',"#FF611A","#FF7E3A","#FCB623","#FCCB65"]
    return (
        <div>
            <Carousel>
                {classes.map((class_name) => (
                    <Carousel.Item>
                        <Stack
                            direction="horizontal"
                            className="h-100 justify-content-center align-items-center"
                            gap={4}
                        >
                            <Card style={{ backgroundColor: colorList[Math.floor(Math.random() * colorList.length)] }}><Card.Title>{class_name.name[0]}</Card.Title><Card.Text className="text-center">{class_name.date[0]}<br />{class_name.time[0]}</Card.Text></Card>
                            <Card style={{ backgroundColor: colorList[Math.floor(Math.random() * colorList.length)] }}><Card.Title>{class_name.name[1]}</Card.Title><Card.Text className="text-center">{class_name.date[1]}<br />{class_name.time[1]}</Card.Text></Card>
                            <Card style={{ backgroundColor: colorList[Math.floor(Math.random() * colorList.length)] }}><Card.Title>{class_name.name[2]}</Card.Title><Card.Text className="text-center">{class_name.date[2]}<br />{class_name.time[2]}</Card.Text></Card>
                            <Card style={{ backgroundColor: colorList[Math.floor(Math.random() * colorList.length)] }}><Card.Title>{class_name.name[3]}</Card.Title><Card.Text className="text-center">{class_name.date[3]}<br />{class_name.time[3]}</Card.Text></Card>
                        </Stack>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default ClassesCarousel;