interface IProps {
  size: number;
}
const ThreeDots = (props: IProps) => {
  const { size = 2 } = props;
  const colors = ["red", "yellow", "green"];
  return (
    <div className="flex items-center gap-1.5">
      {colors.map((color) => (
        <span
          key={color}
          className={`rounded-full w-${size} aspect-square bg-${color}-600`}
        ></span>
      ))}
    </div>
  );
};

export default ThreeDots;
