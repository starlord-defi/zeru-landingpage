// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function WhatIsZPassSection() {
//   return (
//     <section id="zPass" className="relative bg-white max-w-8xl mx-auto px-4 py-24">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center md:mb-16 mb-8">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4 leading-tight"
//           >
//             What is <span className="text-cta">zPass</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-base md:text-lg text-primary/80 font-medium max-w-3xl mx-auto"
//           >
//             Your universal reputation passport to onchain privileges
//           </motion.p>
//         </div>

//         {/* Desktop Card */}
//         <div className="hidden md:block">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="relative"
//           >
//             <div
//               className="rounded-4xl py-8 px-8 flex gap-8 md:gap-12 h-full w-full max-w-6xl mx-auto -rotate-0"
//               style={{ backgroundColor: '#f6f7fc' }}
//             >
//               {/* Content */}
//               <div className="flex-1 space-y-8">
//                 {/* Title */}
//                 {/* <h3
//                   className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight"
//                   style={{ color: '#c929cb' }}
//                 >
//                   What is zPass?
//                 </h3> */}

//                 {/* Key Features */}
//                 <div className="flex flex-col justify-center items-center gap-8">
//                   <div className="flex items-start gap-3">
//                     <div
//                       className="w-2 h-2 rounded-full mt-2 shrink-0"
//                       style={{ backgroundColor: '#4fa1ce' }}
//                     ></div>
//                     <p className="text-xl font-medium" style={{ color: '#4fa1ce' }}>
//                       zPass is an NFT that represents your onchain activity score across blockchains
//                       and protocols
//                     </p>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <div
//                       className="w-2 h-2 rounded-full mt-2 shrink-0"
//                       style={{ backgroundColor: '#4fa1ce' }}
//                     ></div>
//                     <p className="text-xl font-medium" style={{ color: '#4fa1ce' }}>
//                       It unlocks boosted APR deals and exclusive partner airdrops based on your
//                       reputation.
//                     </p>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <div
//                       className="w-2 h-2 rounded-full mt-2 shrink-0"
//                       style={{ backgroundColor: '#4fa1ce' }}
//                     ></div>
//                     <p className="text-xl font-medium" style={{ color: '#4fa1ce' }}>
//                       It acts as your DeFi identity, proving credibility and participation.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Image */}
//               <div className="flex-shrink-0 w-2/5">
//                 <div className="relative aspect-square">
//                   <Image
//                     src="https://storage.googleapis.com/zeru-nft-videos/images/0xd8da6bf26964af9d7eed9e03e53415d37aa96045_image_1761748039.png"
//                     alt="zPass NFT"
//                     fill
//                     className="object-contain rounded-2xl blur-[3px]"
//                   />
//                 </div>
//                 <p className="text-sm font-medium text-center text-secondary mt-2">zPass</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Mobile Card */}
//         <div className="md:hidden">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="relative"
//           >
//             <div
//               className="rounded-4xl py-6 px-4 flex flex-col gap-6 h-full max-w-4xl mx-auto"
//               style={{ backgroundColor: '#f6f7fc' }}
//             >
//               {/* Title */}
//               {/* <h3 className="text-2xl font-semibold leading-tight" style={{ color: '#c929cb' }}>
//                 What is zPass?
//               </h3> */}

//               {/* Key Features */}
//               <div className="space-y-3">
//                 <div className="flex items-start gap-3">
//                   <div
//                     className="w-2 h-2 rounded-full mt-2 shrink-0"
//                     style={{ backgroundColor: '#4fa1ce' }}
//                   ></div>
//                   <p className="text-sm font-medium" style={{ color: '#4fa1ce' }}>
//                     zPass is an NFT that represents your onchain activity score across blockchains
//                     and protocols.
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div
//                     className="w-2 h-2 rounded-full mt-2 shrink-0"
//                     style={{ backgroundColor: '#4fa1ce' }}
//                   ></div>
//                   <p className="text-sm font-medium" style={{ color: '#4fa1ce' }}>
//                     It unlocks boosted APR deals and exclusive partner airdrops based on your
//                     reputation.
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div
//                     className="w-2 h-2 rounded-full mt-2 shrink-0"
//                     style={{ backgroundColor: '#4fa1ce' }}
//                   ></div>
//                   <p className="text-sm font-medium" style={{ color: '#4fa1ce' }}>
//                     It acts as your DeFi identity, proving credibility and participation.
//                   </p>
//                 </div>
//               </div>

