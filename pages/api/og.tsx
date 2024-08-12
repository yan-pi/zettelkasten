import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const description = searchParams.get('description') || '';
  const title = searchParams.get('title') || 'Yan Fernandes';

  const [interBoldFontData, interMediumFontData] = await Promise.all([
    fetch(new URL('../../public/Inter_28pt-Bold.ttf', import.meta.url)).then((res) => res.arrayBuffer()),
    fetch(new URL('../../public/Inter_28pt-Medium.ttf', import.meta.url)).then((res) => res.arrayBuffer()),
  ]);

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
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
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
                fontFamily: 'Inter-Bold',
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
                fontFamily: 'Inter-Medium',
              }}
            >
              {description}
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: 100,
            color: 'black',
            width: '100%',
            height: '100%',
            padding: '50px 200px',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          ⚡
        </div>
        <div
          style={{
            color: 'white',
            alignSelf: 'flex-end',
          
          }}
        >
          2024 Yan Fernandes 
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter-Bold',
          data: interBoldFontData,
        },
        {
          name: 'Inter-Medium',
          data: interMediumFontData,
        },
      ],
    }
  );
}
