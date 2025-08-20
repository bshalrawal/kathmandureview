import HeroFeatured from '@/components/hero-featured'
import HotCarousel from '@/components/hot-carousel'
import ReviewCard from '@/components/review-card'
import RankingList from '@/components/ranking-list'
import { featured, hot, reviews, rankings } from '@/lib/mock'

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroFeatured reviews={featured} />
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Hot & Trending</h2>
        <HotCarousel items={hot} />
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Latest Reviews</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Top Rankings</h2>
        <RankingList items={rankings.slice(0, 5)} />
      </section>
    </div>
  )
}
