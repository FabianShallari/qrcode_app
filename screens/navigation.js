import { StackNavigator } from "react-navigation";
import ScannerScreen from "./ScannerScreen.js";
import ResultScreen from "./ResultScreen.js";
import ScreensConfig from "./config.js";

export default RootStack = StackNavigator(
  {
    Scanner: {
      screen: ScannerScreen,
      path: ScreensConfig.Scanner.path
    },
    Result: {
      screen: ResultScreen,
      path: ScreensConfig.Scanner.path
    }
  },
  {
    initialRouteName: ScreensConfig.Scanner.path
  }
);