import ReviewCard from '@/components/review-card'
import { reviews } from '@/lib/mock'

export const metadata = { title: 'All Ratings – Kathmandu Review' }

export default function RatingsPage() {
  const sorted = [...reviews].sort((a, b) => b.rating - a.rating)
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">All Ratings</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sorted.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}
