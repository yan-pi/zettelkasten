import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Yan Fernandes';
  const date = searchParams.get('date') || true;
  const tagsParam = searchParams.get('tags') || '';
  const tags = tagsParam ? tagsParam.split(',') : [];

  // Fetch fonts only if necessary
  const fontPromises = [];
  const [interBoldFontData, interMediumFontData] = await Promise.all(fontPromises);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          backgroundColor: '#383838',
          height: '100%',
          width: '100%',
          padding: '6% 8%',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p
              style={{ fontSize: '72px', fontWeight: 700, marginTop: 4, color: 'whitesmoke' }}
            >
              {title}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            {tags.length > 0 ? (
              <p style={{ display: 'flex', gap: 8, color: 'whitesmoke' }}>
                {tags.map((tag, i) => (
                  <span key={i}>#{tag}</span>
                ))}
              </p>
            ) : null}
            {date ? <p style={{ color: 'whitesmoke' }}>{date}</p> : null}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}