import { useEffect, useRef } from 'react';

export default function Partners() {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      (ul.nextSibling as Element)?.setAttribute('aria-hidden', 'true');
    }
  }, []);

  const logos = [
    {
      alt: 'Transistor',
      src: 'https://www.okruhlystol.sk/files/img/logo_ebiz_big-300x126.png',
      width: 258,
      height: 148,
    },
    {
      alt: 'Reform',
      src: 'https://www.okruhlystol.sk/files/img/umb_logo_300.png',
      width: 248,
      height: 148,
    },
    {
      alt: 'Tuple',
      src: 'https://www.okruhlystol.sk/files/img/vsmu_logo_cierne_vsmu2.png?w=300',
      width: 248,
      height: 148,
    },
    {
      alt: 'SavvyCal',
      src: 'https://www.okruhlystol.sk/files/img/stentors_logo.png?w=300',
      width: 248,
      height: 148,
    },
    {
      alt: 'Statamic',
      src: 'https://www.okruhlystol.sk/files/img/wolters_kulwer_logo.png?w=300',
      width: 248,
      height: 148,
    },
    {
      alt: 'SavvyCal',
      src: 'https://www.okruhlystol.sk/files/img/skalica_erb.png?w=300',
      width: 248,
      height: 148,
    },
    {
      alt: 'Statamic',
      src: 'https://www.okruhlystol.sk/files/img/erb.jpg',
      width: 248,
      height: 148,
    },
    {
      alt: 'Statamic',
      src: 'https://www.okruhlystol.sk/files/img/erb_mesto_zilina_300.png',
      width: 248,
      height: 148,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32" id="partners">
      <div className="mx-auto max-w-full px-12 lg:px-8">
        <h2 className="text-4xl text-center font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Naši partneri
        </h2>
        <div className="overflow-hidden">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
              ref={logosRef}
              className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll"
            >
              {logos.map((logo, index) => (
                <li key={index}>
                  <img
                    alt={logo.alt}
                    src={logo.src}
                    width={logo.width}
                    height={logo.height}
                    className="inline-block max-h-24 object-contain transition-transform transform hover:scale-105"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
