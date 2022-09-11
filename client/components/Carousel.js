import React, { useState, useCallback, useRef } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import SnapCarousel from 'react-native-snap-carousel';

// const exampleItems = [
//   {
//     title: 'Item 1',
//     text: 'Text 1',
//   },
//   {
//     title: 'Item 2',
//     text: 'Text 2',
//   },
//   {
//     title: 'Item 3',
//     text: 'Text 3',
//   },
//   {
//     title: 'Item 4',
//     text: 'Text 4',
//   },
//   {
//     title: 'Item 5',
//     text: 'Text 5',
//   },
// ];

const Carousel = ({carouselItems, openTrip}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  //const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(({ item, index }) => (
    <TouchableOpacity
      onPress={()=> openTrip(index, carouselItems)}
      style={{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#393E46',
        borderRadius: 25,
        height: 300,
        padding: 20,
        width: 250,
        overflow: 'hidden',
      }}
    >
      {console.log(carouselItems)}
      {item?.image && <Image source={{uri: item.image }} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}/>}
      <View>
        <Text style={{color: 'white'}}>{index + 1} / {carouselItems.length}</Text>
      </View>
      <View style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        paddingHorizontal: 15,
      }}>
        <Text style={{color: 'white', fontSize: 16, fontFamily: 'Roboto_400Regular'}}>{item.destination}</Text>
      </View>
    </TouchableOpacity>
  ), [carouselItems]);

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