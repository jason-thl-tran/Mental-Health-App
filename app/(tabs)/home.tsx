import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function home() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <ScrollView 
                    contentInsetAdjustmentBehavior='automatic'
                    style={{ height: '100%' }}
                >
                    <View style={{ padding: 16 }}>
                    <Text>home</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
  )
}
