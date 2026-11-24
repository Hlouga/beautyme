import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FAF8FC',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 'bold',
            color: '#8600B3',
            marginBottom: 24,
          }}
        >
          BeautyMe.
        </div>
        <div
          style={{
            fontSize: 48,
            color: '#1A1A2E',
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Discover local creatives and beauty pros.
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            background: '#8600B3',
          }}
        />
      </div>
    ),
    { ...size }
  );
}