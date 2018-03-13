import ScannerScreen from "./ScannerScreen.js";
import ResultScreen from "./ResultScreen.js";

export default ScreensConfig = {
  Scanner: {
    screen: ScannerScreen,
    title: "Gimme Qr Code",
    path: "Scanner"
  },
  Result: {
    screen: ResultScreen,
    title: "Result Screen",
    path: "Result"
  },
};