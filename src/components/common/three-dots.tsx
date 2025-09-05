import { useState, useEffect } from "react";

interface IProps {
  size?: number;
  animate?: boolean;
}

const ThreeDots = (props: IProps) => {
  const { size = 2, animate = false } = props;
  const colors = ["bg-red-600", "bg-yellow-600", "bg-green-600"];
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % colors.length);
    }, 500); // Thay đổi dot sáng mỗi 300ms

    return () => clearInterval(interval);
  }, [animate, colors.length]);

  const dotSize = `${size * 0.25}rem`;

  return (
    <div className="flex items-center gap-1.5">
      {colors.map((color, index) => {
        const isActive = animate && index === activeDot;
        const isPrevious =
          animate && index === (activeDot - 1 + colors.length) % colors.length;

        return (
          <span
            key={`${color}-${index}`}
            className={`
              rounded-full aspect-square transition-all duration-300 ease-in-out
              ${color}
              ${isActive ? "scale-125 opacity-100 shadow-lg" : ""}
              ${isPrevious ? "scale-110 opacity-80" : ""}
              ${
                !isActive && !isPrevious && animate
                  ? "scale-100 opacity-50"
                  : ""
              }
              ${!animate ? "scale-100 opacity-100" : ""}
            `}
            style={{
              width: dotSize,
              height: dotSize,
              boxShadow: isActive
                ? `0 0 20px ${
                    color.includes("red")
                      ? "#dc2626"
                      : color.includes("yellow")
                      ? "#d97706"
                      : "#16a34a"
                  }`
                : "none",
            }}
          />
        );
      })}
    </div>
  );
};

export default ThreeDots;
