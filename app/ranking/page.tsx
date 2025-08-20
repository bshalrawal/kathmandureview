import RankingList from '@/components/ranking-list'
import { rankings } from '@/lib/mock'

export const metadata = { title: 'Top Rankings – Kathmandu Review' }

export default function RankingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Top Rankings</h1>
      <RankingList items={rankings} />
    </div>
  )
}
