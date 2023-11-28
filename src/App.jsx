import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageMain from "./pages/main/PageMain";
import PageSuccess from "./pages/success/PageSuccess";

import "./assets/fonts/Roboto-Bold.ttf";
import "./assets/fonts/Roboto-Regular.ttf";
import "./index.scss";

const App = () => {
  return (
    <PageMain />
    // <PageSuccess />

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<PageMain />}/>
    //     <Route path="success" element={<PageSuccess />}/>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App;