import * as React from 'react';
import Constants from 'expo-constants';
import { Text, View, StyleSheet } from 'react-native';

import { asPickerFormat } from './utils';
import { BUTTON_HEIGHT, VIEW_WIDTH } from './values';
import TimePicker from './components/TimePicker';

export default function App() {
  const [time, setTime] = React.useState(asPickerFormat(new Date()));
  return (
    <View style={styles.view}>
      <Text>{time.toTimeString()}</Text>
      <TimePicker
        value={time}
        onChange={setTime}
        width={VIEW_WIDTH}
        buttonHeight={BUTTON_HEIGHT}
        visibleCount={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
