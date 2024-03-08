import { useState } from 'react'
import axiosClient from '../lib/axios-client'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const router = useNavigate()
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const validate = credentials => {
    const errors = {}
    if (!credentials.username || credentials.username.length < 3) {
      errors.username = 'Username is required'
    }
    if (!credentials.password || credentials.password.length < 6) {
      errors.password = 'Password is required'
    }
    setErrors(errors)
    return errors.username || errors.password
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const validated = validate(credentials)

    if (!validated) {
      const res = await axiosClient.post('/auth/login', credentials)
      if (res.data.token) {
        localStorage.setItem('token', res.data.token)
      }

      router('/user/profile')
    }
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username{' '}
              <span>
                {errors.username && (
                  <span className="text-red-500">* {errors.username}</span>
                )}
              </span>
            </label>
            <div className="mt-2">
              <input
                onChange={handleChange}
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password{' '}
                <span>
                  {errors.password && (
                    <span className="text-red-500">* {errors.password}</span>
                  )}
                </span>
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
