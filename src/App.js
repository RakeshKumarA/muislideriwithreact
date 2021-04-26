import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";
import Grid from "@material-ui/core/Grid";
import image1 from "./images/pexels-pixabay-414171.jpg";
import image2 from "./images/pexels-martin-damboldt-814499.jpg";
import image3 from "./images/pexels-pixabay-147411.jpg";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
} from "swiper";
SwiperCore.use([
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
]);

const useStyles = makeStyles({
  mediaStyle: {
    width: "100%",
    height: "80vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});

const App = () => {
  const classes = useStyles();
  const params = {
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <Swiper {...params}>
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image1})` }}
      ></div>
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image2})` }}
      ></div>
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image3})` }}
      ></div>
    </Swiper>
  );
};

export default App;
