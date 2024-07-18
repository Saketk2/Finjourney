import React, { useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import IntroScreenOne from './introScreenOne';
import IntroScreenTwo from './introScreenTwo';
import IntroScreenThree from './introScreenThree';

const IntroScreens = () => {
  const swiperRef = useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
      >
        <IntroScreenOne />
        <IntroScreenTwo />
        <IntroScreenThree />
      </Swiper>
      <View style={styles.buttonContainer}>
        <Button
          title="Previous"
          onPress={() => swiperRef.current.scrollBy(-1)}
          disabled={swiperRef.current?.state?.index === 0}
        />
        <Button
          title="Next"
          onPress={() => swiperRef.current.scrollBy(1)}
          disabled={swiperRef.current?.state?.index === swiperRef.current?.state?.total - 1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default IntroScreens;
