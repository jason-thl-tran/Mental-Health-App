import { createStackNavigator } from '@react-navigation/stack';
import Negative from "./Negative";
import FinalMood from "./finalMood";
import Mood from "./mood";
import Neutral from "./Neutral";
import Positive from "./Positive";
const Stack = createStackNavigator();

function MoodStack() {
  return (
    <Stack.Navigator initialRouteName="Mood" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Mood" component={Mood} />
      <Stack.Screen name="Negative" component={Negative} />
      <Stack.Screen name="FinalMood" component={FinalMood} />
      <Stack.Screen name="Neutral" component={Neutral} />
      <Stack.Screen name="Positive" component={Positive} />
      
    </Stack.Navigator>
  );
}

export default MoodStack;