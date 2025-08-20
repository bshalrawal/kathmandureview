import HotCarousel from '@/components/hot-carousel'
import { hot } from '@/lib/mock'

export const metadata = { title: 'Hot & Trending – Kathmandu Review' }

export default function HotPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Hot & Trending</h1>
      <HotCarousel items={hot} full />
    </div>
  )
}
