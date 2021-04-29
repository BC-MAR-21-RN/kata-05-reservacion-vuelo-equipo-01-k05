import React from 'react';
import {View, Image, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {styles} from '../styles/styleDatePicker';
import {icons} from '../constants';

const DatePicker = ({onDateChange}) => {
  const today = new Date();

  const customDayHeaderStylesCallback = ({dayOfWeek}) => {
    if (dayOfWeek) {
      return {
        textStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
      };
    }
  };

  return (
    <View>
      <Text style={styles.title}>Select date</Text>
      <CalendarPicker
        weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
        minDate={today}
        selectedDayColor="#8865E6"
        selectedDayTextColor="#FFFFFF"
        previousComponent={
          <Image source={icons.chevronLeft} style={styles.icon} />
        }
        nextComponent={
          <Image source={icons.chevronRight} style={styles.icon} />
        }
        monthTitleStyle={styles.titleHeader}
        customDayHeaderStyles={customDayHeaderStylesCallback}
        dayLabelsWrapper={styles.dayLabels}
        yearTitleStyle={styles.titleHeader}
        textStyle={styles.text}
        onDateChange={onDateChange}
      />
    </View>
  );
};

export default DatePicker;
