import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Room from './repeated_items/components/Room';
import Colors from './repeated_items/constants/Colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Room />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
