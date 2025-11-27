import type { ProfileKey } from "./profiles";

export interface Project {
  title: string;
  context: string;
  problem: string;
  approach: string;
  outcome: string;
  tags?: string[];
  profile: ProfileKey;
}

// Cybersecurity projects
export const cyberProjects: Project[] = [
  {
    profile: "cyber",
    title: "Nokia EDR Automation Incident",
    context: "Nokia · Graduate apprentice security role",
    problem:
      "An automated Ansible-based EDR and logging rollout failed due to network connectivity issues, leaving some endpoints unmanaged.",
    approach:
      "Investigated the failing playbook runs, confirmed hosts were unreachable due to ping/network issues, coordinated with the team to restore connectivity, then re-ran the playbooks and verified successful agent and logging deployment.",
    outcome:
      "Restored consistent EDR and logging coverage on affected machines and received positive feedback from the manager for identifying root cause and validating the fix.",
    tags: ["Microsoft Defender", "Ansible", "EDR", "Automation"],
  },
  {
    profile: "cyber",
    title: "Ransomware Financial Impact Analysis (MediSecure-style)",
    context: "MSc Cyber Security Management · Coursework",
    problem:
      "Assess the business and financial impact of a ransomware incident on a healthcare-related organisation and propose risk-driven controls.",
    approach:
      "Analysed threat landscape and assets, modelled downtime and recovery scenarios, and estimated direct/indirect cost impacts using realistic assumptions. Structured the report with risk tables and clear recommendations for controls and budgeting.",
    outcome:
      "Produced a structured, management-ready report linking technical risk to financial impact and investment decisions, reinforcing skills in risk communication.",
    tags: ["Ransomware", "Risk analysis", "Healthcare", "Financial impact"],
  },
  {
    profile: "cyber",
    title: "Homelab, TryHackMe & Bug Bounty Practice",
    context: "Self-study · VMware, TryHackMe, Bugcrowd",
    problem:
      "Build practical skills for both blue-team and offensive work beyond theory, using safe environments.",
    approach:
      "Set up multiple VMs in VMware for experimenting with tools and configurations. Completed TryHackMe rooms and joined Bugcrowd programs to practise reconnaissance and vulnerability discovery within legal scopes.",
    outcome:
      "Improved familiarity with tooling, workflows and attacker/defender mindset, feeding directly into better decision-making in coursework and future roles.",
    tags: ["Homelab", "TryHackMe", "Bug bounty"],
  },
];

// AI & Automation projects
export const aiProjects: Project[] = [
  {
    profile: "ai",
    title: "ML with Python Training Project",
    context: "Online training · Machine Learning with Python",
    problem:
      "Understand and implement core ML algorithms for a small dataset using Python.",
    approach:
      "Worked through a structured ML-with-Python course, implementing supervised learning tasks such as classification and regression in notebooks, focusing on data preprocessing and evaluation.",
    outcome:
      "Gained confidence with ML fundamentals and Python tooling that can be combined with automation and security use-cases.",
    tags: ["Python", "Machine Learning"],
  },
  {
    profile: "ai",
    title: "Zoho ML Internship – Data Analysis & Workflow Support",
    context: "Zoho · Machine learning internship",
    problem:
      "Support data analysis and ML-related tasks inside Zoho, helping improve workflows and insights.",
    approach:
      "Used Python and Zoho tooling to clean and explore datasets, applied basic ML and statistical techniques where appropriate, and supported reporting and decision-making.",
    outcome:
      "Developed an understanding of how ML concepts are applied inside a real organisation and how analysis connects to business workflows.",
    tags: ["Zoho", "Data analysis", "ML internship"],
  },
  {
    profile: "ai",
    title: "Automation Bots, Scrapers & Notifications",
    context: "Personal projects",
    problem:
      "Reduce repetitive manual checking of online information and notifications.",
    approach:
      "Built small Python-based scrapers and Telegram bots that monitor sources and push notifications, experimenting with scheduling and error handling.",
    outcome:
      "Eliminated manual polling for specific tasks and created a base for more advanced AI-assisted automations later.",
    tags: ["Python", "Bots", "Automation"],
  },
];

