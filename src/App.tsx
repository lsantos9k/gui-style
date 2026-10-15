import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Showcase = lazy(() => import('./components/Showcase'))
const Space = lazy(() => import('./components/Space'))
const FinalCTA = lazy(() => import('./components/FinalCTA'))

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Showcase />
          <Space />
          <FinalCTA />
        </Suspense>
      </main>
    </div>
  )
}
