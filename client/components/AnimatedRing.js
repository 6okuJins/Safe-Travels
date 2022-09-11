import { MotiView } from 'moti';
import { View } from 'react-native';

const Ring = ({size}) => {
  return (
    <MotiView
    from={{
      width: size,
      height: size,
      borderRadius: size / 2 ,
      borderWidth: 0,
      shadowOpacity: 0.5,
    }}
    animate={{
      width: size + 20,
      height: size + 20,
      borderRadius: (size + 20) / 2,
      borderWidth: size / 10,
      shadowOpacity: 1,
    }}
    transition={{
      type: 'timing',
      duration: 1000,
      loop: true,
      repeat: Infinity
    }}
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: size / 10,
      borderColor: '#73b9f0',
      shadowColor: '#87CEEB',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 10,
    }}
    />
  )
}
export default function AnimatedRing() {
  return (
    <View
      style={{
        flexShrink: 1,
        position: 'absolute',
        top: 215,
        alignItems: 'center',
        justifyContent: 'center',


      }}
    >
      <Ring size={235} />
    </View>

  )
}