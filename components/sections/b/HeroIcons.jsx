export function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 7H11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M7.8 3.5L11.5 7L7.8 10.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L20 5V11C20 16 16.8 20.4 12 22C7.2 20.4 4 16 4 11V5L12 2Z"
        fill="url(#shieldGrad)"
      />
      <path
        d="M12 7.2C13.95 7.2 15.54 8.79 15.54 10.74C15.54 12.13 14.75 13.36 13.59 13.95V16.1H10.41V13.95C9.25 13.36 8.46 12.13 8.46 10.74C8.46 8.79 10.05 7.2 12 7.2Z"
        fill="white"
        fillOpacity="0.92"
      />
      <defs>
        <linearGradient id="shieldGrad" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D2FF" />
          <stop offset="1" stopColor="#0A6CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function EthereumIcon() {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 18 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 0L0 14L9 9.3L18 14L9 0Z" fill="url(#ethTop)" />
      <path d="M9 10.9L0 15.8L9 28L18 15.8L9 10.9Z" fill="url(#ethBottom)" />
      <defs>
        <linearGradient id="ethTop" x1="0" y1="0" x2="18" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="#79C7FF" />
          <stop offset="1" stopColor="#2A7FFF" />
        </linearGradient>
        <linearGradient id="ethBottom" x1="0" y1="15" x2="18" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6AE6FF" />
          <stop offset="1" stopColor="#305CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BlockIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L20 6.5V17.5L12 22L4 17.5V6.5L12 2Z"
        stroke="url(#blockGrad)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 2V22"
        stroke="url(#blockGrad)"
        strokeWidth="1.6"
      />
      <path
        d="M4 6.5L12 11L20 6.5"
        stroke="url(#blockGrad)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 17.5L12 13L20 17.5"
        stroke="url(#blockGrad)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="blockGrad" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D2FF" />
          <stop offset="1" stopColor="#0A6CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}