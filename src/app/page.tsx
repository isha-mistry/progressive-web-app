"use client";

import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Next.js with Tailwind - Home</title>
        <meta name="description" content="Static homepage built with Next.js and Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-indigo-600">YourBrand</div>
            </div>
            <div className="flex items-center">
              {/* Desktop menu */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  <Link href="/" className="px-3 py-2 text-indigo-600 font-medium rounded-md bg-indigo-50">Home</Link>
                  <Link href="/about" className="px-3 py-2 text-gray-700 font-medium rounded-md hover:bg-gray-100">About</Link>
                  <Link href="/services" className="px-3 py-2 text-gray-700 font-medium rounded-md hover:bg-gray-100">Services</Link>
                  <Link href="/contact" className="px-3 py-2 text-gray-700 font-medium rounded-md hover:bg-gray-100">Contact</Link>
                </div>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Menu icon */}
                  <svg className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {/* X icon */}
                  <svg className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on mobile menu state */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-indigo-600 font-medium rounded-md bg-indigo-50">Home</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 font-medium rounded-md hover:bg-gray-100">About</Link>
            <Link href="/services" className="block px-3 py-2 text-gray-700 font-medium rounded-md hover:bg-gray-100">Services</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 font-medium rounded-md hover:bg-gray-100">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:py-24 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-6xl">
            Welcome to Your Next.js Site
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-indigo-100 max-w-3xl mx-auto">
            A beautiful, responsive website built with Next.js and styled with Tailwind CSS.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
              Get Started
            </a>
            <a href="#" className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
              We provide top-notch solutions tailored to your needs.
            </p>
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Responsive Design</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our websites look great on all devices, from mobile phones to desktop computers.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Fast Performance</h3>
                <p className="mt-2 text-base text-gray-500">
                  Optimized for speed to ensure your visitors have a seamless experience.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">SEO Optimized</h3>
                <p className="mt-2 text-base text-gray-500">
                  Built with search engines in mind to help your site rank better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-600">Contact us today.</span>
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="#" className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Get Started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 inline-flex rounded-md shadow">
              <a href="#" className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <div className="text-white text-xl font-bold">YourBrand</div>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-center md:text-right text-base text-gray-400">
                &copy; 2025 YourBrand. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}