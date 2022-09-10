import React, { useState, useCallback, useRef } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import SnapCarousel from 'react-native-snap-carousel';

const exampleItems = [
  {
    title: 'Item 1',
    text: 'Text 1',
  },
  {
    title: 'Item 2',
    text: 'Text 2',
  },
  {
    title: 'Item 3',
    text: 'Text 3',
  },
  {
    title: 'Item 4',
    text: 'Text 4',
  },
  {
    title: 'Item 5',
    text: 'Text 5',
  },
];

const Carousel = ({image, color}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(({ item, index }) => (
    <TouchableOpacity
      onPress={()=> console.log('carousel item pressed')}
      style={{
        backgroundColor: color,
        borderRadius: 25,
        height: 300,
        padding: 50,
        width: 250,
      }}
    >
      {image && <Image source={{uri: image }} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}/>}
      <Text style={{ fontSize: 30 }}>{item.title}</Text>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  ), [image]);

  return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', height: 300}}>
        <SnapCarousel
         
          layout="stack"
          ref={ref}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
  );
};

export default Carousel;