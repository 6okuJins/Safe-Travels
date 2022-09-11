import { useState, useEffect } from 'react';
import { Dimensions, TouchableOpacity, Platform, StyleSheet, Button, View, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Moment from 'react-moment';
const DatePicker = ({setTimeLeft}) => {
  const [date, setDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  useEffect(()=> {
    const interval = setInterval(() => setTimeLeft(<Moment element={Text} date={date} durationFromNow />), 10000)
    return () => {
      clearInterval(interval)
    }
  }, [date])

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    hideDatePicker();
    setDate(date);
  };

  const onChange = (event, value) => {
    setDate(value);
  };

  return (
    
    <View style={styles.container}>
      {/* Display the selected date */}


      <TouchableOpacity style={{borderRadius: 10, backgroundColor: 'rgba(255,255,255, 0.3)', padding: 10,}}
        onPress={showDatePicker}>
        <Text style={{
          fontSize: 20,
          color: 'rgb(255,255,255)',
          fontFamily: 'Roboto_400Regular',
          lineHeight: 30
          }}>
            {date?.toLocaleDateString()}
            {date ? "\n": ''}
            {date?.toLocaleTimeString()}
            {!date && 'Set Date'}
            </Text>
      </TouchableOpacity>

      {/* The date picker */}

        {/* styles.datePickerWrapper */}
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            value={date}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
    </View>
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
    backgroundColor: 'rgba(0,0,0,0.8)'

  },
  datePickerWrapper: {
    alignItems: 'flex-start',  
  },
  datePicker: {

    alignItems: 'center',
    width: 220,
    color: 'white'
  }
});
export default DatePicker;
