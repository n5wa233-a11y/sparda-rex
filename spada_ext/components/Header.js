import Link from 'next/link'

export default function Header(){
  return (
    <header className="app-header" style={{display:'flex',gap:20}}>
      <Link href="/">Spada</Link>
      <Link href="/login">Login</Link>
      <Link href="/admin/upload">Admin</Link>
    </header>
  )
}
