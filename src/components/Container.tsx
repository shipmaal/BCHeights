import Link from 'next/link'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <header className="header">
        <Link className="header__title" href="/">
          Next.js + Sanity
        </Link>
      </header>
      <main>{children}</main>
    </div>
  )
}
