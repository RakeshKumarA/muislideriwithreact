import React, { useState } from 'react';

// react-id-swiper
import 'swiper/swiper-bundle.css';
import Swiper from 'react-id-swiper';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { AutorenewTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '500px',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    margin: 'auto',
  },
  swiper: {
    position: 'relative',
    zIndex: '2',
  },
}));

const HeroSliderConfigs = {
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 500,
  spaceBetween: 0,
  effect: 'slide',
};

const HeroSlider = () => {
  const classes = useStyles();
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <Swiper
      {...HeroSliderConfigs}
      getSwiper={setParallaxSwiper}
      className={classes.swiper}
    >
      <Grid container className={classes.container}>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classes.image}
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image1} alt="image1" />
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classes.image}
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image2} alt="image2" />
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classes.image}
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image3} alt="image3" />
        </Grid>
      </Grid>
    </Swiper>
  );
};

export default HeroSlider;
