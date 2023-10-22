import Jump from "./Button/Jump";
import text from "./assets/static_text";

const Menu = () => {
  return (
    <div>
      <Jump path="/gray">灰度级量化</Jump>
      <Jump path="/reverse">{text[2].head}</Jump>
      <Jump path="/log">{text[3].head}</Jump>
      <Jump path="/pow">{text[4].head}</Jump>
      <Jump path="/con">{text[5].head}</Jump>
      <Jump path="/gs">{text[6].head}</Jump>
      <Jump path="/bps">{text[7].head}</Jump>
      <Jump path="/cal1">{text[8].head}</Jump>
      <Jump path="/cal2">{text[9].head}</Jump>
      <Jump path="/cal3">{text[10].head}</Jump>
      <Jump path="/heq">{text[11].head}</Jump>
      <Jump path="/lsf">{text[12].head}</Jump>
      <Jump path="/msf">{text[13].head}</Jump>
      <Jump path="/sf">{text[14].head}</Jump>
      <Jump path="/rgb2cmy">{text[15].head}</Jump>
      <Jump path="/rgb2hsi">{text[16].head}</Jump>
      <Jump path="/rgb2yuv">{text[17].head}</Jump>
      <Jump path="/rgb2ycbcr">{text[18].head}</Jump>
      <Jump path="/rgbcom">{text[19].head}</Jump>
      <Jump path="/lgt">{text[20].head}</Jump>
    </div>
  );
};

export default Menu;
