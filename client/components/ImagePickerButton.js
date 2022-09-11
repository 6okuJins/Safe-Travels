import { TouchableOpacity, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample({ setImage }) {


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage} style={{backgroundColor: 'white', borderRadius: 15, padding: 10, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Choose an image</Text>
    </TouchableOpacity>
  );
}
