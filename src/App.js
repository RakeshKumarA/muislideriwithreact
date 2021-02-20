import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent } from '@material-ui/core';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
} from 'swiper';
SwiperCore.use([
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
]);

const useStyles = makeStyles({
  parent: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    height: '100vh',
  },
});

const App = () => {
  const classes = useStyles();
  const params = {
    spaceBetween: 30,
    slidesPerView: 3,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <main>
      <Grid container justify="center">
        <Grid item sm={8}>
          <Swiper {...params}>
            <div>
              <Card style={{ backgroundColor: 'green' }}>
                <CardContent>
                  <h1>This is first</h1>
                  <h2>This is Second</h2>
                  <h3>This is Third</h3>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card style={{ backgroundColor: 'yellow' }}>
                <CardContent>
                  <h1>This is first</h1>
                  <h2>This is Second</h2>
                  <h3>This is Third</h3>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card style={{ backgroundColor: 'red' }}>
                <CardContent>
                  <h1>This is first</h1>
                  <h2>This is Second</h2>
                  <h3>This is Third</h3>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card style={{ backgroundColor: 'blue' }}>
                <CardContent>
                  <h1>This is first</h1>
                  <h2>This is Second</h2>
                  <h3>This is Third</h3>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card style={{ backgroundColor: 'gray' }}>
                <CardContent>
                  <h1>This is first</h1>
                  <h2>This is Second</h2>
                  <h3>This is Third</h3>
                </CardContent>
              </Card>
            </div>
          </Swiper>
        </Grid>
      </Grid>
    </main>
  );
};

export default App;
