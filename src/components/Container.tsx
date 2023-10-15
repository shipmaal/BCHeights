import Link from 'next/link'
import Header from './Header'
import headerStyles from '~/styles/Header.module.css'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <Header>
      </Header>
       <main>{children}</main>
      
    </div>
  )
}
