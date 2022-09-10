
import { useState } from 'react';
import { TouchableOpacity, View, Text } from "react-native";
const CircleButton = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View>
      <Text>Count: {count} </Text>
      <TouchableOpacity onPress={onPress}>
        <Text> Press Here </Text>
      </TouchableOpacity>
    </View>
  )
}
export default CircleButton;