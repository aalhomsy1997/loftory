import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import App from './src/App';
import ToolBar from './src/components/Layout/ToolBar';
import BottomBar from './src/components/Layout/BottomBar';

const MainApp = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <ToolBar />
      <App />
      <BottomBar />
    </SafeAreaView>
  );
};
export default MainApp;
