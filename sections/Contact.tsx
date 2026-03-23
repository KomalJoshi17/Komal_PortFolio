"use client";

import { useState } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Home,
  Mail,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
<section
  id="contact"
  className="scroll-mt-12 min-h-screen flex flex-col justify-center px-6 
  bg-white text-black 
  dark:bg-black dark:text-white"
>
      <div className="max-w-4xl mx-auto text-center w-full">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch ✉️
        </h1>

        <p className="text-neutral-400 mb-10">
          Have a project, idea, or just want to connect? Let’s talk.
        </p>
        <form
  className="rounded-2xl p-6 
  bg-white dark:bg-neutral-900/70 
  backdrop-blur-xl 
  border border-gray-300 dark:border-neutral-800 
  shadow-xl space-y-5"
>

          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          className="w-full p-3 rounded-lg 
bg-white text-black 
dark:bg-neutral-800 dark:text-white 
border border-gray-300 dark:border-neutral-700 
focus:ring-2 focus:ring-blue-500 outline-none"/>

          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
           className="w-full p-3 rounded-lg 
bg-white text-black 
dark:bg-neutral-800 dark:text-white 
border border-gray-300 dark:border-neutral-700 
focus:ring-2 focus:ring-blue-500 outline-none"/>

          <textarea
            placeholder="Your Message"
            rows={5}
            required
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full p-3 rounded-lg 
bg-white text-black 
dark:bg-neutral-800 dark:text-white 
border border-gray-300 dark:border-neutral-700 
focus:ring-2 focus:ring-blue-500 outline-none"/>

          <ShimmerButton type="submit" className="w-full">
            {loading ? "Sending..." : "Send Message 🚀"}
          </ShimmerButton>

          {status === "success" && (
            <p className="text-green-400 text-sm">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm">
              ❌ Failed to send message. Try again.
            </p>
          )}
        </form>

        <div className="mt-12 flex justify-center">
           <Dock className="bg-white dark:bg-neutral-900/70 backdrop-blur-xl border border-gray-300 dark:border-neutral-800 shadow-lg">

            <DockIcon>
              <button
                onClick={() =>
                  document.getElementById("home")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                <Home className="w-5 h-5" />
              </button>
            </DockIcon>

            <DockIcon>
              <a href="mailto:moudgillkomal6@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </DockIcon>

            <DockIcon>
              <a href="https://linkedin.com/in/komal-joshi10" target="_blank">
                <Linkedin className="w-5 h-5" />
              </a>
            </DockIcon>

            <DockIcon>
              <a href="https://instagram.com/komaljoshi.17" target="_blank">
                <Instagram className="w-5 h-5" />
              </a>
            </DockIcon>

            <DockIcon>
              <a href="https://github.com/KomalJoshi17" target="_blank">
                <Github className="w-5 h-5" />
              </a>
            </DockIcon>

          </Dock>
        </div>
      </div>
    </section>
  );
}