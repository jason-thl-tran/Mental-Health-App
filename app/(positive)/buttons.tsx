import { TouchableOpacity, Text } from 'react-native';
import { StyleSheet, Image, Platform } from 'react-native';

export default function button() {
<TouchableOpacity onPress={() => {}} style={stylesheet.primaryButton}>
  <Text>Happy</Text>
</TouchableOpacity>}

// Add your styles separately
const stylesheet = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
