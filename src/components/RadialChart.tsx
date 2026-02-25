const polarToCartesian = (cx: number, cy: number, r: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: cx + (r * Math.cos(angleInRadians)),
        y: cy + (r * Math.sin(angleInRadians))
    };
}

const describeArc = (x: number, y: number, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number) => {
    const startOuter = polarToCartesian(x, y, outerRadius, endAngle);
    const endOuter = polarToCartesian(x, y, outerRadius, startAngle);

    const startInner = innerRadius === 0 ? { x, y } : polarToCartesian(x, y, innerRadius, endAngle);
    const endInner = innerRadius === 0 ? { x, y } : polarToCartesian(x, y, innerRadius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    if (innerRadius === 0) {
        return [
            "M", startOuter.x, startOuter.y,
            "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
            "L", x, y,
            "Z"
        ].join(" ");
    }

    return [
        "M", startOuter.x, startOuter.y,
        "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
        "L", endInner.x, endInner.y,
        "A", innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y,
        "Z"
    ].join(" ");
}

export const RadialChart = () => {
    const size = 400;
    const cx = size / 2;
    const cy = size / 2;

    const ringRadii = [40, 80, 120, 160, 200];
    const segmentCount = 13;
    const angleStep = 360 / segmentCount;

    const labels = ["010", "021", "022", "031", "032", "033", "040", "050", "061", "062", "071", "081", "090"];

    // A mapping of what color to fill for each [segmentIndex, ringIndex]
    // 0: innermost, 4: outermost ring
    const getColor = (seg: number, ring: number) => {
        // Mocking the specific chart colors from the image
        if (seg === 0) { // 010
            if (ring === 0) return '#EF4444'; // Red center
            if (ring < 3) return '#FCA5A5'; // light red
            return '#10B981'; // Green outer
        }
        if (seg === 1 || seg === 2) { // 021, 022
            return ring === 4 || ring === 3 ? '#6EE7B7' : '#D1FAE5'; // greens
        }
        if (seg === 3) {
            return ring === 3 ? '#F9A8D4' : '#FCE7F3'; // pinks
        }
        if (seg === 4 || seg === 5) {
            return ring >= 2 ? '#FDE047' : '#FEF08A'; // yellows
        }

        // Everything else a shade of blue depending on ring
        const blueShades = ['#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE', '#EFF6FF'];
        return blueShades[ring];
    };

    return (
        <div className="relative w-[400px] h-[400px]">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Draw Segments (Slices) */}
                {Array.from({ length: segmentCount }).map((_, segIdx) => {
                    const startAngle = segIdx * angleStep;
                    const endAngle = (segIdx + 1) * angleStep;

                    return (
                        <g key={`slice-${segIdx}`}>
                            {ringRadii.map((outerR, ringIdx) => {
                                const innerR = ringIdx === 0 ? 0 : ringRadii[ringIdx - 1];
                                const color = getColor(segIdx, ringIdx);
                                return (
                                    <path
                                        key={`arc-${segIdx}-${ringIdx}`}
                                        d={describeArc(cx, cy, innerR, outerR, startAngle, endAngle)}
                                        fill={color}
                                        stroke="#FFFFFF"
                                        strokeWidth="1.5"
                                        className="transition-colors duration-300 hover:opacity-80 cursor-pointer"
                                    />
                                );
                            })}
                        </g>
                    );
                })}

                {/* Optional: Add Labels Outside */}
                {labels.map((label, idx) => {
                    const angle = (idx * angleStep) + (angleStep / 2);
                    const pos = polarToCartesian(cx, cy, 220, angle);

                    return (
                        <text
                            key={`label-${label}`}
                            x={pos.x}
                            y={pos.y}
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            className="text-xs font-semibold fill-gray-400"
                            fontSize="10"
                        >
                            {label}
                        </text>
                    );
                })}

                {/* Specific tooltip/label for 010 Air Law to match image exactly */}
                <g transform="translate(195, 30)">
                    <rect x="-40" y="-15" width="80" height="25" rx="5" fill="#4B5563" />
                    <text x="0" y="2" textAnchor="middle" className="fill-white text-[11px] font-bold">010 Air Law</text>
                    {/* Dotted line to center */}
                    <line x1="0" y1="10" x2="0" y2="160" stroke="#4B5563" strokeWidth="1" strokeDasharray="3 3" />
                </g>

                {/* Expanded tooltip box on the right of 010 sector */}
                <g transform="translate(250, 180)">
                    <rect x="0" y="0" width="160" height="40" rx="6" fill="#64748B" opacity="0.9" />
                    <text x="10" y="15" className="fill-white font-bold text-[12px]">010 Air Law</text>
                    <text x="10" y="28" className="fill-gray-200 text-[10px]">Seen in last 90 days: 100 questions</text>
                </g>

            </svg>
        </div>
    );
}
