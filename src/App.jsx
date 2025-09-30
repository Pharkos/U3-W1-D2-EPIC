import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar brandName="Book-World" />
      <AllTheBooks />
    </>
  );
}

export default App;
