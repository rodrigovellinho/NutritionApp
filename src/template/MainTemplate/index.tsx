import { Footer } from '@/components/Footer/index.'
import { Header } from '@/components/Header'

interface IMainProps {
  children: React.ReactNode
}

export const MainTemplate = ({ children }: IMainProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
