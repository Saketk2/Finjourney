import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
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
        paginationStyle={styles.paginationStyle} // Custom pagination style
        dotStyle={styles.dotStyle} // Style for inactive dots
        activeDotStyle={styles.activeDotStyle} // Style for active dot
        dotColor="#FFFFFF" // Dot color for inactive dots
        activeDotColor="#10C1F1" // Dot color for active dot
      >
        <IntroScreenOne />
        <IntroScreenTwo />
        <IntroScreenThree />
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, // Ensure swiper takes up the full screen
  },
  paginationStyle: {
    bottom: 20, // Position of the dots
    alignSelf: 'center', // Center the dots horizontally
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF', // Color for inactive dots
  },
  activeDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#10C1F1', // Color for the active dot
  },
});

export default IntroScreens;
