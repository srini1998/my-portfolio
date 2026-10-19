import { useId } from "react";
export function TechnicalArt({ kind = "database" }: { kind?: string }) {
  const gridId = useId();
  return (
    <svg
      className="technical-art"
      viewBox="0 0 600 420"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={gridId}
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <path d="M30 0H0V30" stroke="currentColor" strokeOpacity=".07" />
        </pattern>
      </defs>
      <rect width="600" height="420" fill={`url(#${gridId})`} />
      <g stroke="currentColor" strokeWidth="1.5">
        {kind === "database" ? (
          <>
            <ellipse cx="300" cy="120" rx="120" ry="43" />
            <path d="M180 120v170c0 57 240 57 240 0V120M180 178c0 57 240 57 240 0M180 234c0 57 240 57 240 0" />
            <path
              d="M60 210h100m280 0h100M300 40v32m0 270v38"
              strokeDasharray="4 6"
            />
            <circle cx="80" cy="210" r="8" />
            <circle cx="520" cy="210" r="8" />
          </>
        ) : kind === "globe" ? (
          <>
            <circle cx="300" cy="210" r="142" />
            <ellipse cx="300" cy="210" rx="65" ry="142" />
            <ellipse cx="300" cy="210" rx="142" ry="50" />
            <path d="M158 210h284M300 68v284M180 135h240M180 285h240" />
            <circle cx="350" cy="170" r="8" fill="currentColor" />
            <circle cx="350" cy="170" r="26" strokeDasharray="3 6" />
          </>
        ) : kind === "signal" ? (
          <>
            <path
              d="M45 230h100l35-90 55 160 60-200 55 150 35-60 30 40h140"
              strokeWidth="3"
            />
            {[120, 240, 360, 480].map((x) => (
              <path key={x} d={`M${x} 70v280`} strokeDasharray="3 9" />
            ))}
            <circle cx="295" cy="100" r="10" fill="currentColor" />
          </>
        ) : kind === "game" ? (
          <>
            <path
              d="M150 75h300v270H150zM210 75v90h120v60h60M150 225h90v60h90v60M270 75v30h120v60h60M210 345v-30M450 285h-60v60"
              strokeWidth="8"
            />
            <path
              d="M175 100v95h95v60h85v60h65"
              strokeDasharray="6 6"
              strokeWidth="3"
            />
            <circle cx="175" cy="100" r="9" fill="currentColor" />
            <path d="m405 305 15 10-15 10" />
          </>
        ) : kind === "code" ? (
          <>
            <rect x="110" y="70" width="380" height="280" rx="12" />
            <path
              d="M110 110h380M145 90h6m12 0h6m12 0h6M230 170l-45 40 45 40M370 170l45 40-45 40M325 150l-50 120"
              strokeWidth="4"
            />
            <path d="M155 305h130m30 0h130" strokeOpacity=".3" />
          </>
        ) : kind === "data" ? (
          <>
            {[0, 1, 2, 3, 4].map((n) => (
              <g key={n}>
                <rect
                  x={125 + n * 70}
                  y={290 - n * 36}
                  width="40"
                  height={40 + n * 36}
                />
                <path d={`M90 ${110 + n * 50}h420`} strokeOpacity=".14" />
              </g>
            ))}
            <path d="M90 80v260h420" />
            <path d="m130 210 70-30 70 15 70-65 100-40" strokeWidth="3" />
          </>
        ) : (
          <>
            {[140, 300, 460].map((x, i) => (
              <g key={x}>
                {[130, 210, 290].map((y) => (
                  <g key={y}>
                    <circle
                      cx={x}
                      cy={y}
                      r="16"
                      fill={i === 1 ? "currentColor" : "none"}
                    />
                    {i < 2 &&
                      [130, 210, 290].map((y2) => (
                        <path
                          key={y2}
                          d={`M${x + 16} ${y}L${x + 144} ${y2}`}
                          strokeOpacity=".25"
                        />
                      ))}
                  </g>
                ))}
              </g>
            ))}
          </>
        )}
      </g>
      <text
        x="32"
        y="392"
        fill="currentColor"
        fontSize="11"
        fontFamily="monospace"
        opacity=".5"
      >
        SV / SYSTEM STUDY
      </text>
      <path d="M544 32h24v24M32 56V32h24" stroke="currentColor" />
    </svg>
  );
}
