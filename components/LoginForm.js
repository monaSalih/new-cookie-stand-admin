
import { useAuth } from "../contexts/auth"

export default function LoginForm(props){
  const { login } = useAuth()
  function loginHandler(e){
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    login(username, password)
  }
  return (
    <>
    <form onSubmit={loginHandler} className="flex flex-col justify-center w-3/4 p-2 m-4 mx-auto bg-green-300 rounded-lg">
      <input type="text" name="username" placeholder="Enter Your User" className="flex-auto p-2 m-2 bg-gray-100 rounded"/>
      <input type="text" name="password" placeholder="Enter Your Password" className="flex-auto p-2 m-2 bg-gray-100 rounded" />
      <button type="submit" className="w-32 p-2 mx-auto text-center text-white bg-purple-900 rounded">Sign In</button>
    </form>
     {/* <button onClick={() => login('tahany777', '0000')} className="p-2 text-white bg-gray-500 rounded">Login</button> */}
    </>
  )
} 