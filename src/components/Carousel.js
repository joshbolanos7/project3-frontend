import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
    return (
        <div Style={{ display: 'inline-block', width: "400px", padding: 30 }}>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src="https://i.imgur.com/UEUky4p.jpg?1"
                        alt="russel"
                    />
                    <Carousel.Caption>
                        <h3>Max Verstappen</h3>
                        <p>Max Verstappen, as of today is leading the driver standings for the 2021 season.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src="https://i.imgur.com/Wo19ibA.jpg?3"
                        alt="imagetwo"
                        width="900px"
                        height="500px"
                    />
                    <Carousel.Caption>
                        <h3>Lewis Hamilton</h3>
                        <p>Lewis Hamilton, 7 time world champions is currently 12 points behind Max Verstappen in the 2021 Driver Standings with 6 races left in the season.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src="https://i.imgur.com/sHRTuq3.jpg"
                        alt="imagetwo"
                        width="900px"
                        height="500px"
                    />
                    <Carousel.Caption>
                        <h3>Max vs. Lewis, USA Grand Prix 2021</h3>
                        <p>6 races to go in the season, and it could come to the last race to determine the World Champion for 2021. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousels;