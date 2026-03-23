"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";

import {
  IconHome,
  IconUser,
  IconMessage,
  IconBriefcase,
  IconCertificate,
  IconCode,
} from "@tabler/icons-react";

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconCode className="h-4 w-4" />,
    },
    {
      name: "Work",
      link: "#work",
      icon: <IconBriefcase className="h-4 w-4" />,
    },
    {
      name: "Certification",
      link: "#certifications",
      icon: <IconCertificate className="h-4 w-4" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconCode className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}