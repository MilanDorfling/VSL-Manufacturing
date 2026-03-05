import React, { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import milanimg from '../assets/pictures/portfolio.jpeg.jpg'

export const DevelopersPage = () => {
  const [showEmail, setShowEmail] = useState(false)
  
  const developers = [
    {
      id: 1,
      name: "Milan Dorfling",
      title: "Frontend Developer",
      description: "Passionate about building performant, accessible, and beautifully crafted user interfaces. Focused on modern web technologies including React, TypeScript, and design systems that scale.",
      avatar: milanimg,
      social: {
        github: "https://github.com/MilanDorfling",
        linkedin: "https://www.linkedin.com/in/milan-dorfling-93a02a265/",
        email: "milandorfling80@gmail.com"
      }
    }
  ]

  return (
    <div className="w-full min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-cyan-500 font-semibold text-sm tracking-widest mb-4 uppercase">Meet the Team</p>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              The people behind the code.
            </h1>
            <div className="w-16 h-1 bg-cyan-500"></div>
          </div>
        </div>

        {/* Developer Cards Grid */}
        <div className="grid grid-cols-1 gap-8">
          {developers.map((dev) => (
            <div key={dev.id} className="bg-white dark:bg-zinc-800 rounded-lg border border-gray-200 dark:border-zinc-700 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar - Left side */}
                <div className="shrink-0">
                  <img 
                    src={dev.avatar} 
                    alt={dev.name}
                    className="w-32 h-32 rounded-full bg-gray-100 dark:bg-zinc-700 p-1"
                  />
                </div>

                {/* Content - Right side */}
                <div className="flex-1 flex flex-col">
                  {/* Name and Title */}
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                    {dev.name}
                  </h3>
                  <p className="text-cyan-500 font-semibold text-xs tracking-widest mb-4 uppercase">
                    {dev.title}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                    {dev.description}
                  </p>

                  {/* Social Icons - Bottom */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-zinc-700">
                    <a 
                      href={dev.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-gray-400 hover:bg-zinc-900 hover:text-cyan-400 transition-all duration-200"
                      title="GitHub"
                    >
                      <Github size={16} />
                    </a>
                    <a 
                      href={dev.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-gray-400 hover:bg-zinc-900 hover:text-cyan-400 transition-all duration-200"
                      title="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                    <button
                      onClick={() => setShowEmail(!showEmail)}
                      className="p-3 rounded-full bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-gray-400 hover:bg-zinc-900 hover:text-cyan-400 transition-all duration-200 flex items-center justify-center"
                      title="Email"
                    >
                      {showEmail ? (
                        <span className="text-xs font-semibold">{dev.social.email}</span>
                      ) : (
                        <Mail size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
