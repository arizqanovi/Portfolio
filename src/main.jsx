import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ContentWriting from './pages/ContentWriting.jsx'
import News from './pages/News.jsx'
import LanguageTutor from './pages/LanguageTutor.jsx'
import ContentEditing from './pages/ContentEditing.jsx'
import SpeakerMC from './pages/SpeakerMC.jsx'
import AdminNews from './pages/AdminNews.jsx'
import Login from './pages/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/content-writing" element={<ContentWriting />} />
          <Route path="/news" element={<News />} />
          <Route path="/language-tutor" element={<LanguageTutor />} />
          <Route path="/content-editing" element={<ContentEditing />} />
          <Route path="/speaker-mc" element={<SpeakerMC />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin-news" 
            element={
              <ProtectedRoute>
                <AdminNews />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </HashRouter>
    </AuthProvider>
  </React.StrictMode>,
)