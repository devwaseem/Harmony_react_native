/**
 * @format
 */
import HomeScreen from "./src/Screens/home";
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MyTabs from "./src/Screens/initial";

AppRegistry.registerComponent(appName, () => MyTabs);
