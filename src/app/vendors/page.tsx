import type { Metadata } from 'next'
import { VendorsContent } from './VendorsContent'

export const metadata: Metadata = {
  title: 'Vendors',
  description: 'Meet the local farmers, bakers, and artisans who make Market on 41st special.',
}

export default function VendorsPage() {
  return <VendorsContent />
}
