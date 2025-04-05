import { Provider } from "react-redux";
import MainComponent from "./components/MainComponent";
import appStore from "./components/utils/AppStore";

function App() {
  return (  
    <Provider store={appStore}>
      <MainComponent />
    </Provider>
  );
}

export default App;
