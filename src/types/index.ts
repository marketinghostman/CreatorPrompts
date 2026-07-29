export type AIModel = "ChatGPT" | "Claude" | "Gemini" | "Perplexity";

export type Category =
  | "YouTube Scripts"
  | "YouTube Hooks"
  | "Thumbnail Prompts"
  | "TikTok Ideas"
  | "Reels Scripts"
  | "LinkedIn Posts"
  | "Newsletters"
  | "SEO Content"
  | "Blog Articles"
  | "Podcast Production"
  | "Audience Research"
  | "Competitor Research"
  | "Content Strategy"
  | "Content Repurposing"
  | "Personal Branding";

export type SortOption = "popularity" | "newest" | "favorites";

export interface Prompt {
  id: string;
  title: string;
  description: string;
  category: Category;
  aiModel: AIModel;
  useCase: string;
  expectedOutput: string;
  promptText: string;
  exampleOutput: string;
  tags: string[];
  popularity: number;
  createdAt: string;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  icon: string;
  promptIds: string[];
  featured?: boolean;
}
