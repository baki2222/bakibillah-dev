export const UPWORK_URL = "https://www.upwork.com/freelancers/~01031a8a772a0fd09c";
export const GITHUB_URL = "https://github.com/baki2222";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  live: string;
  source: string;
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "docuchat",
    name: "DocuChat",
    tagline: "Chat with your documents — every answer cites its source",
    description:
      "A retrieval-augmented chatbot. Upload PDFs or text files, ask questions in plain English, and get answers grounded in the exact passages, with clickable citations. If the answer isn't in the documents, it says so instead of guessing.",
    highlights: [
      "PDF parsing and chunking run in the browser — documents never leave the device",
      "BM25 retrieval picks the most relevant passages for each question",
      "Claude answers only from those passages and must cite them",
    ],
    stack: ["Next.js 15", "TypeScript", "Claude API", "RAG", "pdf.js", "Tailwind"],
    live: "https://docuchat.bakibillah.dev",
    source: "https://github.com/baki2222/docuchat",
    accent: "#818cf8",
  },
  {
    slug: "leadpilot",
    name: "LeadPilot",
    tagline: "An AI agent that qualifies inbound leads and writes the reply",
    description:
      "Paste an inbound email. A tool-using AI agent extracts the lead's details, scores them against your ideal customer profile, drafts a personalised reply, and files the lead on a CRM pipeline — with a visible log of every step.",
    highlights: [
      "Claude tool-use loop: extract → score → draft → save to CRM",
      "Scoring runs in code, so decisions are consistent and explainable",
      "Configurable ICP: budget, timeline, and target services",
    ],
    stack: ["Next.js 15", "TypeScript", "Claude tool use", "AI agents", "Tailwind"],
    live: "https://leadpilot.bakibillah.dev",
    source: "https://github.com/baki2222/leadpilot",
    accent: "#34d399",
  },
  {
    slug: "launchkit",
    name: "LaunchKit",
    tagline: "A SaaS starter with auth, subscriptions, analytics, and admin",
    description:
      "The foundation every SaaS product needs: signed-cookie authentication, Stripe Checkout subscriptions verified on the server, a metrics dashboard with charts, and a role-protected admin panel.",
    highlights: [
      "Route protection in middleware plus server-side checks",
      "Stripe Checkout with server-side payment verification",
      "MRR, signups, and churn dashboard with Recharts",
    ],
    stack: ["Next.js 15", "Server Actions", "Stripe", "JWT auth", "Recharts", "Tailwind"],
    live: "https://launchkit.bakibillah.dev",
    source: "https://github.com/baki2222/launchkit",
    accent: "#fb923c",
  },
];

export const SERVICES = [
  {
    title: "AI agents & chatbots",
    body: "Chatbots trained on your documents, support assistants, and tool-using agents that take real actions in your systems — built with OpenAI, Claude, or open-source models.",
    points: ["RAG on your docs, site, or database", "Tool-calling agents & MCP servers", "Evaluation and guardrails"],
  },
  {
    title: "SaaS & MVP development",
    body: "From idea to a deployed product: authentication, billing, dashboards, and admin panels, with clean code you fully own.",
    points: ["Next.js, React, TypeScript", "Node.js or Python (FastAPI) APIs", "Stripe, Postgres, Supabase"],
  },
  {
    title: "Automation & integrations",
    body: "Connect the tools your business already uses and remove repetitive work — CRMs, payment providers, email, Slack, and custom APIs.",
    points: ["REST & GraphQL integrations", "Webhooks and background jobs", "n8n, Make, or custom scripts"],
  },
];

export const PROCESS = [
  { step: "01", title: "Understand", body: "A short call or chat about your goal, your users, and your budget." },
  { step: "02", title: "Plan", body: "A written scope with milestones, timeline, and tech stack — before any code." },
  { step: "03", title: "Build", body: "Small milestones with live demos you can click, plus daily updates." },
  { step: "04", title: "Hand over", body: "Clean code, documentation, deployment, and support after launch." },
];

export const STACK = [
  "TypeScript",
  "Python",
  "Next.js",
  "React",
  "Node.js",
  "FastAPI",
  "Claude API",
  "OpenAI API",
  "LangChain",
  "pgvector",
  "PostgreSQL",
  "Supabase",
  "Stripe",
  "Docker",
  "Vercel",
  "AWS",
];
