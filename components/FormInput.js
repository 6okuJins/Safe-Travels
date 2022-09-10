import { View, TextInput } from 'react-native';
import { useState } from 'react';


const FormInput = (props) => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
      onChangeText={setText}
      value={text}
      placeholder={props.placeholder}
      />
    </View>
  )
}
export default FormInput;