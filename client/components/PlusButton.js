import { TouchableOpacity } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
export default function PlusButton({onPress}) {
  return (
    <TouchableOpacity style={{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00ADB5',
      borderRadius: 9999, width: 30,
      height: 30, marginHorizontal: 10
      }}
      onPress={onPress}>
      <FeatherIcons name='plus' size={20} color='#FFFFFF' />
    </TouchableOpacity>
  )
}