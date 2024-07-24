import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import IntroScreenOne from './introScreenOne';
import IntroScreenTwo from './introScreenTwo';
import IntroScreenThree from './introScreenThree';
import { useNavigation } from '@react-navigation/native';

const IntroScreens = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const handleGoalInput = () => {
    // Navigate to the 'GoalInput' screen
    navigation.navigate('GoalInput');
  };

  const handleIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        dotColor="#FFFFFF"
        activeDotColor="#10C1F1"
        loop={false} // Prevent looping
        onIndexChanged={handleIndexChanged} // Track the current index
        scrollEnabled={currentIndex < 2} // Disable scrolling when on the last screen
      >
        <IntroScreenOne />
        <IntroScreenTwo />
        <IntroScreenThree handleGoalInput={handleGoalInput} />
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  paginationStyle: {
    bottom: 20,
    alignSelf: 'center',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  activeDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#10C1F1',
  },
});

export default IntroScreens;
