
import {Carousel} from 'react-bootstrap';
import SpaceCity1 from "../../assets/1.mp4";
import SpaceCity2 from "../../assets/2.mp4";
import SpaceCity3 from "../../assets/3.mp4";
import SpaceCity4 from "../../assets/4.mp4";
import SpaceCity5 from "../../assets/5.mp4";
import ReactPlayer from 'react-player';
import "bootstrap/dist/css/bootstrap.css";
import "./VideoCarousel.css";


function VideoCarousel() {
  const videoProperities =[
    {
    id:1,
    title:"video 1",
    src:SpaceCity1,
    credit:"Video by conttonbro from pexels ",
    },
    {
      id:2,
      title:"video 2",
      src:SpaceCity2,
      credit:"Video by conttonbro from pexels ",
    },
    {
      id:3,
      title:"video 3",
      src:SpaceCity3,
      credit:"Video by conttonbro from pexels ",
    },
    {
      id:4,
      title:"video 4",
      src:SpaceCity4,
      credit:"Video by conttonbro from pexels ",
    },
    {
      id:5,
      title:"video 5",
      src:SpaceCity5,
      credit:"Video by conttonbro from pexels ",
    },
  ]
  return <div className="App">
      <Carousel>
        {videoProperities.map((videoObj) => {
return (
  <Carousel.Item key={videoObj.id}>
    <ReactPlayer
    url={videoObj.src}
    width="400px"
    border-radius="50px"
    height="490px"
    pip={true}
    controls={true}
    playing={false}
    />
    <Carousel.Caption>
      <h3>{videoObj.title}</h3>
      <p>{videoObj.credit}</p>
    </Carousel.Caption>
  </Carousel.Item>
)
        })}
      </Carousel>
    </div>;
  
}

export default VideoCarousel