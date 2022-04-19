import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import HelloView from "./views/HelloView/HelloView";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPageView from "./views/MainPage/MainPageView";

function App() {
  return (
      <BrowserRouter>
          <>
              <Routes>
                  <Route path="/" element={<MainPageView/>}/>
                 <Route path="/css" element={<HelloView/>}/>
              </Routes>
      </>
      </BrowserRouter>
  );
}

export default App;
