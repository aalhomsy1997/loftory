import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import App from './src/App';
import ToolBar from './src/components/Layout/ToolBar';
import BottomBar from './src/components/Layout/BottomBar';
import {Platform} from 'react-native';

const MainApp = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
  };
  return (
    <SafeAreaView style={[backgroundStyle]}>
      <ToolBar />
      <App />
      <BottomBar />
    </SafeAreaView>
  );
};
export default MainApp;
