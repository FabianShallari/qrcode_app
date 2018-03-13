import { StackNavigator } from "react-navigation";
import ScreensConfig from "./config.js";

export default RootStack = StackNavigator(
  {
    ...ScreensConfig
  },
  {
    initialRouteName: ScreensConfig.Scanner.path
  }
);