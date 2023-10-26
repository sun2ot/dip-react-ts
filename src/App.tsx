import "bootstrap/dist/css/bootstrap.css";
// 定义路由规则
// Route用来定义路由规则的，它一定要在Routes组件中包裹起来，否则报错
import { Routes, Route } from "react-router-dom";
import "./App.css";
import text from "./assets/static_text";
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
        <Route
          path="/reverse"
          element={<Model0 head={text[2].head} id="2" />}
        />
        <Route
          path="/log"
          element={<Model1 head={text[3].head} tips={text[3].tips} id="3" />}
        />
        <Route
          path="/pow"
          element={
            <Model2
              head={text[4].head}
              tip1={text[4].tip1}
              tip2={text[4].tip2}
              id="4"
            />
          }
        />
        <Route
          path="/con"
          element={
            <Model2
              head={text[5].head}
              tip1={text[5].tip1}
              tip2={text[5].tip2}
              id="5"
            />
          }
        />
        <Route
          path="/gs"
          element={
            <Model2
              head={text[6].head}
              tip1={text[6].tip1}
              tip2={text[6].tip2}
              id="6"
            />
          }
        />
        <Route
          path="/bps"
          element={<Model1 head={text[7].head} tips={text[7].tips} id="7" />}
        />
        <Route
          path="/cal1"
          element={<Model1_mf head={text[8].head} tips={text[8].tips} id="8" />}
        />
        <Route path="/cal2" element={<Model0 head={text[9].head} id="9" />} />
        <Route
          path="/cal3"
          element={
            <Model1_mf head={text[10].head} tips={text[10].tips} id="10" />
          }
        />
        <Route path="/heq" element={<Model0 head={text[11].head} id="11" />} />
        <Route
          path="/lsf"
          element={<Model1 head={text[12].head} tips={text[12].tips} id="12" />}
        />
        <Route
          path="/msf"
          element={<Model1 head={text[13].head} tips={text[13].tips} id="13" />}
        />
        <Route
          path="/sf"
          element={<Model1 head={text[14].head} tips={text[14].tips} id="14" />}
        />
        <Route
          path="/rgb2cmy"
          element={<Model0 head={text[15].head} id="15" />}
        />
        <Route
          path="/rgb2hsi"
          element={<Model0 head={text[16].head} id="16" />}
        />
        <Route
          path="/rgb2yuv"
          element={<Model0 head={text[17].head} id="17" />}
        />
        <Route
          path="/rgb2ycbcr"
          element={<Model0 head={text[18].head} id="18" />}
        />
        <Route
          path="/rgbcom"
          element={<Model0 head={text[19].head} id="19" />}
        />
        <Route
          path="/lgt"
          element={
            <Model2
              head={text[20].head}
              tip1={text[20].tip1}
              tip2={text[20].tip2}
              id="20"
            />
          }
        />
        <Route path="/ft" element={<Model0 head={text[21].head} id="21" />} />
        <Route path="/ftt" element={<Model0 head={text[22].head} id="22" />} />
        <Route
          path="/ilf"
          element={<Model1 head={text[23].head} tips={text[23].tips} id="23" />}
        />
        <Route
          path="/blf"
          element={
            <Model2
              head={text[24].head}
              tip1={text[24].tip1}
              tip2={text[24].tip2}
              id="24"
            />
          }
        />
        <Route
          path="/ihf"
          element={<Model1 head={text[25].head} tips={text[25].tips} id="25" />}
        />
        <Route path="/lf" element={<Model0 head={text[26].head} id="26" />} />
      </Routes>
    </>
  );
}

export default App;
