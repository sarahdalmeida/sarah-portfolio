import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import codeEqualizeImage from "./assets/code-equalize.png";
import interviewPrepImage from "./assets/interviewprep-ai.png";
import learnifyImage from "./assets/learnify.png";
import resendIcon from "./assets/resend_icon.png";
import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaDatabase,
} from "react-icons/fa";

import { SiC, SiMongodb, SiGithubcopilot, SiExpress } from "react-icons/si";
import { SiGmail } from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const navItems = [
  { label: "Hero", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "SQL", icon: FaDatabase, color: "#4479A1" },
    ],
  },

  {
    title: "Frontend",
    items: [{ name: "React.js", icon: FaReact, color: "#61DAFB" }],
  },

  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
    ],
  },

  {
    title: "Database",
    items: [{ name: "MongoDB", icon: SiMongodb, color: "#47A248" }],
  },

  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#FFFFFF" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    ],
  },
];

const projectEntries = [
  {
    name: "Code Equalize",
    description:
      "An AI-powered VS Code extension that uses RAG to analyze programming errors and provide simple, contextual explanations in regional languages, helping students understand and fix code without leaving their editor.",
    stack: [
      "TypeScript",
      "Node.js",
      "VS Code Extension API",
      "ChromaDB",
      "Gemini API",
      "Google Translate API",
    ],
    status: "Completed",
    image: codeEqualizeImage,
    imageAspect: "aspect-[3/2]",
    github: "https://github.com/sarahdalmeida/CODE-EQUALIZE",
  },
  {
    name: "InterviewPrep-AI",
    description:
      "An AI-powered interview preparation platform that generates role-specific interview questions based on the selected role and difficulty level. It helps users practice effectively and prepare with confidence.",
    stack: ["HTML", "CSS", "JavaScript", "Gemini API"],
    status: "Completed",
    image: interviewPrepImage,
    imageAspect: "aspect-[16/7]",
    github: "https://github.com/sarahdalmeida/INTERVIEWPREP-AI",
  },
  {
    name: "Learnify",
    description:
      "An AI-powered learning platform that helps students turn their study material into concise summaries, interactive flashcards, and quizzes, with secure authentication and personalized learning in one place.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "JWT Authentication",
    ],
    status: "Completed",
    image: learnifyImage,
    github: "https://github.com/sarahdalmeida/LEARNIFY",
  },
];

const educationEntries = [
  {
    institution: "Visvesvaraya Technological University, Karnataka",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    duration: "2023 – 2027",
    cgpa: "8.93/10",
  },
];

const certifications = [
  {
    title: "AI Literacy",
    issuer: "IBM SkillsBuild",
    logo: "/assets/ibm_logo.png",
    date: "February 2026",
    description:
      "Foundational understanding of AI concepts, applications, and responsible use of artificial intelligence.",
    pdfUrl: "/certificates/AI-Literacy.pdf",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7494441837982654481/",
  },

  {
    title: "Databricks Fundamentals Accreditation",
    issuer: "Databricks Academy",
    logo: "/assets/databricks_logo.png",
    date: "August 2026",
    description:
      "Foundational understanding of Databricks and its data and AI platform.",
    pdfUrl: "/certificates/Databricks-Fundamentals.pdf",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7494623296215412736/",
  },

  {
    title: "Claude 101 – Foundations of Effective AI Interaction",
    issuer: "Anthropic",
    logo: "/assets/Anthropic_logo.png",
    date: "August 2026",
    description:
      "Foundational training in effective AI interaction and working with Claude.",
    pdfUrl: "/certificates/Claude-101.pdf",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7494443726698766336/",
  },

  {
    title: "Claude Code 101 – AI-Assisted Software Development",
    issuer: "Anthropic",
    logo: "assets/Anthropic_logo.png",
    date: "August 2026",
    description:
      "Foundational training in AI-assisted software development and using Claude Code to support the development workflow.",
    pdfUrl: "/certificates/Claude-Code-101.pdf",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7494622388672708608/",
  },
];

