import type { Metadata } from 'next'
import { ProduceBoxContent } from './ProduceBoxContent'

export const metadata: Metadata = {
  title: 'Produce Box',
  description: 'Order a curated $20 box of fresh, local produce from Market on 41st vendors. Picked fresh, packed with love.',
}

export default function ProduceBoxPage() {
  return <ProduceBoxContent />
}
