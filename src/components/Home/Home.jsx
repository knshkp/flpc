import Banner from "./Banner";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import { styled } from "@mui/material";
import Countdown, {CountDown} from "react-countdown"
import {Box} from "@mui/material";
const Component = styled('p')({
    marginTop: 30,
    padding: '15px 20px',
    textAlign: 'center',
    fontWeight: 'bold',
  });
  
  const AllBox = styled(Box)({
    textAlign: 'center',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });
  
  const TimerImage = styled('img')({
    marginBottom: 10,
  });
const Home=()=>{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds, completed }) => {
          return <span>{minutes}:{seconds} left</span>;
      };
    return(
        <>
        <NavBar/>
        <Banner/>
        <Box>
        <Component>Deal of the Day </Component>
        <AllBox>
          <TimerImage src={timerURL} alt="timer" />
          <Countdown date={Date.now()+5.04e+7 } renderer={renderer}/>
        </AllBox>
        </Box>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00 "} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-30-09-2023-1696012417-61BGE6iu4AL._SL1500.webp" />
        </a>
        <a href="https://flip2.big-selling.shop/product/apple-iphone-14-pro-max">
        <ProductCard title="Apple Iphone 14 plus" discount={"99% Off "} pr={"₹ 179,000.00"} price={"₹ 435"} imageUrl="https://flip2.big-selling.shop/geekadmin/uploads/product/product-29-09-2023-1696009691-71yzJoE7WlL._SL1500.webp" />
        </a>

        </>
    )
}
export default Home;