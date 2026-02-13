'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/lib/mock-data'

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref, isVisible } = useScrollReveal()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => setCurrent(index)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 left-10 text-harvest-gold/10">
        <Quote className="h-40 w-40" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="From Our Community"
          subtitle="Don't take our word for it — hear from the folks who make Market on 41st special."
        />

        <div ref={ref} className="mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative min-h-[200px]"
          >
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <Quote className="h-8 w-8 text-harvest-gold mx-auto mb-6" />
                <p className="text-xl md:text-2xl text-charcoal leading-relaxed font-serif italic mb-8">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <footer>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-market-green to-harvest-gold mx-auto mb-3 flex items-center justify-center text-white font-heading font-bold text-lg">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <cite className="not-italic">
                    <p className="font-heading font-semibold text-charcoal">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-warm-gray mt-1">
                      {testimonials[current].role}
                    </p>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prev}
                className="p-2 rounded-full hover:bg-light-stone/50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-warm-gray" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'bg-market-green w-8'
                        : 'bg-light-stone hover:bg-warm-gray/50'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full hover:bg-light-stone/50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-warm-gray" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
