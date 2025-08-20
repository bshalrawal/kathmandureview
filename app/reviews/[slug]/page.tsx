import { notFound } from 'next/navigation'
import Image from 'next/image'
import RatingStars from '@/components/rating-stars'
import ReviewCard from '@/components/review-card'
import { reviews } from '@/lib/mock'

export async function generateStaticParams() {
  return reviews.map((review) => ({ slug: review.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const review = reviews.find((r) => r.slug === params.slug)
  return {
    title: review ? `${review.title} – Kathmandu Review` : 'Review Not Found',
    description: review?.excerpt,
  }
}

export default function ReviewDetail({ params }: { params: { slug: string } }) {
  const review = reviews.find((r) => r.slug === params.slug)
  if (!review) return notFound()

  const related = reviews
    .filter((r) => r.category === review.category && r.id !== review.id)
    .slice(0, 3)

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
          <Image
            src={review.coverImage}
            alt={review.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 glass flex items-end p-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-lg">
              {review.title}
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center text-sm">
          <span className="px-3 py-1 rounded-full bg-accent/30 text-accent">
            {review.category}
          </span>
          <RatingStars rating={review.rating} />
          <span className="text-muted-foreground">{new Date(review.date).toLocaleDateString()}</span>
        </div>
        <p>{review.excerpt}</p>
      </header>
      {related.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Reviews</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
