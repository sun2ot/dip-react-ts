import Jump from "./Button/Jump";
import text from "./assets/static_text";

const Menu = () => {
  return (
    <div  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "10px" }}>
      {Array.from({ length: 56 }, (_, i) => (
        <Jump key={i} path={`/${i + 1}`}>
          {text[i + 1 as keyof typeof text].head}
        </Jump>
      ))}
    </div>
  );
};

export default Menu;
