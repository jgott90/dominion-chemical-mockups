import React from "react";

const width = 625;
const height = 420;
const xC = width / 2;

// Adjusted for a more open "waist" and more color above/below letters
const centerTopY = 105;
const centerBottomY = 315;

export default function LogoSVG({ widthPx = 120, heightPx = 81 }) {
    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            width={widthPx}
            height={heightPx}
            aria-labelledby="logoTitle logoDesc"
            role="img"
            style={{ display: "block", maxWidth: "100%", height: "auto" }}
            focusable="false"
        >
            <title id="logoTitle">Dominion Chemical Logo</title>
            <desc id="logoDesc">
                Bowtie-shaped logo with blue left and black right, D and C letters. Each colored region is a trapezoid and the center "waist" is proportionally pinched, matching the reference.
            </desc>
            {/* Left (Blue) Trapezoid */}
            <polygon
                fill="#305CDE"
                points={[
                    `0,0`,                        // top left
                    `${xC},${centerTopY}`,        // top center
                    `${xC},${centerBottomY}`,     // bottom center
                    `0,${height}`                 // bottom left
                ].join(" ")}
            />
            {/* Right (Black) Trapezoid */}
            <polygon
                fill="#000"
                points={[
                    `${xC},${centerTopY}`,        // top center
                    `${width},0`,                 // top right
                    `${width},${height}`,         // bottom right
                    `${xC},${centerBottomY}`      // bottom center
                ].join(" ")}
            />
            {/* Center vertical white separator */}
            <rect
                x={xC - 2}
                y={centerTopY}
                width={4}
                height={centerBottomY - centerTopY}
                fill="#fff"
            />
            {/* D */}
            <text
                x={xC * 0.45}
                y={height / 2 + 6}
                fontFamily="'Georgia', 'Times New Roman', Times, serif"
                fontWeight="bold"
                fontSize={height * 0.50}
                fill="#fff"
                textAnchor="middle"
                dominantBaseline="middle"
                aria-hidden="true"
            >
                D
            </text>
            {/* C */}
            <text
                x={xC + xC * 0.45}
                y={height / 2 + 6}
                fontFamily="'Georgia', 'Times New Roman', Times, serif"
                fontWeight="bold"
                fontSize={height * 0.50}
                fill="#fff"
                textAnchor="middle"
                dominantBaseline="middle"
                aria-hidden="true"
            >
                C
            </text>
        </svg>
    );
}