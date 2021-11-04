const DustBackground = () => {
  return (
    <svg width="250" height="250">
      <filter id="noise" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="5" result="noise" />

        <feDiffuseLighting in="noise" lighting-color="white" surfaceScale="2">
          <feDistantLight azimuth="60" elevation="80" />
        </feDiffuseLighting>
      </filter>
      <rect x="0" y="0" width="100%" height="100%" filter="url(#noise)" fill="none" />
    </svg>
  );
};

export default DustBackground;
