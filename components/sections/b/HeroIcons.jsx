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

export function BankIcon() {
  return (
    <svg style={{marginLeft:'2px', marginTop:'-4px !important', lineHeight:'47px'}} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 7L8 14H34L21 7Z" stroke="#0cc0df" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M11 17H31" stroke="#0cc0df" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M13 17V29" stroke="#0cc0df" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M21 17V29" stroke="#0cc0df" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M29 17V29" stroke="#0cc0df" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M9 32H33" stroke="#0cc0df" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M12 29H30" stroke="#0cc0df" stroke-width="2.2" stroke-linecap="round"/>
</svg>

  );    
  }

  export function RocketIcon() {
  return (
    <svg style={{marginLeft:'0px', marginTop:'-3px',   lineHeight:'47px'}}
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.8 7.5C20.6 9.2 16.5 13.2 14.5 19.3L22.7 27.5C28.8 25.5 32.8 21.4 34.5 15.2C35.1 13 35 10.5 34.2 7.8C31.5 7 29 6.9 26.8 7.5Z"
        stroke="#0cc0df"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M24.3 13.8C25.4 12.7 27.2 12.7 28.3 13.8C29.4 14.9 29.4 16.7 28.3 17.8C27.2 18.9 25.4 18.9 24.3 17.8C23.2 16.7 23.2 14.9 24.3 13.8Z"
        stroke="#0cc0df"
        strokeWidth="2.2"
      />
      <path
        d="M14.5 19.3L9.6 20.8L7.5 27.2L16.8 25.7"
        stroke="#0cc0df"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M22.7 27.5L21.2 34.5L27.6 32.4L29.1 27.5"
        stroke="#0cc0df"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M15.4 28.1L10.2 33.3"
        stroke="#0cc0df"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M18.7 31.4L15.4 34.7"
        stroke="#0cc0df"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

  export function ChartIcon() { 
    return (
      <svg style={{marginLeft:'0px', marginTop:'-5px',   lineHeight:'44px'}} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 32H34" stroke="#0cc0df" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M11 32V25" stroke="#0cc0df" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M18 32V21" stroke="#0cc0df" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M25 32V16" stroke="#0cc0df" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M32 32V11" stroke="#0cc0df" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M10 22L17 18L23 20L33 10" stroke="#0cc0df" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M27.5 10H33V15.5" stroke="#0cc0df" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    );
  }

  export function FlagIcon() {
  return (
    <svg style={{marginLeft:'2px',   lineHeight:'49px'}}
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 33V8"
        stroke="#0cc0df"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M15 9H29.5L26.8 15L29.5 21H15V9Z"
        stroke="#0cc0df"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon2() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 6L30.5 10V18.8C30.5 25.6 26.2 31.1 21 33.5C15.8 31.1 11.5 25.6 11.5 18.8V10L21 6Z"
        stroke="#3D63DD"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      <path
        d="M21 6V33.5"
        stroke="#3D63DD"
        strokeWidth="2.2"
        opacity="0.15"
      />
    </svg>
  );
}

export function ChartIcon2() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 31H33"
        stroke="#3D63DD"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <rect
        x="11"
        y="22"
        width="4"
        height="9"
        rx="1"
        stroke="#3D63DD"
        strokeWidth="2"
      />

      <rect
        x="18"
        y="17"
        width="4"
        height="14"
        rx="1"
        stroke="#3D63DD"
        strokeWidth="2"
      />

      <rect
        x="25"
        y="11"
        width="4"
        height="20"
        rx="1"
        stroke="#3D63DD"
        strokeWidth="2"
      />

      <path
        d="M10 14L16 11L22 14L29 8"
        stroke="#3D63DD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function LockIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12"
        y="18"
        width="18"
        height="14"
        rx="2"
        stroke="#3D63DD"
        strokeWidth="2.2"
      />

      <path
        d="M16 18V14.5C16 11.5 18.2 9 21 9C23.8 9 26 11.5 26 14.5V18"
        stroke="#3D63DD"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <circle
        cx="21"
        cy="24"
        r="1.6"
        fill="#3D63DD"
      />

      <path
        d="M21 25.6V28"
        stroke="#3D63DD"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}