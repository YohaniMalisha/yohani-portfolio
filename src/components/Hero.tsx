import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Code2,
  Briefcase,
  Cpu,
} from "lucide-react";
import { Button } from "./ui/button";
import { ProfileImage } from "./ProfileImage";

export function Hero() {
  const stats = [
    {
      icon: Briefcase,
      label: "Experience",
      value: "2+ Years",
      details:
        "Total project experience: ~3–4 years.\n1+ years professional experience with internship.",
    },
    { icon: Code2, label: "Projects", value: "15+" },
    { icon: Cpu, label: "Technologies", value: "16+" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />

              {/* Image container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-900 bg-gray-800">
                <ProfileImage
                  src="/assets/profile.jpg"
                  alt="K.D Yohani Malisha Wimalasena"
                  initials="YW"
                  className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Decorative rings */}
              <div className="absolute -inset-4 border-2 border-blue-500/20 rounded-full animate-float" />
              <div
                className="absolute -inset-8 border border-purple-500/10 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </motion.div>

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/50 rounded-full text-blue-300 backdrop-blur-sm">
              Associate Frontend Developer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl mb-4"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 animate-gradient-shift">
              Yohani Wimalasena
            </span>
          </motion.h1>

          {/* Professional tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting exceptional digital experiences with modern web
            technologies. Passionate about creating responsive, user-friendly
            applications using React, TypeScript, and modern development
            practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 animate-pulse-glow"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-blue-500 px-8"
              asChild
            >
              <a
                href="/assets/Associate%20Frontend%20Developer%20(2).pdf"
                download
              >
                <Download className="mr-2" size={18} />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass-effect rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <stat.icon className="mx-auto mb-2 text-blue-400" size={28} />
                <div className="text-2xl md:text-3xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
                {stat.label === "Experience" && stat.details && (
                  <div className="text-xs text-gray-400 mt-2 whitespace-pre-line">
                    {stat.details}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/yohani-wimalasena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/yohaniwimalasena45a360214/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:wmalishawimalasena@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
            >
              <Mail size={28} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
