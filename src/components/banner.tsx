import { useEffect } from 'react';

type WindowWithAds = Window & typeof globalThis & {
  adsbygoogle: object[];
};

export const Banner = () => {
  useEffect(() => {
    const loadAdsenseScript = () => {
      const w = window as WindowWithAds;
      if (!document.querySelector('script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3344265124550217';
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);

        script.onload = () => {
          (w.adsbygoogle = w.adsbygoogle || []).push({});
        };
      } else {
        (w.adsbygoogle = w.adsbygoogle || []).push({});
      }
    };

    loadAdsenseScript();
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-3344265124550217"
      data-ad-slot="9812931283"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};
