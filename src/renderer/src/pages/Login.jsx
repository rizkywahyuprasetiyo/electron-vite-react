import React from 'react'

export default function Login() {
  return (
    <>
      <div className="bg-slate-700 h-screen flex justify-center items-center flex-col">
        {/* card */}
        <div className="bg-slate-600 w-72  py-4 px-3 rounded-lg shadow-lg">
          <h1 className="text-slate-200 font-bold text-2xl">Login.</h1>
          <p className="text-sm mt-1 text-slate-400">Silahkan login</p>
          <div className="mt-4">
            <div className="mb-3">
              <label htmlFor="email" className="text-sm text-slate-300">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="bg-slate-500 w-full rounded mt-1 py-1 text-slate-300 px-1 border-2 border-slate-400/30"
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
                className="bg-slate-500 w-full rounded mt-1 py-1 text-slate-300 px-1 border-2 border-slate-400/30"
                placeholder="***"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-slate-900 text-slate-300 font-semibold w-full rounded py-2 hover:bg-slate-800 transition-all duration-300"
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
