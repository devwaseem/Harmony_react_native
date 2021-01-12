/**
 * @format
 */
import HomeScreen from "./src/Screens/home";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './src/Screens/home';

AppRegistry.registerComponent(appName, () => HomeScreen);
