import Link from 'next/link'

export default function Logo({ setIsMenuOpen }) {
  return (
    <Link href="/">
      <a onClick={() => setIsMenuOpen(false)}>
        <img src="/img/logo.svg" alt="website logo" width="48" height="48" className="logo" />
      </a>
    </Link>
  )
}
