import './App.css'
import { UserContextProvider } from './context/UserContext'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import PostPage from './pages/PostPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='create' element={<CreatePage />} />
          <Route path='post/:id' element={<PostPage />} />
          <Route path='edit/:id' element={<EditPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
