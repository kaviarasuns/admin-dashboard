import { Home } from "./Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          {/* <Route path="login" element={<Login/>}/> */}
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
