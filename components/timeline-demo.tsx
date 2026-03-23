import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Start 🚀",
      content: (
        <div>
          <p className="mb-3 text-base md:text-lg font-medium">
            Began my journey into programming and problem-solving.
          </p>

          <ul className="space-y-1 text-sm md:text-base">
            <li>• Learned C, C++, Python</li>
            <li>• Built strong logic using DSA</li>
            <li>• Started solving LeetCode problems</li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">C++</span>
            <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">Python</span>
            <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">DSA</span>
          </div>
        </div>
      ),
    },

    {
      title: "Web Dev 🌐",
      content: (
        <div>
          <p className="mb-3 text-base md:text-lg font-medium">
            Entered web development and started building real UI projects.
          </p>

          <ul className="space-y-1 text-sm md:text-base">
            <li>• HTML, CSS, JavaScript</li>
            <li>• Built responsive UI</li>
            <li>• Learned React ecosystem</li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">React</span>
          </div>
        </div>
      ),
    },

    {
      title: "Full Stack ⚙",
      content: (
        <div>
          <p className="mb-3 text-base md:text-lg font-medium">
            Built full-stack applications with backend and authentication systems.
          </p>

          <ul className="space-y-1 text-sm md:text-base">
            <li>• Node.js & Express APIs</li>
            <li>• MongoDB & Mongoose</li>
            <li>• JWT & Google Authentication</li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="tag">Node.js</span>
            <span className="tag">MongoDB</span>
            <span className="tag">Auth</span>
          </div>

          <button
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="mt-5 px-4 py-2 text-sm rounded-lg 
            bg-blue-500/20 text-blue-400 
            hover:bg-blue-500/30 transition"
          >
            🔗 View My Projects →
          </button>
        </div>
      ),
    },

    {
      title: "Advanced 💎",
      content: (
        <div>
          <p className="mb-3 text-base md:text-lg font-medium">
            Focused on scalable and production-level applications.
          </p>

          <ul className="space-y-1 text-sm md:text-base">
            <li>• Next.js & TypeScript</li>
            <li>• Performance optimization</li>
            <li>• Clean architecture</li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="tag">Next.js</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Scalable</span>
          </div>
        </div>
      ),
    },

    {
      title: "Growth 🔥",
      content: (
        <div>
          <p className="mb-3 text-base md:text-lg font-medium">
            Continuously improving through coding, building, and learning.
          </p>

          <ul className="space-y-1 text-sm md:text-base">
            <li>• 500+ DSA problems solved</li>
            <li>• Active GitHub contributions</li>
            <li>• Strong consistency streak</li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="tag">LeetCode</span>
            <span className="tag">GitHub</span>
            <span className="tag">Consistency</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <Timeline data={data} />
    </div>
  );
}