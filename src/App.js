import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./learn/Main";
import Detail from "./learn/7.movie-app/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/movie/:id" element={<Detail />}></Route>
          {/* 메인 path 를 제외한 route 들은 메인 path 위에 route 할 것 */}
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
