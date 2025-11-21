import Link from 'next/link'
export default function MangaCard({m}) {
  return (
    <div className="card">
      <Link href={`/manga/${m.id}`}>
        <div className="thumb">{m.title}</div>
      </Link>
    </div>
  )
}
