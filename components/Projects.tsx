'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern online shopping experience with seamless checkout',
    tech: ['Next.js', 'Stripe', 'Tailwind'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics platform with real-time data visualization',
    tech: ['React', 'TypeScript', 'D3.js'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Portfolio Site',
    description: 'Creative portfolio showcasing photography and design',
    tech: ['Next.js', 'Framer Motion', 'Sanity'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Mobile App',
    description: 'Cross-platform mobile application for social networking',
    tech: ['React Native', 'Firebase', 'Redux'],
    gradient: 'from-green-500 to-emerald-500',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Selected Work</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16">
            Projects that push boundaries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
