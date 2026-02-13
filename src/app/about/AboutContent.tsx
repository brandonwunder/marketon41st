'use client'

import { motion } from 'framer-motion'
import { Leaf, Heart, Users, Sun, Sprout, Award, TrendingUp, ShoppingBag } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const values = [
  { icon: Leaf, title: 'Sustainability', description: 'We champion farming practices that nurture the earth, not deplete it. Local means less transit, less waste, more freshness.' },
  { icon: Heart, title: 'Community First', description: 'Every dollar spent at the market stays local. We\'re not just a market — we\'re a neighborhood gathering place.' },
  { icon: Users, title: 'Inclusivity', description: 'Everyone is welcome at Market on 41st. We strive to make fresh, local food accessible to all members of our community.' },
  { icon: Sun, title: 'Transparency', description: 'Know where your food comes from. Our vendors are your neighbors, and they\'re proud to show you exactly how your food is grown.' },
]

const stats = [
  { icon: ShoppingBag, value: '30+', label: 'Local Vendors' },
  { icon: Users, value: '5,000+', label: 'Families Served' },
  { icon: TrendingUp, value: '$500K+', label: 'Kept in Community' },
  { icon: Award, value: '3', label: 'Years Strong' },
]

const team = [
  { name: 'Rosa Martinez', role: 'Market Director', bio: 'A lifelong community organizer who believes that food is the great connector.' },
  { name: 'Tom Whitfield', role: 'Vendor Relations', bio: 'Former farmer turned market advocate. Knows every vendor by name and their best crop.' },
  { name: 'Aisha Johnson', role: 'Events & Programming', bio: 'Creates the magic that turns a market into a Saturday morning destination.' },
]

export function AboutContent() {
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal()
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal()
  const { ref: teamRef, isVisible: teamVisible } = useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-market-green via-market-green-light to-market-green overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-harvest-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              How a handful of neighbors sharing backyard harvests became the heart of a community.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 L0,30 Q360,60 720,20 Q1080,-10 1440,30 L1440,60 Z" fill="#FDF8EF" />
          </svg>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 md:py-28 bg-cream-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-warm-gray leading-relaxed"
            >
              <p className="text-xl text-charcoal font-medium leading-relaxed">
                It started with a folding table and a dream.
              </p>
              <p>
                In the spring of 2023, Rosa Martinez set up a card table at the corner of 41st and Elm with a handwritten sign: &ldquo;Free Tomatoes — Take What You Need.&rdquo; Those tomatoes came from her backyard garden, and she had too many for her family. Within an hour, she&apos;d given away three dozen and had conversations with neighbors she&apos;d waved at for years but never really known.
              </p>
              <p>
                The next Saturday, Rosa brought her tomatoes again. This time, her neighbor Tom Whitfield showed up with zucchini from his plot. The Saturday after that, Aisha Johnson brought fresh herbs. Then came the Nguyens with their incredible spring rolls, old Mr. Henderson with his legendary strawberry jam, and the Garcia family with their flowers.
              </p>
              <p>
                What started as one woman sharing her harvest became a weekly ritual. Neighbors started marking their calendars. Kids started waking up early on Saturdays. And somewhere between the fresh basil and the friendly conversations, a community found itself.
              </p>
              <p>
                Today, Market on 41st hosts over 30 local vendors every Saturday from April through October. We&apos;ve served more than 5,000 families, kept half a million dollars circulating in our local economy, and — most importantly — we&apos;ve turned strangers into friends, one Saturday morning at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Believe"
            subtitle="The values that guide everything we do at Market on 41st."
          />
          <div ref={valuesRef} className="grid sm:grid-cols-2 gap-6 mt-12">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-cream-white border border-light-stone/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-market-green/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-market-green" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">{value.title}</h3>
                  <p className="text-warm-gray leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-market-green to-market-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <Icon className="h-8 w-8 text-harvest-gold mx-auto mb-3" />
                  <p className="text-3xl md:text-4xl font-heading font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/70 mt-1">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The People Behind the Market"
            subtitle="Meet the team that keeps Market on 41st running, rain or shine."
          />
          <div ref={teamRef} className="grid md:grid-cols-3 gap-8 mt-12">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={teamVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white border border-light-stone/30"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-market-green to-harvest-gold mx-auto mb-4 flex items-center justify-center text-white text-2xl font-heading font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal">{member.name}</h3>
                <p className="text-sm text-market-green font-accent font-medium uppercase tracking-wide mt-1">{member.role}</p>
                <p className="text-warm-gray mt-3 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sprout className="h-10 w-10 text-market-green mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
            Come Be Part of the Story
          </h2>
          <p className="text-lg text-warm-gray mb-8">
            Whether you&apos;re a vendor looking for a home, a neighbor looking for fresh food, or just someone who loves the energy of a Saturday morning market — there&apos;s a place for you here.
          </p>
        </div>
      </section>
    </>
  )
}
