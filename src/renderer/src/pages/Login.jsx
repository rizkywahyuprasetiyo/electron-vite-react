import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  function handleNavigate() {
    return navigate('/dashboard', { replace: true })
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-slate-700">
        {/* card */}
        <div className="px-3 py-4 rounded-lg shadow-lg bg-slate-600 w-72">
          <h1 className="text-2xl font-bold text-slate-200">Login.</h1>
          <p className="mt-1 text-sm text-slate-400">Silahkan login</p>
          <div className="mt-4">
            <div className="mb-3">
              <label htmlFor="email" className="text-sm text-slate-300">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-1 py-1 mt-1 border-2 rounded bg-slate-500 text-slate-300 border-slate-400/30"
                placeholder="fulan@login.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="text-sm text-slate-300">
                Password
              </label>
              <input
                type="password"
                id="email"
                className="w-full px-1 py-1 mt-1 border-2 rounded bg-slate-500 text-slate-300 border-slate-400/30"
                placeholder="***"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2 font-semibold transition-all duration-300 rounded bg-slate-900 text-slate-300 hover:bg-slate-800"
                onClick={handleNavigate}
              >
                Login
              </button>
            </div>
          </div>
        </div>
        {/* end card */}
        {/* copy */}
        <div className="mt-10">
          <span className="text-xs text-slate-500">
            &copy; 2024 Rizky Wahyu Prasetiyo - IbnAuf App
          </span>
        </div>
        {/* end copy */}
      </div>
    </>
  )
}
