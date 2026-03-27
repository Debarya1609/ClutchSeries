import { useEffect, useState } from "react";

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const ProgressCircle = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <div className="flex flex-col gap-5 lg:max-w-xs lg:pb-4 mt-8 md:mt-0">
      {/* SVG Circle */}
      <div className="flex items-center gap-6">
        <div className="relative shrink-0">
          <svg width="120" height="120" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r={RADIUS}
              fill="none"
              stroke="hsl(var(--foreground) / 0.15)"
              strokeWidth="3"
            />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r={RADIUS}
              fill="none"
              stroke="hsl(var(--foreground))"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
              transform="rotate(-90 60 60)"
              className="transition-all duration-1000 ease-out"
            />
            {/* Center text */}
            <text
              x="60"
              y="60"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="hsl(var(--foreground))"
              fontSize="22"
              fontWeight="700"
              fontFamily="Geist, Inter, sans-serif"
              className="tracking-wider"
            >
              100%
            </text>
          </svg>
        </div>
      </div>

      {/* Description */}
      <p className="text-foreground/70 text-sm leading-relaxed">
        Pushing the limits of competitive gaming with high-stakes tournaments and unparalleled broadcast quality.
      </p>
    </div>
  );
};
