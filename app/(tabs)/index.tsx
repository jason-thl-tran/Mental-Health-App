import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Calendar } from 'react-native-calendars';

const Home = () => {
  const [selected, setSelected] = useState('');

  const markedDates = {
    '2024-09-28': { selected: true, selectedColor: 'red', selectedTextColor: 'black' },
    '2024-09-29': { selected: true, selectedColor: 'red', selectedTextColor: 'black' },
    '2024-09-30': { selected: true, selectedColor: 'yellow', selectedTextColor: 'black' },
    '2024-10-01': { selected: true, selectedColor: 'yellow', selectedTextColor: 'black' },
    '2024-10-02': { selected: true, selectedColor: 'red', selectedTextColor: 'black' },
    '2024-10-03': { selected: true, selectedColor: 'yellow', selectedTextColor: 'black' },
    '2024-10-04': { selected: true, selectedColor: 'green', selectedTextColor: 'black' },
    '2024-10-05': { selected: true, selectedColor: 'red', selectedTextColor: 'black' },
    '2024-10-06': { selected: true, selectedColor: 'red', selectedTextColor: 'black' },
    '2024-10-07': { selected: true, selectedColor: 'yellow', selectedTextColor: 'black' },
    '2024-10-08': { selected: true, selectedColor: 'green', selectedTextColor: 'black' },
    '2024-10-09': { selected: true, selectedColor: 'green', selectedTextColor: 'black' },
    '2024-10-10': { selected: true, selectedColor: 'green', selectedTextColor: 'black' },
    '2024-10-11': { selected: true, selectedColor: 'green', selectedTextColor: 'black' },
  };
  

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <ScrollView 
          contentInsetAdjustmentBehavior='automatic'
          style={{ height: '100%' }}
        >
          <View style={{ padding: 16 }}>
            <Text style={styles.heading}>Welcome Home!</Text>
            <Calendar
              onDayPress={(day: { dateString: React.SetStateAction<string>; }) => {
                setSelected(day.dateString);
              }}
              markedDates={{
                ...markedDates,
                [selected]: { selected: true }
              }}
            />
            <Text style={styles.streak}>14 Day Streak!</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20, 
  },
  streak: {
    fontSize: 46,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80
  }
});

export default Home;
