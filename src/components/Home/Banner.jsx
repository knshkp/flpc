import Carousel from "react-multi-carousel";
import { styled } from '@mui/material';
import { bannerData } from '../constants/data';
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1// optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Image = styled('img')({
  width: '100%',
  height: 280
});

const Banner = () => {
  return (
    <Carousel responsive={responsive}
    dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  containerClass="carousel-container"
  infinite={true}
  autoPlay={true}
  transitionDuration={500}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={500}>
      {bannerData.map((item) => (
        <Image
          key={item.id}  // Added a key prop for optimization
          src={item.url}
          alt={`Slide ${item.id}`}
        />
      ))}
    </Carousel>
  );
};

export default Banner;
