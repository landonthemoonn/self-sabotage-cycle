'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-20 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Let's Talk</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Have a project in mind? We'd love to hear from you. Get in touch
                and let's create something amazing together.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <a
                    href="mailto:hello@landon.studio"
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    hello@landon.studio
                  </a>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Social</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