// Prompt engineering systems
export const promptSystems: Project[] = [
  {
    profile: "prompt",
    title: "Cyber Risk Report Workflow",
    context: "MSc cyber assignments · ChatGPT, Gemini, Perplexity",
    problem:
      "Turn complex case briefs (like ransomware incidents) into clear, structured cyber risk reports without losing accuracy or structure.",
    approach:
      "Designed a multi-step prompt system: clarify brief → extract assets/threats → build risk tables → draft sections → critique against marking rubric and refine. Used role prompts and structured outputs.",
    outcome:
      "Reduced time to produce high-quality drafts while keeping control of structure and accuracy, improving clarity of cyber coursework deliverables.",
    tags: ["Cybersecurity", "Research workflow", "Risk reports"],
  },
  {
    profile: "prompt",
    title: "ATS CV & Job Description Analyzer",
    context: "Job search support · multiple LLM tools",
    problem:
      "Tailor CV bullets and cover letters quickly to different job descriptions without losing truth or clarity.",
    approach:
      "Built prompts that extract key requirements from a JD, compare them with CV content, highlight gaps, and generate suggested bullet rewrites and cover letter structures with clear constraints.",
    outcome:
      "Enabled faster, more targeted applications while keeping human control over the final CV and cover letters.",
    tags: ["ATS", "Job applications", "Prompt systems"],
  },
  {
    profile: "prompt",
    title: "AI Research & NotebookLM Workflow",
    context: "Research tasks · NotebookLM, Perplexity, ChatGPT",
    problem:
      "Quickly digest multiple documents and articles for topics like AI in education and cybersecurity, and turn them into structured notes.",
    approach:
      "Used NotebookLM and Perplexity to ingest sources, then designed prompts that request structured summaries, comparisons and critique, followed by a final synthesis pass in ChatGPT.",
    outcome:
      "Turned scattered reading into organised insights and outlines suitable for assignments or future writing.",
    tags: ["Research", "NotebookLM", "Perplexity"],
  },
];

// Community & Events case-studies
export const communityEvents: Project[] = [
  {
    profile: "community",
    title: "Ravensbourne Open Day Operations",
    context: "Ravensbourne University · Student ambassador",
    problem:
      "Support large open day events so visitors can register smoothly, find their way and get course questions answered.",
    approach:
      "Worked on registration desks, guided building tours, handled wayfinding and answered common questions from prospective students and families.",
    outcome:
      "Helped keep visitor flow smooth and reduced confusion for guests and staff during high-traffic days.",
    tags: ["Open day", "Wayfinding", "Registration"],
  },
  {
    profile: "community",
    title: "Graduation Day Support",
    context: "Ravensbourne University · Events support",
    problem:
      "Assist with graduation ceremonies involving many students and guests while keeping timings and flow under control.",
    approach:
      "Supported queue and seating management, gave directions, and provided general assistance to staff and attendees during the event.",
    outcome:
      "Contributed to a well-run, positive experience for graduates and their families under time pressure.",
    tags: ["Graduation", "Events", "Operations"],
  },
  {
    profile: "community",
    title: "Cultural Fest & Rotaract Projects",
    context: "Previous institution · Rotaract & NSS",
    problem:
      "Organise and lead student events and volunteer projects, including cultural fests with hundreds of attendees.",
    approach:
      "Helped plan logistics, coordinate volunteers, manage registrations and support programme flow for festivals and community projects.",
    outcome:
      "Recognised with roles such as Rotaract Vice President and NSS Best Volunteer, demonstrating trust and leadership in community settings.",
    tags: ["Leadership", "Festivals", "Community"],
  },
];
