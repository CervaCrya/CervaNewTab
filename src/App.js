import './App.css';
import Clocks from "./components/clock/Clock";
import Searchbox from "./components/searchbox/Searchbox";
function App() {
    return (
        <div className="App">
            <Clocks/>
            <Searchbox/>
        </div>
    );
}

export default App;
