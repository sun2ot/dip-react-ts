import Jump from "./Button/Jump";

const Menu = () => {
  return (
    <div>
      <Jump path="/gray">灰度级量化</Jump>
      <Jump path="/reverse">反转变换</Jump>
      <Jump path="/log">对数变换</Jump>
      <Jump path="/pow">幂次变换</Jump>
      <Jump path="/con">对比度拉伸</Jump>
      <Jump path="/gs">灰度级切片</Jump>
    </div>
  );
};

export default Menu;
