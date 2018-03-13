import { StackNavigator } from "react-navigation";
import ScreensConfig from "./config.js";

export default RootStack = StackNavigator(
  {
    ...ScreensConfig
  },
  {
    initialRouteName: ScreensConfig.Scanner.path,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0C656F',
      },
      headerTintColor: '#fff',
    },
  }
);