export const metadata = { title: 'Admin Panel – Kathmandu Review' }

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Admin Panel</h1>
      <p className="text-muted-foreground">This section is under construction.</p>
      <button className="px-4 py-2 bg-primary text-white rounded-full opacity-50 cursor-not-allowed" disabled>
        Add New Review (coming soon)
      </button>
    </div>
  )
}
