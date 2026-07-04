"use client";

interface HeatmapProps {
  data: number[];
}

export default function Heatmap({ data }: HeatmapProps) {
  const getColor = (value: number) => {
    if (value === 0) return "bg-[#1c2434]";
    if (value === 1) return "bg-cyan-900";
    if (value === 2) return "bg-cyan-700";
    if (value === 3) return "bg-cyan-500";
    return "bg-cyan-300";
  };

  return (
    <div className="overflow-x-auto">
      <div
        className="
        grid
        grid-flow-col
        grid-rows-7
        gap-[4px]
        w-max
        "
      >
        {data.map((value, index) => (
          <div
            key={index}
            className={`
              w-3
              h-3
              rounded-sm
              transition
              hover:scale-125
              ${getColor(value)}
            `}
            title={`${value} contributions`}
          />
        ))}
      </div>
    </div>
  );
}