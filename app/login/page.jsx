"use client"
import { useActionState } from 'react'
import { login } from './actions'

export default function LoginPage() {
  const [state, formAction] = useActionState(login, { error: null })

  return (
    <form action={formAction} className="max-w-sm mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">เข้าสู่ระบบ</h1>
      {state.error && <p className="bg-red-50 text-red-700 p-3 rounded mb-4 text-sm">{state.error}</p>}
      <input name="email" placeholder="อีเมล" className="w-full border rounded px-3 py-2 mb-3" />
      <input name="password" type="password" placeholder="รหัสผ่าน" className="w-full border rounded px-3 py-2 mb-4" />
      <button className="w-full bg-blue-600 text-white py-2 rounded">เข้าสู่ระบบ</button>
      <p className="text-xs text-gray-400 mt-4">ทดสอบ: admin@cmu.ac.th / 1234</p>
    </form>
  )
}
