import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const description = searchParams.get('description') || '';
  const title = searchParams.get('title') || 'Yan Fernandes';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          padding: '27px 32px',
          background: '#2B2B2B',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          // fontFamily: inter.style.fontFamily,
        }}
      >
        <div
          style={{
            width: '519px',
            height: '124px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: '64px',
              fontWeight: '700',
              wordWrap: 'break-word',
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: 'white',
              fontSize: '32px',
              fontWeight: '500',
              wordWrap: 'break-word',
            }}
          >
            {description}
          </div>
        </div>
        <div style={{ width: '128px', height: '128px' }}>
          {/* <img src={logoUrl} alt="my logo" width="128" height="128" /> */}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
