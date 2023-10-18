import "bootstrap/dist/css/bootstrap.css";
// 定义路由规则
// Route用来定义路由规则的，它一定要在Routes组件中包裹起来，否则报错
import { Routes, Route } from "react-router-dom";
import "./App.css";
// 路由匹配成功后要渲染的组件
import Grayscale from "./ImageUpload/Grayscale";
import LogTrans from "./ImageUpload/LogTrans";
import Menu from "./Menu";
import Reverse from "./ImageUpload/Reverse";
import PowTrans from "./ImageUpload/PowTrans";
import Contrast from "./ImageUpload/Contrast";
import GraySlice from "./ImageUpload/GraySlice";
import BitPlaneSlice from "./ImageUpload/BitPlaneSlice";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/gray" element={<Grayscale />} />
        <Route path="/reverse" element={<Reverse />} />
        <Route path="/log" element={<LogTrans />} />
        <Route path="/pow" element={<PowTrans />} />
        <Route path="/con" element={<Contrast />} />
        <Route path="/gs" element={<GraySlice />} />
        <Route path="/bps" element={<BitPlaneSlice />} />
      </Routes>
    </>
  );
}

export default App;
