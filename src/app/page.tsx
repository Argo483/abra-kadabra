import {
  ArrowRightIcon,
  SparklesIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <SparklesIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Abra Kadabra
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              About
            </a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Magic Happens
            </span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">Here</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the power of Next.js and Tailwind CSS combined. Build
            beautiful, responsive web applications with modern design patterns
            and smooth animations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-1">
              <span className="flex items-center justify-center space-x-2">
                <span>Start Building</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="border-2 border-gray-300 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <RocketLaunchIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Lightning Fast
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built with Next.js for optimal performance and SEO. Your app will
              load in milliseconds.
            </p>
          </div>

          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Beautiful Design
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Styled with Tailwind CSS for modern, responsive design that looks
              great on any device.
            </p>
          </div>

          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CodeBracketIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Type Safe
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full TypeScript support ensures your code is robust and
              maintainable.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                99.9%
              </div>
              <div className="text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                50ms
              </div>
              <div className="text-gray-600 dark:text-gray-400">Load Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-400">Components</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Built with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
