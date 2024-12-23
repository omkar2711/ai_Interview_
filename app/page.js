import React from 'react';
import { Bot, Users, Brain, CheckCircle, ArrowRight, Play, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Branding */}
          <div className="flex items-center space-x-2 text-[#e62d3c]">
            <Bot className="w-8 h-8" />
            <span className="font-bold text-xl">InterviewAI</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <button className="bg-[#e62d3c] text-white px-4 py-2 rounded-lg hover:bg-[#d41e2d] transition-colors">
              <a
                href="/dashboard">
                Get Started
              </a>
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Master Your Interviews with
                <span className="text-[#e62d3c]"> AI-Powered</span> Practice
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Practice interviews with our advanced AI system. Get real-time feedback, improve your confidence, and land your dream job.
              </p>
              <div className="flex space-x-4">
                <a
                  href="/dashboard">
                  <button className="flex items-center space-x-2 px-8 py-4 rounded-lg transition-colors bg-[#e62d3c] text-white hover:bg-[#d41e2d]">

                    Start Now     <ArrowRight className="w-5 h-5" />

                  </button>

                </a>

              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <img
                src="https://www.upgrad.com/_ww3-next/image/?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FChatgpt-ab8fc76eda1146809943b9d86cd2a465.webp&w=3840&q=75"
                alt="Professional interview"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold">Get Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose InterviewAI?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-[#e62d3c]" />,
                  title: 'AI-Powered Feedback',
                  description: 'Get instant, detailed feedback on your responses, body language, and speaking patterns.',
                },
                {
                  icon: <Users className="w-8 h-8 text-[#e62d3c]" />,
                  title: 'Industry Specific',
                  description: 'Practice interviews tailored to your industry, from tech to finance to healthcare.',
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-[#e62d3c]" />,
                  title: 'Proven Results',
                  description: '90% of our users report improved confidence and better interview performance.',
                },
              ].map(({ icon, title, description }) => (
                <FeatureCard key={title} icon={icon} title={title} description={description} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="w-6 h-6" />
                <span className="font-bold text-lg">InterviewAI</span>
              </div>
              <p className="text-gray-400">
                Empowering candidates with AI-powered interview preparation.
              </p>
            </div>
            {/* {[
              { title: 'Product', links: ['Features', 'Pricing', 'Enterprise'] },
              { title: 'Company', links: ['About', 'Careers', 'Blog'] },
              { title: 'Support', links: ['Help Center', 'Contact', 'Privacy'] },
            ].map(({ title, links }) => (
              <div key={title}>
                <h3 className="font-bold mb-4">{title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))} */}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 InterviewAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-pink-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;