import { ImageResponse } from 'next/og';
import { getProviderBySlug } from '@/db/queries/providers';

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = await getProviderBySlug(slug);

  const displayName = profile?.displayName || 'BeautyMe Provider';
  const category = profile?.category
    ? profile.category.replace('_', ' ')
    : 'Creative Professional';
  const city = profile?.city || 'South Africa';

  return new ImageResponse(
    (
      // We use standard inline CSS because ImageResponse doesn't support Tailwind
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
        {/* Top Left Logo */}
        <div
          style={{
            position: 'absolute',
            top: 60,
            left: 60,
            fontSize: 48,
            fontWeight: 'bold',
            color: '#8600B3',
          }}
        >
          BeautyMe.
        </div>

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 90,
              fontWeight: 'bold',
              color: '#1A1A2E',
              marginBottom: 24,
              lineHeight: 1.1,
            }}
          >
            {displayName}
          </div>
          <div
            style={{
              fontSize: 48,
              color: '#666',
              textTransform: 'capitalize',
            }}
          >
            {category} • {city}
          </div>
        </div>

        {/* Decorative Bottom Bar */}
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
    {
      ...size,
    }
  );
}