interface ListProps {
  items: string[];
  title: string;
  value: string;
  valueChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const List = ({ items, title, value, valueChange }: ListProps) => {
  return (
    <select value={value} onChange={valueChange}>
      <option value="">{title}</option>
      {items.map((item) => (
        <option key={"value" + item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default List;
