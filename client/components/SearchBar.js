
import { TextInput, View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SearchBar({icon, placeholder}) {
  return (
    <View style={style.container}>
      <MaterialCommunityIcons name={icon} size={20} color={'#ffffff'}/>
      <TextInput
      style={style.textInput}
      placeholder={placeholder}
      placeholderTextColor='#7C808D'
      />
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: 'flex-start',
    backgroundColor: '#393E46',
    borderRadius: 20,
    padding: 10
  },
  textInput: {
    paddingLeft: 10,
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Roboto_400Regular',
  }
})