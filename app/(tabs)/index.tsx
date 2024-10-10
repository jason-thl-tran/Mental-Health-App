import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Calendar } from 'react-native-calendars';

const Home = () => {
  const [selected, setSelected] = useState('');

  const markedDates = {
    '2024-09-28': { startingDay: true, color: 'red', textColor: 'black' },
    '2024-09-29': { endingDay: true, color: 'red', textColor: 'black' },
    '2024-09-30': { startingDay: true, color: 'yellow', textColor: 'black' },
    '2024-10-01': { color: 'yellow', textColor: 'black' },
    '2024-10-02': { color: 'yellow', textColor: 'black' },
    '2024-10-03': { endingDay: true, color: 'yellow', textColor: 'black' },
    '2024-10-04': { color: 'green', TextColor: 'black' },
    '2024-10-05': { startingDay: true, color: 'red', textColor: 'black' },
    '2024-10-06': { endingDay: true, color: 'red', textColor: 'black' },
    '2024-10-07': { startingDay: true, color: 'yellow', textColor: 'black' },
    '2024-10-08': { endingDay: true, color: 'yellow', textColor: 'black' },
    '2024-10-09': { startingDay: true, color: 'green', textColor: 'black' },
    '2024-10-10': { endingDay: true, color: 'green', textColor: 'black' }
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
            markingType="period"
              onDayPress={(day: { dateString: React.SetStateAction<string>; }) => {
                setSelected(day.dateString);
              }}
              markedDates={{
                ...markedDates,
                [selected]: { selected: true, color: 'black', textColor: 'white' },
              }}
            />
            <Text style={styles.streak}>13 Day Streak!</Text>
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
