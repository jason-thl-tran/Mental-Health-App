import { Stack } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Svg, Path } from "react-native-svg";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mood"
        options={{
          title: "Mood",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6
              name={focused ? "face-grin" : "face-grin"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          title: "Journal",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "journal" : "journal"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "information" : "information"} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="Positive" 
        options={{ tabBarButton: () => null }}
      />
      <Tabs.Screen 
        name="Neutral" 
        options={{ tabBarButton: () => null }}
      />
      <Tabs.Screen 
        name="Negative" 
        options={{ tabBarButton: () => null }}
      />
    </Tabs>
  );
}
