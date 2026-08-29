import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        backgroundColor: '#0D1113',
        color: '#EDF1F1',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 32,
          color: '#2FBDAE',
        }}
      >
        <span style={{ marginRight: 12 }}>VC/</span>
        <span style={{ color: '#9AA6AA' }}>{site.brand}</span>
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 40,
          fontSize: 60,
          fontWeight: 700,
          maxWidth: 900,
        }}
      >
        {site.tagline}
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 32,
          fontSize: 26,
          color: '#9AA6AA',
        }}
      >
        {site.name} — {site.role}
      </div>
    </div>,
    { ...size },
  )
}
