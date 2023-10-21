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
      <Jump path="/bps">位平面切片</Jump>
      <Jump path="/cal1">加减乘除</Jump>
      <Jump path="/cal2">非运算</Jump>
      <Jump path="/cal3">与、或、异或运算</Jump>
      <Jump path="/heq">直方图均衡化</Jump>
      <Jump path="/lsf">线性平滑滤波器</Jump>
      <Jump path="/msf">中值滤波器</Jump>
      <Jump path="/sf">锐化滤波器</Jump>
    </div>
  );
};

export default Menu;
