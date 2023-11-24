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
import Model0_text from "./ImageUpload/Model0_text";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Menu />} />
                {/* 灰度级量化是下拉列表，为简单起见，这里就不再进一步抽象 */}
                <Route path="/1" element={<Grayscale />} />
                <Route path="/2" element={<Model0 head={text[2].head} id="2" />} />
                <Route path="/3" element={<Model1 head={text[3].head} tips={text[3].tips} id="3" />} />
                <Route path="/4" element={<Model2 head={text[4].head} tip1={text[4].tip1} tip2={text[4].tip2} id="4" />} />
                <Route path="/5" element={<Model2 head={text[5].head} tip1={text[5].tip1} tip2={text[5].tip2} id="5" />} />
                <Route path="/6" element={<Model2 head={text[6].head} tip1={text[6].tip1} tip2={text[6].tip2} id="6" />} />
                <Route path="/7" element={<Model1 head={text[7].head} tips={text[7].tips} id="7" />} />
                <Route path="/8" element={<Model1_mf head={text[8].head} tips={text[8].tips} id="8" />} />
                <Route path="/9" element={<Model0 head={text[9].head} id="9" />} />
                <Route path="/10" element={<Model1_mf head={text[10].head} tips={text[10].tips} id="10" />} />
                <Route path="/11" element={<Model0 head={text[11].head} id="11" />} />
                <Route path="/12" element={<Model1 head={text[12].head} tips={text[12].tips} id="12" />} />
                <Route path="/13" element={<Model1 head={text[13].head} tips={text[13].tips} id="13" />} />
                <Route path="/14" element={<Model1 head={text[14].head} tips={text[14].tips} id="14" />} />
                <Route path="/15" element={<Model0 head={text[15].head} id="15" />} />
                <Route path="/16" element={<Model0 head={text[16].head} id="16" />} />
                <Route path="/17" element={<Model0 head={text[17].head} id="17" />} />
                <Route path="/18" element={<Model0 head={text[18].head} id="18" />} />
                <Route path="/19" element={<Model0 head={text[19].head} id="19" />} />
                <Route path="/20" element={<Model2 head={text[20].head} tip1={text[20].tip1} tip2={text[20].tip2} id="20" />} />
                <Route path="/21" element={<Model0 head={text[21].head} id="21" />} />
                <Route path="/22" element={<Model0 head={text[22].head} id="22" />} />
                <Route path="/23" element={<Model1 head={text[23].head} tips={text[23].tips} id="23" />} />
                <Route path="/24" element={<Model2 head={text[24].head} tip1={text[24].tip1} tip2={text[24].tip2} id="24" />} />
                <Route path="/25" element={<Model1 head={text[25].head} tips={text[25].tips} id="25" />} />
                <Route path="/26" element={<Model2 head={text[26].head} tip1={text[26].tip1} tip2={text[26].tip2} id="26" />} />
                <Route path="/27" element={<Model2 head={text[27].head} tip1={text[27].tip1} tip2={text[27].tip2} id="27" />} />
                <Route path="/28" element={<Model2 head={text[28].head} tip1={text[28].tip1} tip2={text[28].tip2} id="28" />} />
                <Route path="/29" element={<Model1 head={text[29].head} tips={text[29].tips} id="29" />} />
                <Route path="/30" element={<Model1 head={text[30].head} tips={text[30].tips} id="30" />} />
                <Route path="/31" element={<Model1 head={text[31].head} tips={text[31].tips} id="31" />} />
                <Route path="/32" element={<Model2 head={text[32].head} tip1={text[32].tip1} tip2={text[32].tip2} id="32" />} />
                <Route path="/33" element={<Model1 head={text[33].head} tips={text[33].tips} id="33" />} />
                <Route path="/34" element={<Model1 head={text[34].head} tips={text[34].tips} id="34" />} />
                <Route path="/35" element={<Model2 head={text[35].head} tip1={text[35].tip1} tip2={text[35].tip2} id="35" />} />
                <Route path="/36" element={<Model2 head={text[36].head} tip1={text[36].tip1} tip2={text[36].tip2} id="36" />} />
                <Route path="/37" element={<Model2 head={text[37].head} tip1={text[37].tip1} tip2={text[37].tip2} id="37" />} />
                <Route path="/38" element={<Model0 head={text[38].head} id="38" />} />
                <Route path="/39" element={<Model0 head={text[39].head} id="39" />} />
                <Route path="/40" element={<Model0 head={text[40].head} id="40" />} />
                <Route path="/41" element={<Model0 head={text[41].head} id="41" />} />
                <Route path="/42" element={<Model0 head={text[42].head} id="42" />} />
                <Route path="/43" element={<Model0 head={text[43].head} id="43" />} />
                <Route path="/44" element={<Model0 head={text[44].head} id="44" />} />
                <Route path="/45" element={<Model0 head={text[45].head} id="45" />} />
                <Route path="/46" element={<Model0 head={text[46].head} id="46" />} />
                <Route path="/47" element={<Model0 head={text[47].head} id="47" />} />
                <Route path="/48" element={<Model0 head={text[48].head} id="48" />} />
                <Route path="/49" element={<Model0 head={text[49].head} id="49" />} />
                <Route path="/50" element={<Model0 head={text[50].head} id="50" />} />
                <Route path="/51" element={<Model0 head={text[51].head} id="51" />} />
                <Route path="/52" element={<Model0 head={text[52].head} id="52" />} />
                <Route path="/53" element={<Model0_text head={text[53].head} id="53" />} />
                <Route path="/54" element={<Model1 head={text[54].head} tips={text[54].tips} id="54" />} />
                <Route path="/55" element={<Model0 head={text[55].head} id="55" />} />
                <Route path="/56" element={<Model0_text head={text[56].head} id="56" />} />
                <Route path="/57" element={<Model0 head={text[57].head} id="57" />} />
            </Routes>
        </>
    );
}

export default App;
