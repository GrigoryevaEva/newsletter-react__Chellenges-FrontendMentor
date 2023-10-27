import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageMain from "./pages/main/PageMain";
import PageSuccess from "./pages/success/PageSuccess";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageMain />}/>
        <Route path="success" element={<PageSuccess />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;