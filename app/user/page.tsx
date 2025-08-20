'use client'
import { useAuthStore } from "@/store/auth"

function User() {
  const user = useAuthStore((state) => state.user)




  if(!user){
    return <h1>Not Logged in</h1>
  }
  
  return (
    <>
    <h1>Hello World</h1>
    <p>{user?.email}</p>
    </>

  )
}

export default User