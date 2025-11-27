export type ProfileKey = "cyber" | "ai" | "prompt" | "community";

export interface ProfileTileConfig {
  key: ProfileKey;
  title: string;
  subtitle: string;
  description: string;
}

export const profileTiles: ProfileTileConfig[] = [
  {
    key: "cyber",
    title: "Cybersecurity Profile",
    subtitle: "Analyst · Ethical Hacking Path",
    description:
      "Nokia security experience, Microsoft Defender EDR & Ansible automation, CEH/ISC2 track, bug bounty and homelab practice.",
  },
  {
    key: "ai",
    title: "AI & Automation Profile",
    subtitle: "Automation · ML Basics · RPA",
    description:
      "Python and ML-with-Python training, RPA tools (UiPath, Power Automate, n8n), AWS (S3/EC2) and small bots that remove boring manual work.",
  },
  {
    key: "prompt",
    title: "Prompt Engineer Profile",
    subtitle: "AI Workflows & Systems",
    description:
      "Designs multi-step, guardrailed prompts for research, cyber reports, ATS-ready CVs and AI-assisted automation – not just “chatting with AI”, but building repeatable systems.",
  },
  {
    key: "community",
    title: "Community & Events Profile",
    subtitle: "Events · Volunteering · Leadership",
    description:
      "Rotaract Vice President and NSS award winner, organiser of 500+ attendee cultural fests, and Ravensbourne student ambassador for open days, graduation and campus events.",
  },
];

export const heroCopy = {
  headline:
    "Cybersecurity, AI Automation & Prompt Engineering – one portfolio, four profiles.",
  subheadline:
    "I’m Gunavanth (“Guna”), an early-career cyber professional and AI workflow builder. I combine Nokia security experience, MSc Cyber Security Management at Ravensbourne, and hands-on event leadership to create systems that actually work in the real world.",
  primaryCtas: [
    { label: "View Cybersecurity Profile", target: "#profile-cyber" },
    { label: "View AI & Automation Profile", target: "#profile-ai" },
  ],
  helperLine:
    "Prefer another angle? You can also view me as a Prompt Engineer or Community & Events lead.",
};

export const sectionIntros: Record<
  ProfileKey,
  { heading: string; intro: string }
> = {
  cyber: {
    heading: "Cybersecurity · Analyst & Ethical Hacking Path",
    intro:
      "I’m building a career on the blue-team side first, then moving deeper into ethical hacking. I’ve spent roughly a year across Nokia security roles working with Microsoft Defender EDR, Ansible-based automation, OS hardening and logging. Around that, I’m studying CEH and ISC2 Certified in Cybersecurity, running a VMware homelab and learning through TryHackMe and bug bounty practice.",
  },
  ai: {
    heading: "AI & Automation · Security-Aware Workflows",
    intro:
      "On the AI side, I focus on practical automation: Python scripts, RPA tools and simple ML that make real tasks lighter. I’ve completed “Machine Learning with Python” training and a machine-learning internship with Zoho, used RPA tools like UiPath, Power Automate and n8n, and experimented with AWS S3/EC2, Telegram bots and scrapers to remove repetitive work.",
  },
  prompt: {
    heading: "Prompt Engineering · Workflows, Not One-Off Prompts",
    intro:
      "I treat prompt engineering as system design, not magic words. I build multi-step workflows for research, cybersecurity reporting, ATS-aware job applications and automation planning. My typical flows use role prompts, structured outputs, guardrails and self-critique loops across tools like ChatGPT, Gemini, Perplexity and NotebookLM, so the AI behaves consistently instead of randomly.",
  },
  community: {
    heading: "Community & Events · Operations & Leadership",
    intro:
      "Alongside tech, I’ve always worked in people-facing roles. I’ve led and supported events from 500+-attendee cultural festivals and NSS volunteer projects to Ravensbourne open days and graduation ceremonies. My focus is simple: make sure guests know where to go, volunteers know what to do, and organisers can trust me to keep things moving under pressure.",
  },
};
