'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sun, Sprout, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-market-green via-market-green-light to-market-green">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Organic blob shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-harvest-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-harvest-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

        {/* Floating icons */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] right-[15%] text-white/10 hidden lg:block"
        >
          <Sun className="h-24 w-24" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[25%] left-[10%] text-white/10 hidden lg:block"
        >
          <Sprout className="h-20 w-20" />
        </motion.div>
        <motion.div
          animate={{ y: [-8, 12, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[60%] right-[8%] text-harvest-gold/15 hidden lg:block"
        >
          <Heart className="h-16 w-16" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-harvest-gold/20 text-harvest-gold-light rounded-full text-sm font-accent font-medium tracking-wide mb-6">
              Every Saturday &bull; 9 AM - 2 PM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
          >
            Fresh. Local.{' '}
            <span className="text-harvest-gold">Community.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl"
          >
            Where neighbors become friends over fresh-picked produce, warm bread, and the simple joy of supporting the people who feed us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/vendors">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
                Explore Vendors
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/produce-box">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-market-green">
                Get a Produce Box — $20
              </Button>
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-8 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { value: '30+', label: 'Local Vendors' },
              { value: '5K+', label: 'Families Served' },
              { value: '3', label: 'Years Strong' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-heading font-bold text-harvest-gold">{stat.value}</p>
                <p className="text-sm text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-[50px] md:h-[80px]"
        >
          <path
            d="M0,80 L0,40 Q360,80 720,30 Q1080,-10 1440,40 L1440,80 Z"
            fill="#FDF8EF"
          />
        </svg>
      </div>
    </section>
  )
}
