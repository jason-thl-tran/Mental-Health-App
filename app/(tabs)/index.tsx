import { View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Calendar } from 'react-native-calendars';

const Home = () => {
  const [selected, setSelected] = useState('');

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <ScrollView 
          contentInsetAdjustmentBehavior='automatic'
          style={{ height: '100%' }}
        >
          <View style={{ padding: 16 }}>
            <Text>Home</Text>
            <Calendar
              onDayPress={day => {
                setSelected(day.dateString);
              }}
              markedDates={{
                [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default Home;
