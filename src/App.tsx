import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Experiences } from './pages/Experiences'
import { ExperienceDetail } from './pages/ExperienceDetail'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/esperienze" element={<Experiences />} />
        <Route path="/esperienze/:slug" element={<ExperienceDetail />} />
        <Route path="/chi-sono" element={<About />} />
        <Route path="/contatti" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
