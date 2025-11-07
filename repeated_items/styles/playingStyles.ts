import { StyleSheet } from 'react-native';
import Display from '../constants/Display';
import Colors from '../constants/Colors';

export const imageBasicStyle = StyleSheet.create({
  size: {
    width: Display.setWidth(15),
    height: Display.setHeight(10),
    resizeMode: 'stretch',
    backgroundColor: 'transparent',
  },
  playedCardShadow: {
    boxShadow: '4px 4px 7.8px 0px rgba(0, 0, 0, 0.4)',
  },
});

const styles = StyleSheet.create({
  container: {
    height: Display.setHeight(100),
    width: Display.setWidth(100),
    backgroundColor: Colors.BACKGROUND_2,
  },
});
export default styles;
