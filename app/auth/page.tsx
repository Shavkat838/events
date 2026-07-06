"use client"
import LoginPage from '../components/auth/login'
import RegisterPage from '../components/auth/register'
import { authStore } from '../store/authStore'


export default function page() {
  const {status}=authStore()
  return (
    <>
      {status==="login"? < LoginPage /> : < RegisterPage />  }
    </>
  )
}
