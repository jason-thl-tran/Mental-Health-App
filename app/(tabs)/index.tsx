import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
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
            <Text style={styles.heading}>Welcome Home!</Text>
            <Calendar
              onDayPress={(day: { dateString: React.SetStateAction<string>; }) => {
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

const styles = StyleSheet.create({
  heading: {
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20, 
  },
});

export default Home;
