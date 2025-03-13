'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    axeptioSettings: {
      clientId: string;
      cookiesVersion: string;
    };
  }
}

export default function Axeptio() {
  useEffect(() => {
    window.axeptioSettings = {
      clientId: process.env.NEXT_PUBLIC_AXEPTIO_CLIENT_ID || '',
      cookiesVersion: process.env.NEXT_PUBLIC_AXEPTIO_COOKIES_VERSION || ''
    };
    (function (d: Document, s: string) {
      const t = d.getElementsByTagName(s)[0];
      const e = d.createElement(s) as HTMLScriptElement;
      e.async = true;
      e.src = '//static.axept.io/sdk.js';
      t.parentNode?.insertBefore(e, t);
    })(document, 'script');
  }, []);

  return null;
}
