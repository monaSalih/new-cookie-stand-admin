import CookieStandAdmin from '../components/CookieStandAdmin';
import { useAuth } from '../contexts/auth'
import LoginForm from '../components/LoginForm';
export default function Home() {

  const {user, login, logout} = useAuth()
  return (
    <div className="font-serif">
      {user ? (
        <>
        <CookieStandAdmin />
        <button onClick={logout} className="p-2 text-white bg-gray-500 rounded">Sign Out</button>
        </>
      )
      : (
        <>
        <LoginForm />
        </>
      )}
    </div>
  )
}