import  ReactDOM  from "react-dom";
import Navbar from "./Navbar";
import Corpo from "./Corpo";

function App(){
    return (
        <>
            <Navbar />
            <Corpo />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))