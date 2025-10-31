'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Coins, Shield, Wallet, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Token images mapping
export const TokenImages: Record<string, string> = {
  USDC: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBMfDxr1PrxlKVnOBktTGlNgXSVYUT0LB7Q&s',
  USDT: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGcttVBhyCMnl1e_iNaaK7Z6GRz5WZTlDc3g&s',
  WBTC: 'https://s2.coinmarketcap.com/static/img/coins/200x200/3717.png',
  WETH: 'https://img.cryptorank.io/coins/weth1701090834118.png',
  DAI: 'https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png',
  AUSD: 'https://s2.coinmarketcap.com/static/img/coins/200x200/32864.png',
  KAT: 'https://s2.coinmarketcap.com/static/img/coins/200x200/27811.png',
};

const ZPassNFTSection: React.FC = () => {
  const aprDeals = [
    {
      id: 'katana',
      title: 'Katana',
      apy: '51.59%',
      status: 'Active',
      description:
        "Deposit directly into Turtle's boosted deals and liquidity campaign opportunities",
      tvl: '$457.16M',
      participants: '11133',
      rewards: ['KAT', 'USDC', 'USDT', 'WBTC', 'WETH', 'DAI'],
      additionalRewards: 5,
      icon: 'https://pbs.twimg.com/profile_images/1927769809216843776/IJexy9VY_400x400.jpg',
    },
    {
      id: 'linea',
      title: 'Linea',
      apy: '7.17%',
      status: 'Active',
      description: 'Access exclusive Linea ecosystem rewards and early protocol incentives',
      tvl: '$234.5M',
      participants: '8756',
      rewards: ['USDC', 'WETH'],
      additionalRewards: 1,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/200x200/27657.png',
    },
  ];

  return (
    <section id="benefits" className="relative bg-white max-w-8xl mx-auto px-4 py-24">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-semibold text-primary mb-4 leading-tight"
          >
            <span className="text-primary">Benefits of </span>
            <span className="text-cta">zPass</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-sm md:text-base text-primary font-medium max-w-2xl mx-auto"
          >
            Unlock exclusive defi opportunities with your onchain reputation
          </motion.p>
        </div>

        {/* Main Content - Custom Layout */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          >
            {/* Left Half - Boosted Rewards Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              //   whileHover={{
              //     scale: 1.05,
              //     transition: { duration: 0.3 },
              //   }}
              className="bg-[#f4f1fb] rounded-3xl py-6 px-4 lg:px-8 flex flex-col relative overflow-hidden group"
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-cta rounded-full"
                />
                <motion.div
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute -bottom-10 -left-10 w-24 h-24 bg-cta/50 rounded-full"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: 'backOut' }}
                  className="bg-background inline-block px-4 py-2 rounded-full text-sm font-medium text-cta mb-4 w-fit"
                >
                  1
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  className="text-cta text-2xl lg:text-3xl font-semibold mb-4"
                >
                  Boosted APR Deals & Exclusive Airdrops
                </motion.h3>

                {/* APR Deal Cards */}
                <div className="space-y-4">
                  {aprDeals.map((deal, index) => (
                    <motion.div
                      key={deal.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                      //   whileHover={{ scale: 1.02 }}
                      className="bg-white border border-border rounded-2xl p-4 group-hover:border-cta/40"
                    >
                      {/* Header Section */}
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-sm">
                            <Image
                              src={deal.icon}
                              alt="i"
                              width={28}
                              height={28}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-primary">{deal.title}</h4>
                            <div className="flex items-center gap-2 mt-0">
                              <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                              <span className="text-xs text-green-700 font-medium">
                                {deal.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-primary">APY</div>
                          <div className="text-3xl font-bold text-purple-400">{deal.apy}</div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-primary text-sm mb-2">{deal.description}</p>

                      {/* Metrics */}
                      {/* <div className="grid grid-cols-2 gap-3 mb-3">
                        <div>
                          <div className="text-sm text-secondary">TVL</div>
                          <div className="text-sm font-semibold text-primary">{deal.tvl}</div>
                        </div>
                        <div>
                          <div className="text-sm text-secondary">Participants</div>
                          <div className="text-sm font-semibold text-primary">{deal.participants}</div>
                        </div>
                      </div> */}

                      {/* Rewards Section */}
                      <div className="mb-2">
                        <div className="text-sm text-primary mb-1">Rewards:</div>
                        <div className="flex items-center gap-1 flex-wrap">
                          {deal.rewards.map((token, tokenIndex) => (
                            <div
                              key={tokenIndex}
                              className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden"
                            >
                              <Image
                                src={TokenImages[token] || '/placeholder-token.png'}
                                alt={token}
                                width={24}
                                height={24}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                          <div className="text-xs text-secondary">+{deal.additionalRewards}</div>
                        </div>
                      </div>

                      {/* Manage Button */}
                      {/* <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-colors text-sm">
                        Manage
                      </Button> */}
                    </motion.div>
                  ))}
                </div>
                <p className="text-primary text-sm mt-2">And many more...</p>
              </div>
            </motion.div>

            {/* Onchain Identity Card */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
                // whileHover={{
                //   scale: 1.05,
                //   transition: { duration: 0.3 },
                // }}
                className="bg-[#f6f7fc] rounded-3xl md:py-8 py-6 px-4 lg:px-8 flex flex-col relative overflow-hidden group"
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <motion.div
                    animate={{
                      rotate: [0, 180, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute top-8 left-8 w-24 h-24 bg-[#4fa1ce] rounded-full"
                  />
                  <motion.div
                    animate={{
                      rotate: [360, 180, 0],
                      scale: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 3,
                    }}
                    className="absolute bottom-8 right-8 w-20 h-20 bg-[#4fa1ce]/60 rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4, ease: 'backOut' }}
                    className="bg-background inline-block px-4 py-2 rounded-full text-sm font-medium text-[#4fa1ce] mb-4 w-fit"
                  >
                    2
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.45 }}
                    className="text-[#4fa1ce] text-2xl lg:text-3xl font-semibold mb-6"
                  >
                    Your Onchain Gateway
                  </motion.h3>

                  {/* Identity Details */}
                  <div className="space-y-3 mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-[#4fa1ce] rounded-full mt-2 shrink-0"></div>
                      <p className="text-primary text-base">
                        zPass is your portable passport for all onchain rewards and incentives
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.55 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-[#4fa1ce] rounded-full mt-2 shrink-0"></div>
                      <p className="text-primary text-base">
                        Build a comprehensive onchain reputation across multiple protocols and
                        chains
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-[#4fa1ce] rounded-full mt-2 shrink-0"></div>
                      <p className="text-primary text-base">
                        Unlock exclusive access to premium DeFi opportunities and early protocol
                        launches
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* ZERU Points Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                // whileHover={{
                //   scale: 1.05,
                //   transition: { duration: 0.3 },
                // }}
                className="bg-[#f0f9f7] rounded-3xl md:py-8 py-6 px-4 lg:px-8 flex flex-col relative overflow-hidden group"
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute top-10 right-10 w-20 h-20 bg-[#00aa8b] rounded-full"
                  />
                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      x: [0, -8, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 2,
                    }}
                    className="absolute bottom-20 left-8 w-16 h-16 bg-[#00aa8b]/70 rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4, ease: 'backOut' }}
                    className="bg-background inline-block px-4 py-2 rounded-full text-sm font-medium text-[#00aa8b] mb-4 w-fit"
                  >
                    3
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.45 }}
                    className="text-[#00aa8b] text-2xl lg:text-3xl font-semibold mb-6"
                  >
                    ZERU Points
                  </motion.h3>

                  {/* Points Details */}
                  <div className="space-y-3 mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-[#00aa8b] rounded-full mt-2 shrink-0"></div>
                      <p className="text-primary text-base">
                        ZERU points are reward tokens earned through platform engagement
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ZPassNFTSection;
