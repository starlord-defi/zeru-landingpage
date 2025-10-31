'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedHeading from './AnimatedHeading';
import '@/styles/hero/hero.css';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [walletAddress, setWalletAddress] = useState('');
  const [error, setError] = useState('');

  const handleGetStarted = () => {
    if (!walletAddress.trim()) {
      setError('Please enter a wallet address or ENS name');
      return;
    }

    // Redirect to ZPass app with the wallet address
    const zpassUrl = `https://app.zpass.ai/?wallet=${encodeURIComponent(walletAddress.trim())}`;
    window.open(zpassUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="zscore-hero-section flex flex-col items-center min-h-[calc(100vh-120px)] px-4 md:px-6 text-center pt-32 md:pt-32">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="inline-block">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-cta font-medium text-sm bg-background px-4 py-2 rounded-full">
              Welcome to zPass
            </span>
          </motion.div>
        </div>
        <AnimatedHeading />
      </div>

      {/* <div className="text-sm md:text-base text-primary font-medium max-w-4xl mx-auto mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Eigen AVS for reputation, powered by AI
        </motion.div>
      </div> */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="flex md:mt-8 mt-6 w-full flex-row items-center justify-between gap-4 max-w-xl md:mx-auto rounded-full bg-background border-2 border-border p-1"
      >
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Your wallet address or ENS name..."
            value={walletAddress}
            onChange={(e) => {
              setWalletAddress(e.target.value);
              if (error) setError('');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleGetStarted();
              }
            }}
            className="w-full md:text-base text-sm text-primary placeholder-primary focus:outline-none focus:ring-0 bg-background pl-2 md:pl-4 py-1 md:py-2 rounded-full"
          />
        </div>
        <div className="w-fit">
          <Button
            onClick={handleGetStarted}
            disabled={!!error}
            className="w-full text-base text-white flex items-center gap-2 rounded-full bg-cta px-4 md:px-6 py-2 md:py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <>
              <p className="whitespace-nowrap md:block hidden">Check zScore</p>
              <ArrowRight className="w-5 h-5" />
            </>
          </Button>
        </div>
      </motion.div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-2"
        >
          {error}
        </motion.div>
      )}
    </section>
  );
}
