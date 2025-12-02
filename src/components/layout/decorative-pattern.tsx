export function DecorativeElements() {
  return (
    <>
      <div className="top-20 left-10 fixed bg-accent/5 blur-3xl rounded-full w-32 h-32 pointer-events-none" />
      <div className="top-40 right-20 fixed bg-accent/10 blur-3xl rounded-full w-40 h-40 animate-pulse pointer-events-none" />

      <div className="bottom-20 left-1/4 fixed bg-accent/5 blur-3xl rounded-full w-48 h-48 pointer-events-none" />
      <div className="right-1/3 bottom-40 fixed bg-accent/10 blur-3xl rounded-full w-36 h-36 animate-pulse pointer-events-none" />

      <svg
        className="top-0 left-0 fixed opacity-10 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title aria-disabled>Grid Pattern</title>
        <defs>
          <pattern
            height="32"
            id="grid"
            patternUnits="userSpaceOnUse"
            width="32"
          >
            <path
              className="text-foreground"
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect fill="url(#grid)" height="100%" width="100%" />
      </svg>
    </>
  )
}
