import { StackNavigator } from "react-navigation";
import ScannerScreen from "./ScannerScreen.js";
import ResultScreen from "./ResultScreen.js";
import ScreensConfig from "./config.js";

export default RootStack = StackNavigator(
  {
    Scanner: {
      screen: ScannerScreen
    },
    Result: {
      screen: ResultScreen
    }
  },
  {
    initialRouteName: ScreensConfig.Scanner.path
  }
);