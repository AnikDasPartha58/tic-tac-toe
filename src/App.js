import Board from "./components/board/Board";
import Start from "./components/start/Start";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <Start/> */}
        <Board />
      </div>
    </div>
  );
}

export default App;
