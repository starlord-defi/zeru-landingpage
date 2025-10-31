'use client';

import { motion } from 'framer-motion';
import React from 'react';

// External logo URLs provided — include names for clarity.
type PartnerLogo = { name: string; url: string };
const PARTNER_LOGOS: PartnerLogo[] = [
  {
    name: 'EigenCloud',
    url: 'https://blog.eigencloud.xyz/content/images/2025/09/EigenCloud-Logo-3.png',
  },
  {
    name: 'Covalent',
    url: 'https://imagedelivery.net/IEMzXmjRvW0g933AN5ejrA/wwwnotionso-image-yt3ggphtcom-ytc-aidro_kee3p0gy1ygogqwyfscxdit7r7marz-3slqd_ghojrcnws800-c-k-c0x00ffffff-no-rj/public',
  },
  {
    name: 'Google Cloud',
    url: 'https://static.wikia.nocookie.net/logopedia/images/f/f4/GCloud_-_%281%29.svg/revision/latest/scale-to-width-down/250?cb=20190828135105',
  },
  { name: 'Sentient', url: 'https://cryptocurrencyjobs.co/startups/assets/logos/sentient.jpg' },
  {
    name: 'Kelp',
    url: 'https://play-lh.googleusercontent.com/scjF-2_AoH0hi03SKPVYGvpyy8ZSFIVMj1uScDae3RERf_anSvd0rVgQLzvSTPzpqtyi',
  },
  {
    name: 'Celo',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9c2Almn3cdkG4uF5cjKfFJ5-KKf-ZoP-_g&s',
  },
  { name: 'Base', url: 'https://avatars.githubusercontent.com/u/108554348?s=200&v=4' },
  {
    name: 'Ethereum',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7R6zwoYqM1vbg4ganJyri-SC5t1pWq7zh4w&s',
  },
  {
    name: 'Etherscan',
    url: 'https://pbs.twimg.com/profile_images/1947952831568482304/GkEPdf-r_400x400.jpg',
  },
  {
    name: 'Imua',
    url: 'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/ba3790d40c3b40cdab7df296c6b5dcbb?ik-sanitizeSvg=true',
  },
  {
    name: 'Axelar',
    url: 'https://moralis.com/wp-content/uploads/web3wiki/145-axelar/637e69a93f543f82866bd4fd_qqODFzjN_e4tFCJm9d76rAqFzae9qOfEQafbJ17e5As.jpeg',
  },
  {
    name: 'Katana',
    url: 'https://pbs.twimg.com/profile_images/1927769809216843776/IJexy9VY_400x400.jpg',
  },
  {
    name: 'Gaia',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQGs0TLrbwhkYw/company-logo_200_200/company-logo_200_200/0/1724731744225/gaianet_ai_logo?e=2147483647&v=beta&t=damv7c0t_NMfK0SthUO0GA0zfNH7G-LJ5GzO2C5zAhg',
  },
  {
    name: 'Predicate',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQEX7KnB4HBrGw/company-logo_200_200/company-logo_200_200/0/1728997170041/predicatenetwork_logo?e=2147483647&v=beta&t=Tsq4PrfqBOBvwmqMVPtrjsmgmAYsY5TQfsF2ASSGviw',
  },
  {
    name: 'JokeRace',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYIGx4LGN3pivVT_ckOljVtKu5EJHX6j60w&s',
  },
  {
    name: 'Self',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkUpO6B46jyoDvcVjzkS0U71Yl17FxeXlyrGtiz7FuXFFXqFQXKhfuTxsjP6XhUlwhUM&usqp=CAU',
  },
  {
    name: 'Polygon',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Polygon_Icon.svg/1200px-Polygon_Icon.svg.png',
  },
  {
    name: 'BNB',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVQl3k2_pnTREpCeAXPyB5wxktuUPXjmBoQ&s',
  },
  {
    name: 'EtherFi',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9tUY39T99WZsmFymPzYwb_bdHpDtXStJGKA&s',
  },
  {
    name: 'Renzo',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRdwkb0JnACnYpCLm03tiPj3FVi4nmeALVcA&s',
  },
];

