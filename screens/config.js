import ScannerScreen from "./ScannerScreen.js";
import ResultScreen from "./ResultScreen.js";

export default ScreensConfig = {
  Scanner: {
    screen: ScannerScreen,
    navigationOptions: {
      title: "Gimme Qr Code"
    },
    path: "Scanner"
  },
  Result: {
    screen: ResultScreen,
    path: "Result"
  },
};