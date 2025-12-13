'use client'

import { motion } from 'framer-motion'

const skills = [
  'Web Development',
  'UI/UX Design',
  'Brand Strategy',
  'Digital Marketing',
  'E-Commerce',
  'Mobile Apps',
]

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">About</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                We're a creative digital studio focused on delivering exceptional
                web experiences. Our team combines design thinking with technical
                expertise to build products that matter.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                From startups to established brands, we partner with ambitious
                clients to transform ideas into digital reality.
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl font-bold mb-2">10+</div>
                <div className="text-xl">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