export default function PartnershipsSection() {
  const row1 = PARTNER_LOGOS;
  const row2 = [...PARTNER_LOGOS].reverse();
  const row3 = PARTNER_LOGOS;

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-9xl md:px-4 px-0">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium">
              Believe Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold text-primary mb-12"
          >
            Partnerships <br />
            and
            <span className="text-cta"> Integrations</span>
          </motion.h2>
        </div>

        <div className="space-y-8 md:space-y-12 md:pb-12">
          <MarqueeRow images={row1} direction="right" speedSec={28} />
          <MarqueeRow images={row2} direction="left" speedSec={28} />
          <MarqueeRow images={row3} direction="right" speedSec={28} />
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

function MarqueeRow({
  images,
  direction,
  speedSec = 24,
}: {
  images: PartnerLogo[];
  direction: 'left' | 'right';
  speedSec?: number;
}) {
  const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';
  const animationStyle = {
    animation: `${animationName} ${speedSec}s linear infinite`,
  } as React.CSSProperties;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex w-max will-change-transform" style={animationStyle}>
        {/* duplicate content twice for a seamless loop; keep blocks flex-none and butt against each other */}
        <LogoStrip images={images} />
        <LogoStrip images={images} ariaHidden />
      </div>
    </div>
  );
}

function LogoStrip({
  images,
  ariaHidden = false,
}: {
  images: PartnerLogo[];
  ariaHidden?: boolean;
}) {
  return (
    <div className="flex items-center gap-8 md:gap-12 px-4 flex-none">
      {images.map((p, i) => (
        <img
          key={`${p.name}-${i}`}
          src={p.url}
          alt={p.name}
          width={64}
          height={64}
          className="h-12 w-12 md:h-14 md:w-14 rounded-full object-contain opacity-90 hover:opacity-100 transition-opacity shrink-0"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          aria-hidden={ariaHidden}
          title={p.name}
        />
      ))}
    </div>
  );
}

// 'use client';

// import { motion } from 'framer-motion';
// import { useRef } from 'react';
// import Image from 'next/image';

// export default function PartnershipsSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const marqueeTime = 30;

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-white py-24 min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       <div className="px-0">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-6"
//           >
//             <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium">
//               Believe Us
//             </span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-3xl md:text-5xl font-semibold text-primary mb-10"
//           >
//             Partnerships <br />
//             and
//             <span className="text-cta"> Integrations</span>
//           </motion.h2>
//         </div>

//         {/* Partners Marquee */}
//         <div className="relative">
//           {/* First Row - Left to Right */}
//           <div className="mb-10 md:mb-12 overflow-hidden">
//             <motion.div
//               className="flex items-center space-x-8"
//               animate={{
//                 x: ['-100%', '0%'],
//               }}
//               transition={{
//                 duration: marqueeTime,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//             >
//               {/* Duplicate the image multiple times for seamless loop */}
//               {[...Array(4)].map((_, index) => (
//                 <div key={index} className="flex-shrink-0">
//                   <Image
//                     src="/images/partners/partners.png"
//                     alt="Partners and Integrations"
//                     width={1200}
//                     height={120}
//                     className="h-12 md:h-14 w-auto object-contain"
//                   />
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Second Row - Right to Left */}
//           <div className="mb-10 md:mb-12 overflow-hidden">
//             <motion.div
//               className="flex items-center space-x-8"
//               animate={{
//                 x: ['0%', '-100%'],
//               }}
//               transition={{
//                 duration: marqueeTime,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//             >
//               {/* Duplicate the image multiple times for seamless loop */}
//               {[...Array(4)].map((_, index) => (
//                 <div key={index} className="flex-shrink-0">
//                   <Image
//                     src="/images/partners/partners.png"
//                     alt="Partners and Integrations"
//                     width={1200}
//                     height={120}
//                     className="h-12 md:h-14 w-auto object-contain"
//                   />
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Third Row - Left to Right */}
//           <div className="mb-10 md:mb-12 overflow-hidden">
//             <motion.div
//               className="flex items-center space-x-8"
//               animate={{
//                 x: ['-100%', '0%'],
//               }}
//               transition={{
//                 duration: marqueeTime,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//             >
//               {/* Duplicate the image multiple times for seamless loop */}
//               {[...Array(4)].map((_, index) => (
//                 <div key={index} className="flex-shrink-0">
//                   <Image
//                     src="/images/partners/partners.png"
//                     alt="Partners and Integrations"
//                     width={1200}
//                     height={120}
//                     className="h-12 md:h-14 w-auto object-contain"
//                   />
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
