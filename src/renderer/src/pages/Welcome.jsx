import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className="h-screen bg-slate-800 flex justify-center items-center flex-col gap-y-3">
      <h1 className="text-slate-100 font-bold text-3xl">Selamat Data di Aplikasi</h1>
      <h2 className="text-slate-100 font-bold text-5xl">IbnAuf App</h2>
      <div className="flex gap-x-2 items-center mt-8">
        <Link
          to="/login"
          className="bg-slate-900 text-slate-200 px-6 py-2 rounded-lg hover:bg-slate-900/70"
        >
          Login
        </Link>
        <Link className="bg-slate-700 text-slate-200 px-6 py-2 rounded-lg hover:bg-slate-/70">
          Register
        </Link>
      </div>
    </div>
  )
}
