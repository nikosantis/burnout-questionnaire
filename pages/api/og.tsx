import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge'
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const hasLocale = searchParams.has('locale')
    const text =
      hasLocale && searchParams.get('locale') === 'es'
        ? 'Cuestionario 🔥 Burnout 🔥 Laboral'
        : '🔥 Burnout 🔥 Questionnaire for Workers'
    const description =
      hasLocale && searchParams.get('locale') === 'es'
        ? 'Basado en Maslach Burnout Inventory (MBI) para medir el desgaste profesional y laboral'
        : 'Based on Maslach Burnout Inventory (MBI) to measure professional and job burnout'

    return new ImageResponse(
      (
        <div
          style={{
            background: '#0F172A',
            color: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16
          }}
        >
          <div
            style={{
              fontSize: 50,
              fontWeight: 900
            }}
          >
            {text}
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              marginBottom: 16
            }}
          >
            {description}
          </div>
          <small>Developed by Nikolas Santis | 2022</small>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        emoji: 'twemoji'
      }
    )
  } catch (error: any) {
    console.log(error.message)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}
