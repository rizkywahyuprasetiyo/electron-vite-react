import React from 'react'
import { Link, redirect } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-800 gap-y-3">
      <h1 className="text-3xl font-bold text-slate-100">Selamat Data di Aplikasi</h1>
      <h2 className="text-5xl font-bold text-slate-100">IbnAuf App</h2>
      <div className="flex items-center mt-8 gap-x-2">
        <Link
          to="/login"
          className="px-6 py-2 rounded-lg bg-slate-900 text-slate-200 hover:bg-slate-900/70"
        >
          Login
        </Link>
        <Link className="px-6 py-2 rounded-lg bg-slate-700 text-slate-200 hover:bg-slate-/70">
          Register
        </Link>
      </div>
    </div>
  )
}
