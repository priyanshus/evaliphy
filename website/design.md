Overall page structure
nav
hero
social proof bar
how it works
code example
feature highlights
comparison (vs DeepEval / Ragas)
final cta
footer
Hero section specifically
The hero should do one thing — get a developer from "what is this" to "I want to try it" in under 10 seconds. That means:
┌─────────────────────────────────────────────┐
│                                             │
│         badge — "now in beta"               │
│                                             │
│      RAG testing for QA engineers.          │  ← h1, large, bold
│                                             │
│   Evaliphy fits inside your existing        │  ← subheading, 2 lines max
│   test workflow. Assertions, real API        │
│   calls, CI reports. No ML required.        │
│                                             │
│   [ Get Started ]  [ View on GitHub ]       │  ← two CTAs
│                                             │
│ ─────────────────────────────────────────── │
│                                             │
│   ┌─────────────────────────────────────┐   │
│   │  return-policy.eval.ts              │   │  ← code block
│   │  import { evaluate } from ...       │   │
│   │  ...                                │   │
│   └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
The layout decisions
Badge above the h1 — a small pill that says "Now in beta" or "Open beta" sets expectations immediately and creates curiosity. Framer, Linear, and Vercel all use this pattern for launches.
h1 is short and left-aligned — centred hero text works for consumer products. Developer tools feel more credible left-aligned. It implies confidence, not performance.
Two CTAs, not one — primary is "Get Started" (links to quick start docs). Secondary is "View on GitHub" (links to repo). Developers always want to see the source before committing. Give them that path immediately.
Code block below the fold line on mobile, inline on desktop — on desktop the code sits directly in the hero. On mobile it drops below the CTAs. Never hide the code — it's your strongest sales tool.
No hero image, no illustration — you have real code and a real report screenshot. Those are more convincing than any illustration. Save the screenshot for the "how it works" section one scroll down.
Social proof bar — directly below hero
┌─────────────────────────────────────────────┐
│                                             │
│  Works with   OpenAI  Anthropic  OpenRouter │
│                                             │
└─────────────────────────────────────────────┘
Not user logos — you're too early for that. Provider logos instead. It signals the ecosystem you sit in and reassures developers their existing setup works.
How it works — three steps
┌──────────┐    ┌──────────┐    ┌──────────┐
│          │    │          │    │          │
│  Write   │ →  │   Run    │ →  │  Review  │
│  evals   │    │  in CI   │    │  report  │
│          │    │          │    │          │
└──────────┘    └──────────┘    └──────────┘
Each step has a one-line description and a small code snippet or screenshot. This is where the report screenshot lives — as the output of step 3.
What to avoid
Animations on the hero — resist the temptation to add typing animations or fade-ins on the code block. They look impressive for 2 seconds and then become annoying on every subsequent visit. Static loads faster and feels more professional.
Too many features above the fold — one message, one CTA path, one code example. Everything else goes below. Developers who are interested will scroll. Overwhelming them upfront pushes them away.
Gradients and blobs — common in AI tool landing pages right now. Using them makes Evaliphy look like every other AI product. A clean white background with strong typography stands out more in this space than a purple gradient.