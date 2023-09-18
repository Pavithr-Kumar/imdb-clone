import "./App.css";
import Main from "./components/Main";
import { MovieStore } from "./reduxSlices/MovieStore";
import { Provider } from "react-redux";
function App() {
  return (
    <div className=" bg-gray-900 bg-opacity-90 text-white min-h-screen">
      <Provider store={MovieStore}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
