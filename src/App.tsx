import "bootstrap/dist/css/bootstrap.css";
// 定义路由规则
// Route用来定义路由规则的，它一定要在Routes组件中包裹起来，否则报错
import { Routes, Route } from "react-router-dom";
import "./App.css";
// 路由匹配成功后要渲染的组件
import Grayscale from "./ImageUpload/Grayscale";
import Model1 from "./ImageUpload/Model1";
import Menu from "./Menu";
import Model0 from "./ImageUpload/Model0";
import Model2 from "./ImageUpload/Model2";
import Model1_mf from "./ImageUpload/Model1_mf";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        {/* 灰度级量化是下拉列表，为简单起见，这里就不再进一步抽象 */}
        <Route path="/gray" element={<Grayscale />} />
        <Route path="/reverse" element={<Model0 head="反转变换" id="2" />} />
        <Route
          path="/log"
          element={<Model1 head="对数变换" tips="请输入参数c值" id="3" />}
        />
        <Route
          path="/pow"
          element={
            <Model2
              head="幂次变换"
              tip1="请输入c值"
              tip2="请输入gamma值"
              id="4"
            />
          }
        />
        <Route
          path="/con"
          element={
            <Model2
              head="对比度拉伸"
              tip1="请输入拉伸的最小像素(整数)"
              tip2="请输入拉伸的最大像素(整数)"
              id="5"
            />
          }
        />
        <Route
          path="/gs"
          element={
            <Model2
              head="灰度级切片"
              tip1="请输入切片的最小像素(整数)"
              tip2="请输入切片的最大像素(整数)"
              id="6"
            />
          }
        />
        <Route
          path="/bps"
          element={
            <Model1 head="位平面切片" tips="请输入切片位值(0-7)" id="7" />
          }
        />
        <Route
          path="/cal1"
          element={
            <Model1_mf
              head="加减乘除"
              tips="请输入操作符(仅支持 'add', 'subtract', 'multiply' and 'divide')"
              id="8"
            />
          }
        />
        <Route path="/cal2" element={<Model0 head="非运算" id="9" />} />
        <Route
          path="/cal3"
          element={
            <Model1_mf
              head="与、或、异或运算"
              tips="请输入操作符(仅支持 '&', '|', and '^')"
              id="10"
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
