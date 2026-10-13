type EditorialOrnamentProps = {
  variant?: 'mark' | 'divider'
  className?: string
  color?: string
}

const EditorialOrnament = ({
  variant = 'mark',
  className = '',
  color = 'var(--accent)',
}: EditorialOrnamentProps) => {
  if (variant === 'divider') {
    return (
      <svg
        className={className}
        viewBox="0 0 120 20"
        width="120"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        style={{ color }}
      >
        <g
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M1 10H43" />
          <path d="M77 10H119" />

          <path d="M60 2L68 10L60 18L52 10Z" />
          <path d="M60 5.5L64.5 10L60 14.5L55.5 10Z" />

          <path d="M46 10H50" />
          <path d="M70 10H74" />

          <path d="M48 6L52 10L48 14" />
          <path d="M72 6L68 10L72 14" />

          <path d="M43 7V13" />
          <path d="M77 7V13" />
        </g>

        <path
          d="M60 8L62 10L60 12L58 10Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{ color }}
    >
      <g
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path d="M8 1.5L14.5 8L8 14.5L1.5 8Z" />
        <path d="M8 4.5L11.5 8L8 11.5L4.5 8Z" />
      </g>

      <path d="M8 6.3L9.7 8L8 9.7L6.3 8Z" fill="currentColor" />
    </svg>
  )
}

export default EditorialOrnament
