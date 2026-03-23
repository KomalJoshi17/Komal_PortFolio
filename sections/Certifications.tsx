"use client";

import Image from "next/image";

const certifications = [
  {
    title: "Unlocking DSA with C",
    issuer: "CSE Pathshala",
    date: "2024",
    image: "/certificates/cse-dsa.png",
    link: "/certificates/cse-dsa.png",
    skills: ["C", "DSA"],
  },
  {
    title: "100% Job Ready DSA Course",
    issuer: "LearnYard",
    date: "2024",
    image: "/certificates/learnyard-dsa.png",
    link: "/certificates/learnyard-dsa.png",
    skills: ["DSA", "C++", "Logic"],
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "2025",
    image: "/certificates/nptel-cloud.png",
    link: "/certificates/nptel-cloud.png",
    skills: ["Cloud", "Virtualization", "Networking"],
  },
  {
    title: "PEP Program (DSA Module)",
    issuer: "LPU / byteXL",
    date: "2025",
    image: "/certificates/pep-dsa.png",
    link: "/certificates/pep-dsa.png",
    skills: ["DSA", "Problem Solving"],
  },
  {
    title: "Advanced React",
    issuer: "Meta (Coursera)",
    date: "2025",
    image: "/certificates/meta-react.png",
    link: "/certificates/meta-react.png",
    skills: ["React", "Hooks", "Frontend"],
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta (Coursera)",
    date: "2025",
    image: "/certificates/meta-frontend.png",
    link: "/certificates/meta-frontend.png",
    skills: ["HTML", "CSS", "JS"],
  },
  {
    title: "Low Level Design",
    issuer: "LearnYard",
    date: "2025",
    image: "/certificates/lld.png",
    link: "/certificates/lld.png",
    skills: ["OOP", "System Design"],
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "March 2026",
    image: "/certificates/oracle-ai.png",
    link: "/certificates/oracle-ai.png",
    skills: ["Cloud", "AI Basics", "OCI"],
  },
  {
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "March 2026",
    image: "/certificates/oracle-data.png",
    link: "/certificates/oracle-data.png",
    skills: ["Database", "SQL", "Data Platform"],
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-20 py-24 px-6 bg-white dark:bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black dark:text-white">
          Certifications 🏆
        </h1>

        <p className="text-center text-neutral-600 dark:text-neutral-400 mb-16 max-w-2xl mx-auto">
          Verified achievements demonstrating my skills and continuous learning journey.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((cert, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden
              bg-white dark:bg-neutral-950
              border border-neutral-200 dark:border-neutral-800
              hover:scale-[1.05] hover:-translate-y-2
              hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]
              transition duration-500"
            >
              <div className="relative w-full h-44 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 dark:bg-black/40 group-hover:bg-black/50 transition" />
              </div>
              <div className="p-5">

                <h2 className="text-lg font-semibold text-black dark:text-white group-hover:text-blue-400 transition">
                  {cert.title}
                </h2>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {cert.issuer} • {cert.date}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full 
                      bg-blue-500/20 text-blue-500 dark:text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  className="inline-block mt-4 text-sm px-4 py-2 rounded-lg
                  bg-blue-500/20 text-blue-500 dark:text-blue-400
                  hover:bg-blue-500/30
                  hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                  transition duration-300"
                >
                  🔗 Verify Certificate →
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
