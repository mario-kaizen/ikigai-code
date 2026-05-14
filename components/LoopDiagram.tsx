export function LoopDiagram() {
  return (
    <div className="relative w-full max-w-xl mx-auto my-10">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-auto"
        role="img"
        aria-labelledby="loopdiagram-title loopdiagram-desc"
      >
        <title id="loopdiagram-title">The ikigAI feedback loop</title>
        <desc id="loopdiagram-desc">
          A circular three-step diagram showing Run, Catch, and Lock as a continuous loop.
        </desc>

        <defs>
          <marker
            id="loop-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L9,5 L0,10 z" fill="var(--color-brass-dark)" />
          </marker>
        </defs>

        {/* Arrows — clockwise loop */}
        <g
          fill="none"
          stroke="var(--color-brass-dark)"
          strokeWidth="1.5"
        >
          {/* Run → Catch */}
          <path
            d="M 225 103 Q 320 135 296 227"
            markerEnd="url(#loop-arrow)"
          />
          {/* Catch → Lock */}
          <path
            d="M 271 270 Q 200 340 129 270"
            markerEnd="url(#loop-arrow)"
          />
          {/* Lock → Run */}
          <path
            d="M 104 227 Q 80 135 175 103"
            markerEnd="url(#loop-arrow)"
          />
        </g>

        {/* Run — top */}
        <g>
          <circle
            cx="200"
            cy="60"
            r="50"
            fill="var(--color-cream)"
            stroke="var(--color-brass)"
            strokeWidth="1.5"
          />
          <text
            x="200"
            y="58"
            textAnchor="middle"
            fontFamily="var(--font-display)"
            fontSize="22"
            fontWeight="700"
            fill="var(--color-forest-muted)"
            letterSpacing="0.04em"
          >
            RUN
          </text>
          <text
            x="200"
            y="78"
            textAnchor="middle"
            fontSize="9"
            fill="var(--color-stone)"
            letterSpacing="0.2em"
          >
            01 · SHIP IT
          </text>
        </g>

        {/* Catch — bottom right */}
        <g>
          <circle
            cx="321"
            cy="270"
            r="50"
            fill="var(--color-cream)"
            stroke="var(--color-brass)"
            strokeWidth="1.5"
          />
          <text
            x="321"
            y="268"
            textAnchor="middle"
            fontFamily="var(--font-display)"
            fontSize="22"
            fontWeight="700"
            fill="var(--color-forest-muted)"
            letterSpacing="0.04em"
          >
            CATCH
          </text>
          <text
            x="321"
            y="288"
            textAnchor="middle"
            fontSize="9"
            fill="var(--color-stone)"
            letterSpacing="0.2em"
          >
            02 · SEE IT
          </text>
        </g>

        {/* Lock — bottom left */}
        <g>
          <circle
            cx="79"
            cy="270"
            r="50"
            fill="var(--color-cream)"
            stroke="var(--color-brass)"
            strokeWidth="1.5"
          />
          <text
            x="79"
            y="268"
            textAnchor="middle"
            fontFamily="var(--font-display)"
            fontSize="22"
            fontWeight="700"
            fill="var(--color-forest-muted)"
            letterSpacing="0.04em"
          >
            LOCK
          </text>
          <text
            x="79"
            y="288"
            textAnchor="middle"
            fontSize="9"
            fill="var(--color-stone)"
            letterSpacing="0.2em"
          >
            03 · ENCODE IT
          </text>
        </g>

        {/* Centre label */}
        <text
          x="200"
          y="190"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="11"
          fill="var(--color-brass-dark)"
          letterSpacing="0.3em"
          fontWeight="600"
        >
          THE LOOP
        </text>
        <text
          x="200"
          y="210"
          textAnchor="middle"
          fontSize="11"
          fill="var(--color-stone)"
          fontStyle="italic"
        >
          compounds forever
        </text>
      </svg>
    </div>
  );
}
