import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const lang = requestHeaders.get('Accept-Language')
  const locale = lang?.split(',')[0].split('-')[0]

  if (request.nextUrl.pathname.startsWith('/en')) {
    if (locale === 'es') {
      const url = request.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
  } else {
    if (locale === 'en') {
      const url = request.nextUrl.clone()
      url.pathname = '/en'
      return NextResponse.redirect(url)
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico|site.webmanifest).*)']
}
