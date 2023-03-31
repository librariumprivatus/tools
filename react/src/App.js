
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Main from "./pages/main";
import Grid from "./pages/grid";
import Tree from "./pages/tree";
import NoPage from "./pages/nopage";
import Sandbox from "./pages/Sandbox";
import ImagesList from "./pages/ImageList";
import Apples from "./pages/Apples";
import Kiwis from "./pages/Kiwis";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="sandbox" element={<Sandbox />} />
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="grid" element={<Grid />} />
                <Route path="tree" element={<Tree />} />
                <Route path="*" element={<NoPage />} />
                <Route path="images" element={<ImagesList />} />
                <Route path="apples" element={<Apples />} />
                <Route path="kiwis" element={<Kiwis />} />
            </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