const certificationSlides = [
  certifications.slice(0, 3),
  certifications.slice(3, 4),
];

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [certificationIndex, setCertificationIndex] = useState(0);

  const currentProject = projectEntries[projectIndex];
  const currentCertification = certifications[certificationIndex];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSuccessFadingOut, setIsSuccessFadingOut] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(progress);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0.1 },
    );

    navItems.forEach(({ href }) => {
      const target = document.querySelector(href);
      if (target) observer.observe(target);
    });

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!showSuccess) return;

    setIsSuccessFadingOut(false);
    const fadeTimer = window.setTimeout(
      () => setIsSuccessFadingOut(true),
      3500,
    );
    const hideTimer = window.setTimeout(() => {
      setShowSuccess(false);
      setIsSuccessFadingOut(false);
    }, 4000);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [showSuccess]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please enter your message.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setShowSuccess(false);
      return;
    }

    setIsSending(true);
    setShowSuccess(false);

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);
      setShowSuccess(false);

      setErrors({
        submit: "Unable to send your message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--primary-text)]">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrollProgress > 0.02
            ? "border-[var(--border)] bg-[rgba(11,17,32,0.9)] shadow-[0_10px_40px_-24px_rgba(0,0,0,0.85)] backdrop-blur-[12px]"
            : "border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a
            href="#hero"
            className="brand-logo text-white"
            aria-label="Sarah D'Almeida home"
          >
            SD
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 md:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={
                  activeSection === item.href.replace("#", "")
                    ? "page"
                    : undefined
                }
                className={`relative py-2 text-sm text-[var(--secondary-text)] transition-colors duration-200 hover:text-white ${
                  activeSection === item.href.replace("#", "")
                    ? "font-bold text-white"
                    : "font-normal"
                }`}
              >
                <span className="link-underline">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
        <div
          className="h-px w-full bg-[var(--accent)] transition-transform duration-200"
          style={{ transform: `scaleX(${Math.max(scrollProgress, 0.02)})` }}
        />
      </header>

      <main>
        <section
          id="hero"
          className="mx-auto max-w-7xl px-4 pb-16 pt-28 md:px-8 md:pt-32"
        >
          <div className="grid items-end gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
            <Reveal className="max-w-[680px]">
              <div className="mb-6 flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.28em] text-[var(--secondary-text)]">
                <span className="h-px w-8 bg-[var(--accent)]" />
                Computer Science Engineering Student | Aspiring Full Stack
                Developer
              </div>
              <h1 className="max-w-[12ch] font-[Plus_Jakarta_Sans] text-[clamp(2.2rem,6vw,3.5rem)] font-bold leading-[1.04] text-white">
                Building. Learning. Growing.
              </h1>
              <p className="mt-5 max-w-[62ch] text-base leading-7 text-[var(--secondary-text)]">
                I'm Sarah D'Almeida, a fourth-year Computer Science Engineering
                student passionate about Full Stack Web Development and problem
                solving. I'm currently learning the MERN Stack, strengthening my
                programming fundamentals, and building projects that help me
                grow as a software developer.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="#projects" variant="teal">
                  View Projects
                </Button>

                <a
                  href="https://github.com/sarahdalmeida"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[8px] border border-[#24292f] bg-[#24292f] px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1f2328]"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/sarahdalmeida/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[8px] border border-[#0A66C2] bg-[#0A66C2] px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#004182]"
                >
                  <FaLinkedin className="text-lg" />
                  LinkedIn
                </a>

                <Button href="#contact" variant="secondary">
                  Contact
                </Button>
              </div>
            </Reveal>

            <Reveal className="relative overflow-hidden rounded-[14px] border border-[var(--border)] bg-[var(--surface)] px-6 py-6 shadow-[0_14px_50px_-28px_rgba(0,0,0,0.9)]">
              <div className="flex flex-col items-center justify-center rounded-[14px] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(62,123,250,0.14),rgba(167,139,250,0.10))] p-6 sm:p-8">
                <div className="flex aspect-square w-[280px] items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)] sm:w-[300px]">
                  <span className="text-center text-[10px] uppercase tracking-[0.22em] text-[var(--secondary-text)]">
                    Profile Photo
                  </span>
                </div>
                <div className="mt-6 text-center">
                  <h2 className="text-[clamp(1.6rem,2vw,2rem)] font-bold leading-none text-white">
                    Sarah D'Almeida
                  </h2>
                  <p className="mt-2 text-sm text-[var(--secondary-text)]">
                    CSE Student • Aspiring Developer
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <SectionHeading
            eyebrow="Skills"
            title="Technical Skills"
            description=""
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <Reveal
                key={group.title}
                className="rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_12px_30px_-20px_rgba(62,123,250,0.8)]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary-text)]">
                  {group.title}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-5">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div key={skill.name} className="flex items-center gap-3">
                        <Icon
                          className="h-6 w-6 shrink-0"
                          style={{ color: skill.color }}
                          aria-hidden="true"
                        />

                        <span className="whitespace-nowrap text-sm font-medium text-white">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-4xl px-4 py-16 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="About" title="About Me" description="" />
            <div className="mt-6 rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-base leading-8 text-[var(--secondary-text)]">
                I'm Sarah D'Almeida, a Computer Science Engineering student with
                a genuine interest in software development and practical problem
                solving. I enjoy building full-stack applications, improving my
                fundamentals, and exploring how AI can be used to create useful,
                real-world solutions. My work is driven by curiosity, continuous
                learning, and a desire to turn ideas into projects that make an
                impact.
              </p>
              <blockquote className="mt-6 border-l border-[var(--accent)] pl-4 text-[clamp(1.35rem,2vw,1.7rem)] font-semibold text-[var(--success)]">
                Learning by building, improving by doing.
              </blockquote>
            </div>
          </Reveal>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Projects"
              title="Selected Work"
              description="A few things I've built while learning and exploring full-stack development and AI."
            />
          </div>

          <div className="relative mx-auto mt-8 px-12 w-full">
            {/* Left Arrow */}
            <button
              type="button"
              onClick={() => {
                document.getElementById("projects-carousel")?.scrollBy({
                  left: -380,
                  behavior: "smooth",
                });
              }}
              aria-label="Previous projects"
              className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-xl text-white shadow-lg transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              ←
            </button>

            {/* Carousel */}
            <div
              id="projects-carousel"
              className="flex flex-col gap-6 lg:flex-row lg:gap-6 px-1 pb-4"
            >
              {projectEntries.map((project) => (
                <Reveal
                  key={project.name}
                  className="w-full overflow-hidden rounded-[14px] border border-[var(--border)] bg-[var(--surface)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_12px_35px_-20px_rgba(62,123,250,0.8)] lg:w-0 lg:flex-1"
                >
                  <div className="flex h-[260px] items-center justify-center overflow-hidden border-b border-[var(--border)] bg-[#0b1018]">
                    <img
                      src={project.image}
                      alt={`${project.name} project screenshot`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="flex min-h-[290px] flex-col p-5">
                    <div className="mb-2 text-xs uppercase tracking-[0.24em] text-[var(--success)]">
                      {project.status}
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {project.name}
                    </h3>
                    <p className="mt-5 min-h-[150px] text-sm leading-6 text-[var(--secondary-text)]">
                      {" "}
                      {project.description}
                    </p>

                    <div className="mt-5 flex h-[112px] flex-wrap content-start gap-2">
                      {" "}
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-[999px] border border-[var(--border)] px-3 py-1 text-xs text-[var(--secondary-text)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-[8px] border border-[var(--border)] px-3 py-2 text-sm text-white transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        GitHub <FiGithub />
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={() => {
                document.getElementById("projects-carousel")?.scrollBy({
                  left: 380,
                  behavior: "smooth",
                });
              }}
              aria-label="Next projects"
              className="absolute right-0 top-1/2 z-10 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-xl text-white shadow-lg transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              →
            </button>
          </div>
        </section>

        <section
          id="education"
          className="mx-auto max-w-5xl px-4 py-16 md:px-8"
        >
          <SectionHeading
            eyebrow="Education"
            title="Education"
            description=""
          />
          <div className="mt-8 space-y-4">
            {educationEntries.map((entry) => (
              <Reveal
                key={entry.institution}
                className="rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6"
              >
                <div className="space-y-3">
                  <div className="text-lg font-semibold text-white">
                    {entry.degree}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-[var(--secondary-text)]">
                    <img
                      src="/assets/VTU_logo.png"
                      alt="Visvesvaraya Technological University logo"
                      className="h-8 w-8 object-contain"
                    />
                    <span>
                      Visvesvaraya Technological University, Karnataka
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-[var(--secondary-text)] md:flex-row md:gap-6">
                    <span>2023–2027</span>
                    <span>CGPA: {entry.cgpa}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="certifications"
          className="mx-auto max-w-7xl px-4 py-16 md:px-8"
        >
          <SectionHeading
            eyebrow="Certifications"
            title="Certifications"
            description="Courses and credentials I've completed."
          />

          <div className="relative mx-auto mt-8 max-w-5xl px-2 sm:px-8 md:px-12">
            {" "}
            {/* Left Arrow */}
            <button
              type="button"
              onClick={() =>
                setCertificationIndex(
                  (certificationIndex - 1 + certificationSlides.length) %
                    certificationSlides.length,
                )
              }
              aria-label="Previous certification"
              className="absolute left-[-0.5rem] sm:left-[-2.5rem] top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-lg text-white shadow-lg transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              ←
            </button>
            {/* Certification Card */}
            {/* Certification Cards */}
            <div
              key={certificationIndex}
              className="animate-[slideIn_250ms_ease-out] grid gap-5 md:grid-cols-3"
            >
              {certificationSlides[certificationIndex].map((certification) => (
                <div
                  key={certification.title}
                  className="flex h-[38 0px] flex-col overflow-hidden rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_12px_35px_-20px_rgba(62,123,250,0.8)]"
                >
                  {/* Issuer */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white p-1.5">
                      <img
                        src={certification.logo}
                        alt={`${certification.issuer} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <span className="text-sm font-medium text-[var(--accent)]">
                      {certification.issuer}
                    </span>
                  </div>

                  {/* Certification name */}
                  <h3 className="mt-4 text-xl font-semibold leading-7 text-white">
                    {certification.title}
                  </h3>

                  {/* Date */}
                  <div className="mt-2 text-sm text-[var(--secondary-text)]">
                    Issued on: {certification.date}
                  </div>

                  {/* Description */}
                  {certification.description && (
                    <p className="mt-4 text-sm leading-6 text-[var(--secondary-text)]">
                      {certification.description}
                    </p>
                  )}

                  {/* Buttons */}
                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {certification.pdfUrl && (
                      <a
                        href={certification.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-[9px] bg-[var(--accent)] px-3 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                      >
                        View Certificate ↗
                      </a>
                    )}

                    {certification.linkedinUrl && (
                      <a
                        href={certification.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-[9px] border border-[#8B5CF6]/40 bg-[#8B5CF6]/10 px-3 py-2 text-sm font-semibold text-[#C4B5FD] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/20"
                      >
                        LinkedIn ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Right Arrow */}
            <button
              type="button"
              onClick={() =>
                setCertificationIndex(
                  (certificationIndex + 1) % certificationSlides.length,
                )
              }
              aria-label="Next certification"
              className="absolute right-[-0.5rem] sm:right-[-2.5rem] top-1/2 z-10 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-lg text-white shadow-lg transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              →
            </button>
            {/* Carousel Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {certificationSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCertificationIndex(index)}
                  aria-label={`View certification slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    index === certificationIndex
                      ? "w-7 bg-[var(--accent)]"
                      : "w-2.5 bg-[var(--border)] hover:bg-[var(--secondary-text)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-4 py-16 md:px-8">
          <Reveal>
            <div className="text-center">
              <div className="text-xs uppercase tracking-[0.24em] text-[var(--secondary-text)]">
                Contact
              </div>

              <h2 className="mt-3 font-[Plus_Jakarta_Sans] text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-white">
                Get In Touch
              </h2>

              <p className="mx-auto mt-4 max-w-[58ch] text-sm leading-7 text-[var(--secondary-text)]">
                Have a question, opportunity, or just want to connect? Feel free
                to send me a message.
              </p>
            </div>
          </Reveal>

          <Reveal className="mx-auto mt-8 w-full max-w-[500px] rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6">
            <div className="text-xs uppercase tracking-[0.24em] text-[var(--secondary-text)]">
              CONTACT FORM
            </div>

            <h3 className="mt-3 font-[Plus_Jakarta_Sans] text-[clamp(1.2rem,2vw,1.45rem)] font-semibold text-white">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {showSuccess && (
                <div
                  className="mb-5 flex items-start gap-3 rounded-[10px] border border-[var(--success)]/30 bg-[var(--success)]/10 px-4 py-3 text-sm text-[var(--success)]"
                  role="status"
                >
                  <span className="mt-0.5 font-semibold">✓</span>

                  <span>
                    Message sent successfully. I'll get back to you soon.
                  </span>
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full rounded-[10px] border border-[var(--border)] bg-[rgba(11,17,32,0.9)] px-3 py-3 text-sm text-white placeholder:text-[var(--secondary-text)] placeholder:opacity-80 outline-none transition focus:border-[var(--accent)]"
                />

                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-2 text-sm text-[var(--accent-pink)]"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-[10px] border border-[var(--border)] bg-[rgba(11,17,32,0.9)] px-3 py-3 text-sm text-white placeholder:text-[var(--secondary-text)] placeholder:opacity-80 outline-none transition focus:border-[var(--accent)]"
                />

                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-2 text-sm text-[var(--accent-pink)]"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  autoComplete="off"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full rounded-[10px] border border-[var(--border)] bg-[rgba(11,17,32,0.9)] px-3 py-3 text-sm text-white placeholder:text-[var(--secondary-text)] placeholder:opacity-80 outline-none transition focus:border-[var(--accent)]"
                />

                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-2 text-sm text-[var(--accent-pink)]"
                  >
                    {errors.message}
                  </p>
                )}

                {errors.submit && (
                  <p className="mt-3 text-sm text-[var(--accent-pink)]">
                    {errors.submit}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="mt-5 w-full rounded-[10px] bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-80"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>

                <div className="mt-3 flex justify-end">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[rgba(11,17,32,0.6)] px-3 py-1.5">
                    <img
                      src={resendIcon}
                      alt="Resend"
                      className="h-4 w-4 object-contain mix-blend-screen"
                    />

                    <span className="text-[10px] font-medium tracking-wide text-[var(--secondary-text)]">
                      Powered by{" "}
                      <span className="font-semibold text-white">Resend</span>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </Reveal>
        </section>
      </main>
      <footer className="border-t border-[var(--border)] px-4 py-8 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 md:grid-cols-3">
          <div className="text-center text-sm text-[var(--secondary-text)] md:text-left">
            © 2026 Sarah D'Almeida
          </div>

          <div className="flex items-center justify-center gap-5 text-sm text-[var(--secondary-text)]">
            <a
              href="https://github.com/sarahdalmeida"
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sarahdalmeida/"
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              LinkedIn
            </a>
          </div>

          <div></div>
        </div>
      </footer>
    </div>
  );
}

function Reveal({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs uppercase tracking-[0.24em] text-[var(--secondary-text)]">
        {eyebrow}
      </div>
      <h2 className="mt-3 font-[Plus_Jakarta_Sans] text-[clamp(1.7rem,3vw,2.2rem)] font-semibold text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-[64ch] text-sm leading-7 text-[var(--secondary-text)]">
          {description}
        </p>
      )}
    </div>
  );
}

function Button({ href, children, variant = "primary" }) {
  const isSecondary = variant === "secondary";
  const isTeal = variant === "teal";

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-[8px] px-4 py-3 text-sm font-semibold transition-all duration-150 ${
        isTeal
          ? "bg-[#0F766E] text-white hover:-translate-y-0.5 hover:bg-[#115E59]"
          : isSecondary
            ? "border border-[var(--border)] bg-transparent text-white hover:border-[var(--accent)]"
            : "bg-[var(--accent)] text-white hover:-translate-y-0.5"
      }`}
    >
      {children} <FiArrowDownRight />
    </a>
  );
}

export default App;
