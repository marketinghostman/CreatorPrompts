import type { Category, AIModel } from "@/types";

export const CATEGORIES: Category[] = [
  "YouTube Scripts",
  "YouTube Hooks",
  "Thumbnail Prompts",
  "TikTok Ideas",
  "Reels Scripts",
  "LinkedIn Posts",
  "Newsletters",
  "SEO Content",
  "Blog Articles",
  "Podcast Production",
  "Audience Research",
  "Competitor Research",
  "Content Strategy",
  "Content Repurposing",
  "Personal Branding",
];

export const AI_MODELS: AIModel[] = ["ChatGPT", "Claude", "Gemini", "Perplexity"];

export const CATEGORY_COLORS: Record<Category, string> = {
  "YouTube Scripts": "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
  "YouTube Hooks": "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  "Thumbnail Prompts": "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  "TikTok Ideas": "bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300",
  "Reels Scripts": "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  "LinkedIn Posts": "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  Newsletters: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
  "SEO Content": "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  "Blog Articles": "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
  "Podcast Production": "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
  "Audience Research": "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
  "Competitor Research": "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  "Content Strategy": "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  "Content Repurposing": "bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-300",
  "Personal Branding": "bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300",
};

export const MODEL_COLORS: Record<AIModel, string> = {
  ChatGPT: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  Claude: "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  Gemini: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  Perplexity: "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
};
