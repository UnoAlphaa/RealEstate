"use client"
import { useState } from 'react'
import { Eye, EyeOff, Check, X } from 'lucide-react'
import Image from 'next/image'

const TryForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  // Password validation states
  const hasMinLength = password.length >= 8
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  const hasNumber = /\d/.test(password)
  const passwordsMatch = password === confirmPassword && password !== ''

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <Image 
            src="/logo.png" 
            alt="SpoutPay Logo" 
            width={150} 
            height={50}
            className="mb-4"
          />
          <h1 className="text-2xl font-semibold mb-2">You're welcome</h1>
          <p className="text-gray-500 text-center">
            We can't wait for you to explore the surprises we have got for you
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <h2 className="text-xl text-center text-blue-600 mb-4">
            Sign up and get started
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Please fill in the correct informations to create your account
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full name
              </label>
              <input
                type="text"
                placeholder="Surname, First Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="example@spoutpay.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Password Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 text-sm">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-200 ${
                hasMinLength ? 'bg-green-500' : 'bg-red-500'
              }`}>
                <Check className="text-white" size={12} />
              </div>
              <span className={hasMinLength ? "text-green-500" : "text-red-500"}>
                At least 8 characters
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-200 ${
                hasSpecialChar ? 'bg-green-500' : 'bg-red-500'
              }`}>
                <Check className="text-white" size={12} />
              </div>
              <span className={hasSpecialChar ? "text-green-500" : "text-red-500"}>
                Special Characters
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-200 ${
                hasNumber ? 'bg-green-500' : 'bg-red-500'
              }`}>
                <Check className="text-white" size={12} />
              </div>
              <span className={hasNumber ? "text-green-500" : "text-red-500"}>
                Minimum ONE Character
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-200 ${
                passwordsMatch ? 'bg-green-500' : 'bg-red-500'
              }`}>
                <Check className="text-white" size={12} />
              </div>
              <span className={passwordsMatch ? "text-green-500" : "text-red-500"}>
                Passwords match
              </span>
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone number
            </label>
            <input
              type="tel"
              placeholder="+234 (xxxxxxxxxx)"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center gap-2">
            <div 
              onClick={() => setTermsAccepted(!termsAccepted)}
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-200 ${
                termsAccepted 
                  ? 'border-green-500 bg-green-500' 
                  : 'border-gray-300 hover:border-blue-500'
              }`}
            >
              <Check 
                className={`text-white transition-opacity duration-200 ${
                  termsAccepted ? 'opacity-100' : 'opacity-0'
                }`} 
                size={12} 
              />
            </div>
            <label 
              onClick={() => setTermsAccepted(!termsAccepted)} 
              className="text-sm text-gray-600 cursor-pointer"
            >
              Agree with our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Services
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an Account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none">
        <Image
          src="/celebration.png"
          alt="Celebration"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default TryForm
