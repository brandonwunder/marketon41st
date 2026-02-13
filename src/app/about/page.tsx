import type { Metadata } from 'next'
import { AboutContent } from './AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Market on 41st — our story, mission, and the community that makes it all possible.',
}

export default function AboutPage() {
  return <AboutContent />
}
