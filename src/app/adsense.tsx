'use client';

import { useEffect } from 'react';

export default function Adsense() {
  useEffect(() => {
    const script = document.createElement('script');

    script.setAttribute('crossorigin', 'anonymous');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3344265124550217';
    script.async = true;

    script.onload = function () {
      const evt = document.createEvent('Event');
      evt.initEvent('DOMContentLoaded', false, false);
      window.dispatchEvent(evt);
    };

    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
