import localFont from 'next/font/local'

export  const tasaOrbiter = localFont({
  src: [
    {
      path: '../../public/fonts/tasa-orbiter/TASAOrbiter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/tasa-orbiter/TASAOrbiter-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/tasa-orbiter/TASAOrbiter-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/tasa-orbiter/TASAOrbiter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/tasa-orbiter/TASAOrbiter-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-tasa-orbiter',
  display: 'swap',
})

export default tasaOrbiter

