import { useState } from 'react';
import { Dimensions, TouchableOpacity, Platform, StyleSheet, Button, View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = () => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));


  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      {/* Display the selected date */}
      <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{date.toLocaleTimeString()}</Text>
      </View>

      {/* The button that used to trigger the date picker */}
      {!isPickerShow && (
        <View style={styles.btnContainer}>
          <Button title="Show Picker plese" color="purple" onPress={showPicker} />
        </View>
      )}

      {/* The date picker */}
      {isPickerShow && (
        
        <View style={styles.datePickerWrapper}>
          <DateTimePicker
            value={date}
            mode={'datetime'}
            display={Platform.OS === 'ios' ? 'compact' : 'default'}
            is24Hour={false}
            onChange={onChange}
            style={styles.datePicker}
          />
        </View>
      )}
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    borderColor: 'black',
    backgroundColor: "#00BFFF"

  },
  datePickerWrapper: {
    alignItems: 'flex-start',  
  },
  datePicker: {

    alignItems: 'center',
    width: 220,
  }
});
export default DatePicker;