//               {/* Image */}
//               <div className="flex-shrink-0 w-full">
//                 <div className="relative aspect-square max-w-xs mx-auto">
//                   <Image
//                     src="https://storage.googleapis.com/zeru-nft-videos/images/0xd8da6bf26964af9d7eed9e03e53415d37aa96045_image_1761748039.png"
//                     alt="zPass NFT"
//                     fill
//                     className="object-contain rounded-2xl blur-[3px]"
//                   />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const reputationCards = [
  {
    id: 1,
    badge: '1',
    title:
      'zPass is an NFT that represents your onchain activity score across blockchains and protocols',
    bgColor: 'bg-[#f4f1fb]',
    textColor: 'text-cta',
    badgeBg: 'bg-cta/10',
    image: '/images/products/product1.avif',
  },
  {
    id: 2,
    badge: '2',
    title: 'It unlocks boosted APR deals and exclusive partner airdrops based on your reputation',
    bgColor: 'bg-[#f6f7fc]',
    textColor: 'text-[#4fa1ce]',
    badgeBg: 'bg-[#666666]/10',
    image: '/images/products/product2.avif',
  },
  {
    id: 3,
    badge: '3',
    title: 'It acts as your DeFi identity, proving credibility and participation',
    bgColor: 'bg-[#f0f9f7]',
    textColor: 'text-[#00aa8b]',
    badgeBg: 'bg-[#00aa8b]/10',
    image: '/images/products/product3.avif',
  },
];

export default function WhatIsZPassSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="zPass" className="relative bg-white max-w-8xl mx-auto px-4 py-24">
      {/* Desktop: Sticky layout */}
      <div className="hidden md:block">
        <div className="flex gap-12 relative">
          {/* Left Side - Sticky */}
          <div className="sticky top-32 w-1/2 flex justify-center self-start">
            <div className="w-full flex flex-col items-center">
              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-semibold text-primary mb-2 leading-tight"
              >
                What is <span className="text-cta">zPass</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base text-primary font-medium leading-relaxed mb-4"
              >
                Your universal reputation passport to onchain privileges
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative w-80 h-[450px] lg:w-80 aspect-video"
              >
                <Image
                  src="https://storage.googleapis.com/zeru-nft-videos/images/0xd8da6bf26964af9d7eed9e03e53415d37aa96045_image_1761748039.png"
                  alt="zPass NFT"
                  fill
                  className="object-contain rounded-2xl blur-[2px]"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Side - Scrolling Cards */}
          <div className="w-1/2 flex flex-col">
            <div className="space-y-8">
              {reputationCards.map((card, index) => {
                return (
                  <motion.div
                    key={card.id}
                    initial={{
                      opacity: 0,
                      y: 50,
                      scale: 0.7,
                      rotate: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                      ease: 'easeOut',
                    }}
                    className={`${card.bgColor} rounded-3xl py-6 px-6 lg:px-8 flex gap-8 min-h-[280px]`}
                  >
                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      {/* Badge */}
                      {/* <div
                        className={`bg-background inline-block px-4 py-2 rounded-full text-sm font-medium ${card.textColor} mb-16 w-fit`}
                      >
                        {card.badge}
                      </div> */}

                      {/* Title */}
                      <h3 className={`${card.textColor} text-2xl font-semibold`}>{card.title}</h3>
                    </div>

                    {/* Image */}
                    <div className="relative w-52 h-52 flex-shrink-0">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain rounded-2xl"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Match updated desktop hero */}
      <div className="md:hidden">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-semibold text-primary mb-2 leading-tight text-center"
        >
          What is <span className="text-cta">zPass</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-primary font-medium text-center leading-relaxed mb-4"
        >
          Your universal reputation passport to onchain privileges
        </motion.p>

        {/* Image (mirrors desktop settings) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mx-auto w-72 sm:w-80 h-[360px] aspect-video mt-4 mb-8"
        >
          <Image
            src="https://storage.googleapis.com/zeru-nft-videos/images/0xd8da6bf26964af9d7eed9e03e53415d37aa96045_image_1761748039.png"
            alt="zPass NFT"
            fill
            className="object-contain rounded-2xl blur-[2px]"
          />
        </motion.div>

        {/* Mobile Cards */}
        <div className="space-y-6">
          {reputationCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${card.bgColor} rounded-3xl py-6 px-4 flex flex-col gap-4`}
            >
              {/* Badge */}
              <div
                className={`bg-background inline-block px-4 py-2 rounded-full text-sm font-medium ${card.textColor} mb-4 w-fit`}
              >
                {card.badge}
              </div>

              {/* Title */}
              <h3 className={`${card.textColor} text-xl font-semibold leading-tight mb-0`}>
                {card.title}
              </h3>

              {/* Image */}
              <div className="relative w-full h-52">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
