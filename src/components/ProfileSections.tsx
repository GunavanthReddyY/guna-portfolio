import React from "react";
import type { ProfileKey } from "../config/profiles";
import { sectionIntros } from "../config/profiles";
import {
  cyberProjects,
  aiProjects,
  promptSystems,
  communityEvents,
  type Project,
} from "../config/projects";

interface ProfileSectionProps {
  profile: ProfileKey;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ profile }) => {
  switch (profile) {
    case "cyber":
      return <CyberSection />;
    case "ai":
      return <AISection />;
    case "prompt":
      return <PromptSection />;
    case "community":
      return <CommunitySection />;
    default:
      return null;
  }
};

const SectionShell: React.FC<
  React.PropsWithChildren<{ id: string; profileKey: ProfileKey }>
> = ({ id, profileKey, children }) => {
  const copy = sectionIntros[profileKey];

  return (
    <section id={id} className="scroll-mt-24 pt-12">
      <div className="mb-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
          {copy.heading}
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-300">{copy.intro}</p>
      </div>
      {children}
    </section>
  );
};

interface ProjectGridProps {
  title: string;
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ title, projects }) => {
  return (
    <div className="mt-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        {title}
      </h3>
      <div className="mt-2 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-soft-xl"
          >
            <div className="text-xs font-semibold text-slate-100">
              {project.title}
            </div>
            <div className="mt-1 text-[0.7rem] text-emerald-300/80">
              {project.context}
            </div>
            <div className="mt-2 space-y-1 text-[0.7rem] text-slate-300">
              <p>
                <span className="font-semibold text-slate-200">Problem: </span>
                {project.problem}
              </p>
              <p>
                <span className="font-semibold text-slate-200">Approach: </span>
                {project.approach}
              </p>
              <p>
                <span className="font-semibold text-slate-200">Outcome: </span>
                {project.outcome}
              </p>
            </div>
            {project.tags && project.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-400/10 px-2 py-[2px] text-[0.65rem] text-emerald-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

// --- CYBER ---

const CyberSection: React.FC = () => {
  return (
    <SectionShell id="profile-cyber" profileKey="cyber">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-soft-xl">
          <h3 className="text-sm font-semibold text-slate-100">
            Nokia Security Experience
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Around one year across Nokia intern and graduate apprentice roles,
            focusing on security operations and automation.
          </p>
          <ul className="mt-3 space-y-1 text-xs text-slate-300">
            <li>• Monitored and triaged alerts in Microsoft Defender EDR.</li>
            <li>
              • Used Ansible playbooks to deploy and maintain EDR agents and
              logging configurations.
            </li>
            <li>
              • Supported OS hardening and log/SLM configuration in controlled
              environments.
            </li>
            <li>
              • Investigated and fixed automation failures caused by network
              connectivity issues, validating solutions and reporting back to
              the team.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-soft-xl">
          <h3 className="text-sm font-semibold text-slate-100">
            Learning Path & Practice
          </h3>
          <ul className="mt-2 space-y-1 text-xs text-slate-300">
            <li>• MSc Cyber Security Management at Ravensbourne University.</li>
            <li>• Studying CEH and ISC2 Certified in Cybersecurity.</li>
            <li>• TryHackMe rooms and Bugcrowd bug bounty participation.</li>
            <li>• VMware homelab for blue-team and ethical hacking practice.</li>
          </ul>
        </div>
      </div>

      <ProjectGrid title="Selected Cybersecurity Work" projects={cyberProjects} />
    </SectionShell>
  );
};

// --- AI & AUTOMATION ---

const AISection: React.FC = () => {
  return (
    <SectionShell id="profile-ai" profileKey="ai">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-soft-xl">
          <h3 className="text-sm font-semibold text-slate-100">
            AI & Automation Focus
          </h3>
          <ul className="mt-2 space-y-1 text-xs text-slate-300">
            <li>• Machine Learning with Python training (online).</li>
            <li>• Machine learning internship experience with Zoho.</li>
            <li>
              • Python-based automations, including small bots, scrapers and
              notification systems.
            </li>
            <li>
              • RPA tools such as UiPath, Power Automate and n8n for
              workflow-based automation.
            </li>
            <li>• Exposure to AWS S3 and EC2 for running and hosting tasks.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-soft-xl">
          <h3 className="text-sm font-semibold text-slate-100">
            Principles I Work By
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            I aim for secure, explainable automation: small tools that remove
            repetitive work while keeping people in control.
          </p>
          <ul className="mt-3 space-y-1 text-xs text-slate-300">
            <li>• Start with a clear manual process.</li>
            <li>• Automate repeatable steps, keep humans for judgment.</li>
            <li>• Document flows so others can maintain them.</li>
          </ul>
        </div>
      </div>

      <ProjectGrid title="AI & Automation Case Studies" projects={aiProjects} />
    </SectionShell>
  );
};

// --- PROMPT ENGINEER ---

const PromptSection: React.FC = () => {
  return (
    <SectionShell id="profile-prompt" profileKey="prompt">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-soft-xl">
          <h3 className="text-sm font-semibold text-slate-100">
            Prompt Engineering Approach
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            I design prompts as systems: clear roles, explicit constraints and
            structured outputs that can be reused and improved.
          </p>
          <ul className="mt-3 space-y-1 text-xs text-slate-300">
            <li>
              • Multi-step workflows for research, cybersecurity reports and
              academic assignments.
            </li>
            <li>
              • ATS-aware job application flows for CV tailoring and cover
              letters.
            </li>
            <li>
              • Automation planning prompts to design and refine Python/RPA
              flows.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-soft-xl">
          <h3 className="text-sm font-semibold text-slate-100">
            Tools & Techniques
          </h3>
          <ul className="mt-2 space-y-1 text-xs text-slate-300">
            <li>
              • Regular use of ChatGPT, Gemini, Perplexity and NotebookLM for
              structured workflows.
            </li>
            <li>
              • Role prompts, chain-of-thought, few-shot examples and strict
              output formats.
            </li>
            <li>
              • Guardrails, self-critique loops and evaluation prompts to keep
              outputs aligned with briefs and rubrics.
            </li>
          </ul>
        </div>
      </div>

      <ProjectGrid
        title="Prompt Systems & Workflows"
        projects={promptSystems}
      />
    </SectionShell>
  );
};

// --- COMMUNITY & EVENTS ---

const CommunitySection: React.FC = () => {
  return (
    <SectionShell id="profile-community" profileKey="community">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-soft-xl">
          <h3 className="text-sm font-semibold text-slate-100">
            Key Roles & Experience
          </h3>
          <ul className="mt-2 space-y-1 text-xs text-slate-300">
            <li>• Rotaract Vice President and NSS Best Volunteer award.</li>
            <li>
              • Organiser and supporter of large cultural fests with 500+
              attendees.
            </li>
            <li>
              • Student ambassador at Ravensbourne: open days, graduation,
              campus tours and Q&amp;A.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-soft-xl">
          <h3 className="text-sm font-semibold text-slate-100">
            How I Work at Events
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            My priority is to keep guests informed, volunteers supported and
            organisers relaxed, even when things get busy.
          </p>
          <ul className="mt-3 space-y-1 text-xs text-slate-300">
            <li>• Registration desk and check-in under high footfall.</li>
            <li>• Building tours and wayfinding for new visitors.</li>
            <li>• Supporting staff with logistics and last-minute changes.</li>
          </ul>
        </div>
      </div>

      <ProjectGrid
        title="Events & Volunteering Highlights"
        projects={communityEvents}
      />
    </SectionShell>
  );
};
