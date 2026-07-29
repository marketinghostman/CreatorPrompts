import type { Prompt } from "@/types";

export const prompts: Prompt[] = [
  {
    id: "p-1",
    title: "YouTube Hook Generator",
    description: "Generate 20 scroll-stopping hooks for any YouTube video topic.",
    category: "YouTube Hooks",
    aiModel: "ChatGPT",
    useCase: "Opening the first 5 seconds of a YouTube video to maximize retention.",
    expectedOutput: "A list of 20 hooks ranked by curiosity gap and emotional pull.",
    promptText:
      "Act as a world-class YouTube strategist with 10M+ views across niches. Generate 20 hooks for the following video topic: [TOPIC]. Each hook must be under 15 words, create a curiosity gap, and work in the first 5 seconds. Include 5 contrarian hooks, 5 story-based hooks, 5 data-driven hooks, and 5 'I tried X so you don't have to' hooks. Rank them by predicted retention impact.",
    exampleOutput:
      "1. 'Nobody talks about this side of [topic] — and it's costing you views.' 2. 'I spent 30 days testing every [topic] strategy. Here's what actually worked.' 3. 'This one mistake is why 90% of [topic] videos fail in the first 10 seconds.'",
    tags: ["hooks", "retention", "youtube", "opening"],
    popularity: 982,
    createdAt: "2025-11-02",
  },
  {
    id: "p-2",
    title: "Full YouTube Script Writer",
    description: "Turn a video idea into a complete, retention-optimized YouTube script.",
    category: "YouTube Scripts",
    aiModel: "Claude",
    useCase: "Writing a full YouTube video script from outline to CTA.",
    expectedOutput: "A structured script with hook, intro, body sections, pattern interrupts, and CTA.",
    promptText:
      "Write a complete YouTube script for a [LENGTH]-minute video about [TOPIC]. Target audience: [AUDIENCE]. Structure: (1) Hook — 15 seconds max, (2) Intro — establish credibility and promise, (3) 3-5 body sections with pattern interrupts every 60 seconds, (4) Summary, (5) CTA. Use conversational tone, short sentences, and include [B-ROLL SUGGESTIONS] in brackets. Optimize for retention throughout.",
    exampleOutput:
      "HOOK: 'If you're still doing [common mistake], you're leaving thousands of views on the table.' INTRO: 'I'm [name], I've helped [X] creators grow on YouTube, and today I'm breaking down the exact framework...'",
    tags: ["script", "youtube", "retention", "long-form"],
    popularity: 876,
    createdAt: "2025-10-15",
  },
  {
    id: "p-3",
    title: "YouTube Title & Thumbnail Pair",
    description: "Create high-CTR title and thumbnail concept pairs that work together.",
    category: "Thumbnail Prompts",
    aiModel: "ChatGPT",
    useCase: "Maximizing click-through rate before publishing a video.",
    expectedOutput: "5 title/thumbnail pairs with visual descriptions and CTR rationale.",
    promptText:
      "Act as a YouTube CTR expert. For the video topic '[TOPIC]', create 5 title + thumbnail concept pairs. For each pair provide: (1) Title under 60 characters with power words, (2) Thumbnail visual description — facial expression, text overlay (max 3 words), color scheme, (3) Why this pair will outperform competitors. Avoid clickbait that doesn't deliver.",
    exampleOutput:
      "Pair 1 — Title: 'I Quit [X] for 30 Days (Unexpected Result)' | Thumbnail: Shocked face, split screen before/after, bold yellow text '30 DAYS', red vs green color contrast.",
    tags: ["thumbnail", "title", "ctr", "youtube"],
    popularity: 934,
    createdAt: "2025-09-28",
  },
  {
    id: "p-4",
    title: "YouTube Shorts Script",
    description: "Write punchy 30-60 second YouTube Shorts scripts optimized for the algorithm.",
    category: "YouTube Scripts",
    aiModel: "Gemini",
    useCase: "Creating short-form vertical content for YouTube Shorts.",
    expectedOutput: "A timed script with hook, value delivery, and loop-friendly ending.",
    promptText:
      "Write a YouTube Shorts script (30-60 seconds) about [TOPIC]. Format: Hook in first 1 second (text on screen + voiceover), deliver ONE clear takeaway, end with a loop or cliffhanger. Include on-screen text suggestions every 3 seconds. Tone: [TONE]. Target: [AUDIENCE].",
    exampleOutput:
      "0:00 — HOOK (text): 'Stop scrolling if you [pain point]' | 0:03 — 'Here's the one thing that changed everything for me...' | 0:45 — 'Follow for part 2 tomorrow.'",
    tags: ["shorts", "vertical", "youtube", "script"],
    popularity: 712,
    createdAt: "2025-12-01",
  },
  {
    id: "p-5",
    title: "Retention Pattern Interrupt Ideas",
    description: "Generate creative pattern interrupts to keep viewers watching past the 30% mark.",
    category: "YouTube Hooks",
    aiModel: "Claude",
    useCase: "Mid-video retention drops — adding surprise elements to re-engage viewers.",
    expectedOutput: "10 pattern interrupt ideas with timing and implementation notes.",
    promptText:
      "My YouTube video about [TOPIC] is losing viewers at the [X]-minute mark. Generate 10 pattern interrupt ideas I can insert at that point. Types to include: visual change, tone shift, controversial statement, mini-story, direct address, statistic reveal, B-roll switch, humor break. For each, explain why it works psychologically.",
    exampleOutput:
      "1. TONE SHIFT (2:30): Switch from tutorial mode to 'real talk' — 'Okay, real talk for a second...' Creates intimacy and resets attention.",
    tags: ["retention", "pattern-interrupt", "youtube"],
    popularity: 645,
    createdAt: "2025-08-14",
  },
  {
    id: "p-6",
    title: "Thumbnail Text Overlay Generator",
    description: "Create bold, readable thumbnail text that complements your video title.",
    category: "Thumbnail Prompts",
    aiModel: "ChatGPT",
    useCase: "Designing thumbnail text overlays in Canva or Photoshop.",
    expectedOutput: "8 text overlay options with font style and placement recommendations.",
    promptText:
      "Generate 8 thumbnail text overlay options for a YouTube video titled '[TITLE]'. Rules: max 3 words per overlay, must be readable at mobile size, create curiosity without repeating the title. For each option, suggest: text, font style (bold/thin), color, placement (top/bottom/center), and emotional trigger.",
    exampleOutput:
      "'DON'T DO THIS' — Bold Impact font, white with black stroke, bottom third, fear trigger. 'SECRET METHOD' — Condensed sans-serif, yellow on dark bg, top right, curiosity trigger.",
    tags: ["thumbnail", "design", "text-overlay"],
    popularity: 589,
    createdAt: "2025-07-22",
  },
  {
    id: "p-7",
    title: "YouTube Video Outline Builder",
    description: "Structure a video outline with timestamps and talking points.",
    category: "YouTube Scripts",
    aiModel: "Perplexity",
    useCase: "Planning a video before writing the full script.",
    expectedOutput: "A timestamped outline with section goals and key talking points.",
    promptText:
      "Create a detailed YouTube video outline for a [LENGTH]-minute video about [TOPIC]. Include: timestamp markers, section titles, 3-5 bullet talking points per section, suggested B-roll for each section, and one 'wow moment' per section. Target audience: [AUDIENCE].",
    exampleOutput:
      "0:00-0:15 Hook | 0:15-1:00 Intro & credibility | 1:00-4:00 Section 1: The Problem | 4:00-8:00 Section 2: The Framework | 8:00-10:00 Section 3: Case Study | 10:00-11:00 CTA",
    tags: ["outline", "planning", "youtube"],
    popularity: 523,
    createdAt: "2026-01-10",
  },
  {
    id: "p-8",
    title: "YouTube End Screen CTA Script",
    description: "Write compelling end-screen verbal CTAs that drive subscriptions and next clicks.",
    category: "YouTube Scripts",
    aiModel: "ChatGPT",
    useCase: "Closing a video with strong calls-to-action for growth.",
    expectedOutput: "3 CTA variations for subscribe, next video, and comment engagement.",
    promptText:
      "Write 3 end-screen CTA scripts for my YouTube video about [TOPIC]. Each should be 15-20 seconds when spoken. Include: (1) Subscribe CTA with value reminder, (2) Next video suggestion with curiosity bridge, (3) Comment engagement question. Tone: authentic, not salesy.",
    exampleOutput:
      "'If this helped you, hit subscribe — I drop videos like this every [frequency]. And watch this video next where I show you [related topic] step by step.'",
    tags: ["cta", "end-screen", "youtube", "growth"],
    popularity: 467,
    createdAt: "2025-06-05",
  },
  {
    id: "p-9",
    title: "TikTok Hook Formula Generator",
    description: "Generate viral TikTok hooks using proven formula templates.",
    category: "TikTok Ideas",
    aiModel: "ChatGPT",
    useCase: "Opening TikTok videos to stop the scroll in under 1 second.",
    expectedOutput: "15 hooks using 5 different viral formula templates.",
    promptText:
      "Generate 15 TikTok hooks for the topic '[TOPIC]' using these formulas: (1) 'POV: you just discovered...', (2) 'Things I wish I knew before...', (3) 'Unpopular opinion:', (4) 'The [X] that changed my life', (5) 'Stop doing [X] if you want [Y]'. Each hook must work as on-screen text AND voiceover. Max 10 words each.",
    exampleOutput:
      "POV: you just discovered the one [topic] hack that saves 3 hours a week. | Unpopular opinion: [common advice] is actually hurting your [result].",
    tags: ["tiktok", "hooks", "viral", "short-form"],
    popularity: 945,
    createdAt: "2025-11-18",
  },
  {
    id: "p-10",
    title: "TikTok Content Calendar",
    description: "Plan a week of TikTok content with trending formats and topics.",
    category: "TikTok Ideas",
    aiModel: "Claude",
    useCase: "Weekly content planning for TikTok creators.",
    expectedOutput: "7-day content calendar with format, hook, and posting time suggestions.",
    promptText:
      "Create a 7-day TikTok content calendar for a [NICHE] creator. For each day provide: content format (storytime, tutorial, trend, POV, GRWM), hook idea, key message, suggested sound/trend to use, and best posting time. Mix educational (40%), entertaining (40%), and promotional (20%) content.",
    exampleOutput:
      "Monday — Tutorial format: '3-step [topic] hack' | Hook: 'You're doing [X] wrong' | Post at 7 PM EST | Use trending 'oh no' sound.",
    tags: ["tiktok", "calendar", "planning", "content"],
    popularity: 678,
    createdAt: "2025-10-03",
  },
  {
    id: "p-11",
    title: "TikTok Trend Adapter",
    description: "Adapt any trending TikTok format to your niche without looking forced.",
    category: "TikTok Ideas",
    aiModel: "Gemini",
    useCase: "Jumping on trends while staying on-brand.",
    expectedOutput: "3 trend adaptations with scripts and execution notes.",
    promptText:
      "The trending TikTok format is: [DESCRIBE TREND]. My niche is [NICHE] and my audience is [AUDIENCE]. Adapt this trend 3 different ways that feel authentic to my brand. For each adaptation, provide: concept, 15-second script, on-screen text, and why it won't feel cringe.",
    exampleOutput:
      "Adaptation 1: Use the 'expectation vs reality' trend to show [niche-specific scenario]. Script: 'What I thought [X] would be like vs what it actually is.'",
    tags: ["tiktok", "trends", "adaptation", "viral"],
    popularity: 812,
    createdAt: "2025-12-15",
  },
  {
    id: "p-12",
    title: "TikTok Storytime Script",
    description: "Write engaging storytime TikToks that keep viewers until the end.",
    category: "TikTok Ideas",
    aiModel: "Claude",
    useCase: "Creating narrative-driven TikTok content.",
    expectedOutput: "A 60-90 second storytime script with cliffhanger structure.",
    promptText:
      "Write a TikTok storytime script about [STORY TOPIC/EXPERIENCE]. Structure: Hook (shocking first line), Setup (10 sec), Rising action with 2 twists, Climax, Resolution with takeaway. Max 90 seconds spoken. Include suggested on-screen text for key moments. Tone: [casual/dramatic/funny].",
    exampleOutput:
      "HOOK: 'So I accidentally sent my boss a text meant for my therapist...' SETUP: 'It was 11 PM on a Friday and I was venting to my friend about...'",
    tags: ["tiktok", "storytime", "narrative", "script"],
    popularity: 756,
    createdAt: "2025-09-07",
  },
  {
    id: "p-13",
    title: "TikTok Duet/Stitch Response",
    description: "Craft smart responses to duet or stitch popular TikToks in your niche.",
    category: "TikTok Ideas",
    aiModel: "ChatGPT",
    useCase: "Engaging with viral content via duets and stitches.",
    expectedOutput: "3 response angles with opening lines and value-add structure.",
    promptText:
      "A TikTok creator posted: '[ORIGINAL VIDEO SUMMARY]'. I want to stitch/duet this as a [NICHE] expert. Give me 3 response angles: (1) Add missing context, (2) Respectfully disagree with data, (3) Take it further with advanced tip. For each, write the opening 5 seconds and the key value I add.",
    exampleOutput:
      "Angle 1 — Opening: 'Okay but they missed the most important part...' | Value: Explain the nuance that 90% of people get wrong about [topic].",
    tags: ["tiktok", "duet", "stitch", "engagement"],
    popularity: 534,
    createdAt: "2025-08-29",
  },
  {
    id: "p-14",
    title: "Instagram Reels Script Writer",
    description: "Write Reels scripts optimized for Instagram's discovery algorithm.",
    category: "Reels Scripts",
    aiModel: "ChatGPT",
    useCase: "Creating Instagram Reels that reach non-followers.",
    expectedOutput: "A complete Reels script with captions, hashtags, and cover text.",
    promptText:
      "Write an Instagram Reels script (30-45 seconds) about [TOPIC] for [AUDIENCE]. Include: (1) Hook — first 2 seconds, (2) Value delivery in 3 quick points, (3) CTA to save/share. Also provide: caption (with line breaks), 15 relevant hashtags, and cover text (3 words max). Optimize for saves and shares.",
    exampleOutput:
      "HOOK: 'Save this if you struggle with [pain point]' | Point 1: [tip] | Point 2: [tip] | Point 3: [tip] | CTA: 'Share with someone who needs this'",
    tags: ["reels", "instagram", "script", "algorithm"],
    popularity: 698,
    createdAt: "2025-11-25",
  },
  {
    id: "p-15",
    title: "Reels Trending Audio Matcher",
    description: "Match your content idea to the best trending audio on Instagram Reels.",
    category: "Reels Scripts",
    aiModel: "Perplexity",
    useCase: "Choosing the right trending audio for maximum Reels reach.",
    expectedOutput: "5 audio-content pairings with timing and visual sync suggestions.",
    promptText:
      "I want to create an Instagram Reel about [TOPIC]. Suggest 5 trending audio types that would work (describe the audio vibe, not specific songs). For each, explain: how to sync visuals to the beat, what text overlay to use, and why this audio type performs well for [NICHE] content.",
    exampleOutput:
      "Audio type: Motivational speech clip | Sync: Cut to beat drops at each tip reveal | Text: Bold white captions synced to speech | Why: High save rate for educational content.",
    tags: ["reels", "audio", "trends", "instagram"],
    popularity: 445,
    createdAt: "2025-07-18",
  },
  {
    id: "p-16",
    title: "LinkedIn Thought Leadership Post",
    description: "Write authority-building LinkedIn posts that spark meaningful conversations.",
    category: "LinkedIn Posts",
    aiModel: "Claude",
    useCase: "Publishing LinkedIn posts that build personal brand and engagement.",
    expectedOutput: "A formatted LinkedIn post with hook, story, insight, and engagement question.",
    promptText:
      "Write a LinkedIn thought leadership post about [TOPIC/EXPERIENCE]. Structure: (1) Bold hook line (under 10 words), (2) Personal story or observation (3-4 short paragraphs), (3) Key insight or lesson, (4) Engagement question. Use short paragraphs, line breaks between each. Tone: professional but human. No hashtags in body.",
    exampleOutput:
      "I fired my best employee last Tuesday.\n\nNot because of performance.\n\nBecause of this one conversation that changed how I think about leadership...\n\n[Story continues]\n\nWhat's the hardest leadership decision you've made?",
    tags: ["linkedin", "thought-leadership", "personal-brand"],
    popularity: 867,
    createdAt: "2025-10-20",
  },
  {
    id: "p-17",
    title: "LinkedIn Carousel Outline",
    description: "Structure a swipe-worthy LinkedIn carousel that drives profile visits.",
    category: "LinkedIn Posts",
    aiModel: "ChatGPT",
    useCase: "Creating multi-slide LinkedIn carousel posts.",
    expectedOutput: "10-slide carousel outline with slide titles and content for each.",
    promptText:
      "Create a 10-slide LinkedIn carousel about [TOPIC]. Slide 1: Hook title (make them swipe). Slides 2-8: One key point per slide with headline + 2 bullet points. Slide 9: Summary/takeaway. Slide 10: CTA (follow, comment, DM). Keep text minimal — designed for mobile reading.",
    exampleOutput:
      "Slide 1: '7 [Topic] Mistakes Costing You Clients' | Slide 2: 'Mistake #1: [X]' — Why it fails | What to do instead | Slide 3: 'Mistake #2...'",
    tags: ["linkedin", "carousel", "slides", "engagement"],
    popularity: 723,
    createdAt: "2025-09-14",
  },
  {
    id: "p-18",
    title: "LinkedIn Comment Strategy",
    description: "Generate thoughtful comments to leave on industry leaders' posts.",
    category: "LinkedIn Posts",
    aiModel: "Gemini",
    useCase: "Growing visibility by engaging on other creators' LinkedIn posts.",
    expectedOutput: "5 comment templates that add value and spark replies.",
    promptText:
      "Generate 5 thoughtful LinkedIn comments I can leave on posts about [TOPIC] in the [INDUSTRY] space. Each comment should: (1) Add genuine value or a new perspective, (2) Be 2-3 sentences, (3) End with a question or insight that invites the author to reply, (4) NOT be generic ('Great post!'). Vary the style: data point, personal experience, respectful challenge, resource share, framework addition.",
    exampleOutput:
      "'This resonates — we saw similar results when we shifted from [X] to [Y]. One thing I'd add: [specific insight]. Have you tested [related approach]?'",
    tags: ["linkedin", "engagement", "comments", "networking"],
    popularity: 512,
    createdAt: "2025-08-02",
  },
  {
    id: "p-19",
    title: "LinkedIn Personal Story Post",
    description: "Turn a personal experience into a relatable, high-engagement LinkedIn post.",
    category: "LinkedIn Posts",
    aiModel: "Claude",
    useCase: "Humanizing your LinkedIn presence with authentic storytelling.",
    expectedOutput: "A story-driven post with emotional arc and professional takeaway.",
    promptText:
      "Turn this experience into a LinkedIn post: [DESCRIBE EXPERIENCE]. Structure: Start with the most emotional or surprising moment. Build tension through 4-5 short paragraphs. Reveal the lesson learned. Connect it to a broader professional insight. End with a question that invites others to share similar experiences. Keep it under 200 words.",
    exampleOutput:
      "Three years ago, I got rejected from my dream job.\n\nI cried in my car for 20 minutes.\n\nThen I made a decision that led to [outcome]...\n\nWhat's a rejection that ended up being a redirect?",
    tags: ["linkedin", "storytelling", "personal", "engagement"],
    popularity: 634,
    createdAt: "2025-12-08",
  },
  {
    id: "p-20",
    title: "LinkedIn Poll & Engagement Post",
    description: "Create LinkedIn polls and engagement posts that boost algorithm reach.",
    category: "LinkedIn Posts",
    aiModel: "ChatGPT",
    useCase: "Increasing LinkedIn post reach through interactive content.",
    expectedOutput: "3 poll ideas with context posts and follow-up comment strategies.",
    promptText:
      "Create 3 LinkedIn poll ideas for a [INDUSTRY/ROLE] professional about [TOPIC]. For each: (1) Context post (2-3 sentences setting up the poll), (2) Poll question with 4 options, (3) Follow-up comment to post after poll closes with insights. Polls should be genuinely debatable, not obvious.",
    exampleOutput:
      "Context: 'Hot take brewing. I've been thinking about this for weeks.' Poll: 'What's harder for new managers?' Options: Giving feedback | Delegating | Hiring | Firing",
    tags: ["linkedin", "poll", "engagement", "algorithm"],
    popularity: 478,
    createdAt: "2026-01-05",
  },
  {
    id: "p-21",
    title: "Newsletter Subject Line Generator",
    description: "Generate subject lines that boost open rates above industry average.",
    category: "Newsletters",
    aiModel: "ChatGPT",
    useCase: "Writing email subject lines before sending a newsletter.",
    expectedOutput: "20 subject line variations across 4 proven formulas.",
    promptText:
      "Generate 20 email subject lines for a newsletter about [TOPIC]. Use these formulas (5 each): (1) Curiosity gap, (2) Number + benefit, (3) Personal/confession, (4) Contrarian take. Max 50 characters each. Newsletter audience: [AUDIENCE]. Avoid spam trigger words.",
    exampleOutput:
      "Curiosity: 'The [topic] advice nobody gives you' | Number: '5 [topic] shifts that 10x'd my results' | Personal: 'I almost quit [X] last week' | Contrarian: 'Why [popular advice] is wrong'",
    tags: ["newsletter", "subject-line", "email", "open-rate"],
    popularity: 891,
    createdAt: "2025-10-28",
  },
  {
    id: "p-22",
    title: "Full Newsletter Edition Writer",
    description: "Write a complete newsletter edition with intro, sections, and sign-off.",
    category: "Newsletters",
    aiModel: "Claude",
    useCase: "Drafting a weekly or bi-weekly newsletter from scratch.",
    expectedOutput: "A full newsletter with 3-4 sections, personal intro, and CTA.",
    promptText:
      "Write a complete newsletter edition for [NEWSLETTER NAME]. Topic focus: [TOPIC]. Audience: [AUDIENCE]. Structure: (1) Personal intro — 2-3 sentences, (2) Main insight section — the core value, (3) 'What I'm reading/watching' — 2 recommendations, (4) Quick tip or tool, (5) Sign-off with CTA. Tone: [TONE]. Length: 800-1200 words.",
    exampleOutput:
      "Hey [name],\n\nThis week I made a mistake that cost me [X]. Here's what happened and what I learned...\n\n## The Main Thing\n\n[Core insight section]\n\n## What I'm Reading\n\n1. [Book/article] — [one-line take]\n\nUntil next week,\n[Name]",
    tags: ["newsletter", "writing", "email", "content"],
    popularity: 745,
    createdAt: "2025-09-21",
  },
  {
    id: "p-23",
    title: "Newsletter Welcome Sequence",
    description: "Create a 5-email welcome sequence for new newsletter subscribers.",
    category: "Newsletters",
    aiModel: "ChatGPT",
    useCase: "Onboarding new email subscribers with an automated sequence.",
    expectedOutput: "5 emails with subject lines, body copy, and send timing.",
    promptText:
      "Create a 5-email welcome sequence for [NEWSLETTER NAME] targeting [AUDIENCE]. Email 1 (Day 0): Welcome + deliver lead magnet. Email 2 (Day 2): Your story + why you started. Email 3 (Day 4): Best content roundup. Email 4 (Day 7): Social proof + community invite. Email 5 (Day 10): Soft pitch for paid product/service. Include subject lines and full body for each.",
    exampleOutput:
      "Email 1 — Subject: 'Welcome! Here's your [lead magnet]' | Body: Personal welcome, deliver value immediately, set expectations for frequency.",
    tags: ["newsletter", "welcome-sequence", "email", "onboarding"],
    popularity: 623,
    createdAt: "2025-08-11",
  },
  {
    id: "p-24",
    title: "Newsletter Curated Links Edition",
    description: "Write a 'best of the week' curated links newsletter edition.",
    category: "Newsletters",
    aiModel: "Gemini",
    useCase: "Creating curation-style newsletters with commentary.",
    expectedOutput: "A curated edition with 5-7 links, each with commentary and takeaway.",
    promptText:
      "Write a curated links newsletter edition for [NICHE]. Include 5-7 items: articles, tools, tweets, or videos from this week. For each item: (1) Link title, (2) One-line summary, (3) Your take — why it matters (2-3 sentences), (4) Key takeaway. Add a brief intro and outro. Tone: smart friend sharing discoveries.",
    exampleOutput:
      "📌 [Article Title] — Summary: [one line]. My take: This changes how we think about [X] because... Takeaway: [actionable insight].",
    tags: ["newsletter", "curation", "links", "commentary"],
    popularity: 556,
    createdAt: "2025-11-12",
  },
  {
    id: "p-25",
    title: "Newsletter Re-engagement Email",
    description: "Win back inactive newsletter subscribers with a re-engagement campaign.",
    category: "Newsletters",
    aiModel: "Claude",
    useCase: "Reactivating subscribers who haven't opened emails in 30+ days.",
    expectedOutput: "3 re-engagement email variations with different angles.",
    promptText:
      "Write 3 re-engagement emails for inactive subscribers of [NEWSLETTER NAME]. They've been subscribed for [X] months but haven't opened in 30+ days. Approaches: (1) 'Did I do something wrong?' — personal/humble, (2) 'Here's what you missed' — FOMO with best content, (3) 'Should I remove you?' — direct with easy unsubscribe. Include subject lines. Keep each under 150 words.",
    exampleOutput:
      "Subject: 'Should I stop emailing you?' | Body: 'Hey, I noticed you haven't opened my last few emails. No hard feelings — inboxes are brutal. But if you still want [value], here's my best piece from this month: [link]. If not, click here to unsubscribe cleanly.'",
    tags: ["newsletter", "re-engagement", "email", "retention"],
    popularity: 489,
    createdAt: "2025-07-30",
  },
  {
    id: "p-26",
    title: "SEO Blog Post Outline",
    description: "Create an SEO-optimized blog post outline targeting a specific keyword.",
    category: "SEO Content",
    aiModel: "Perplexity",
    useCase: "Planning blog content that ranks on Google.",
    expectedOutput: "An outline with H2/H3 structure, keyword placement, and search intent match.",
    promptText:
      "Create an SEO-optimized blog post outline for the keyword '[KEYWORD]'. Search intent: [informational/commercial/transactional]. Include: (1) SEO title (under 60 chars), (2) Meta description (under 155 chars), (3) H2/H3 heading structure, (4) Key points to cover per section, (5) Internal linking suggestions, (6) FAQ section with 5 questions. Target word count: [X] words.",
    exampleOutput:
      "Title: 'How to [Keyword]: Complete Guide (2026)' | H2: What is [keyword]? | H2: Why [keyword] matters | H2: Step-by-step guide | H2: Common mistakes | H2: FAQ",
    tags: ["seo", "blog", "outline", "keyword"],
    popularity: 834,
    createdAt: "2025-10-07",
  },
  {
    id: "p-27",
    title: "SEO Meta Description Writer",
    description: "Write compelling meta descriptions that improve click-through from search results.",
    category: "SEO Content",
    aiModel: "ChatGPT",
    useCase: "Optimizing SERP snippets for published blog posts.",
    expectedOutput: "5 meta description variations under 155 characters.",
    promptText:
      "Write 5 meta description variations for a blog post titled '[TITLE]' targeting '[KEYWORD]'. Requirements: under 155 characters, include primary keyword naturally, create urgency or curiosity, include a benefit. Vary approaches: question, statistic, how-to promise, problem-solution, social proof.",
    exampleOutput:
      "'Learn the 5-step [keyword] framework used by top creators. Free templates included. Updated for 2026.' (98 chars)",
    tags: ["seo", "meta-description", "serp", "ctr"],
    popularity: 567,
    createdAt: "2025-09-03",
  },
  {
    id: "p-28",
    title: "Long-Form Blog Article Writer",
    description: "Write a comprehensive, engaging blog article from an outline.",
    category: "Blog Articles",
    aiModel: "Claude",
    useCase: "Writing full blog posts for websites and Medium.",
    expectedOutput: "A complete 1500-2500 word article with intro, sections, and conclusion.",
    promptText:
      "Write a comprehensive blog article based on this outline: [PASTE OUTLINE]. Target audience: [AUDIENCE]. Tone: [TONE]. Requirements: engaging intro with a hook, use subheadings, include examples and data points, add actionable takeaways, write a strong conclusion with CTA. Target length: [WORD COUNT] words. Avoid fluff and filler paragraphs.",
    exampleOutput:
      "Introduction: 'Every creator faces the same challenge: [pain point]. In this guide, you'll learn the exact framework that...' [Article continues with structured sections]",
    tags: ["blog", "long-form", "writing", "article"],
    popularity: 789,
    createdAt: "2025-11-05",
  },
  {
    id: "p-29",
    title: "Blog Introduction Hook Writer",
    description: "Write 5 blog post introductions that hook readers in the first paragraph.",
    category: "Blog Articles",
    aiModel: "ChatGPT",
    useCase: "Crafting compelling opening paragraphs for blog posts.",
    expectedOutput: "5 introduction variations using different hook techniques.",
    promptText:
      "Write 5 blog post introductions for an article about [TOPIC]. Each should use a different hook: (1) Surprising statistic, (2) Personal story, (3) Bold claim, (4) Question, (5) Scenario/picture painting. Each intro: 3-4 sentences, establish the problem, promise the solution. Target audience: [AUDIENCE].",
    exampleOutput:
      "Stat hook: '73% of creators quit within their first year. Not because they lack talent — but because they never learned [X]. This guide fixes that.'",
    tags: ["blog", "introduction", "hook", "writing"],
    popularity: 612,
    createdAt: "2025-08-25",
  },
  {
    id: "p-30",
    title: "Listicle Blog Post Generator",
    description: "Create engaging listicle blog posts that drive traffic and shares.",
    category: "Blog Articles",
    aiModel: "Gemini",
    useCase: "Writing list-format blog posts (Top 10, Best X, etc.).",
    expectedOutput: "A complete listicle with intro, numbered items, and conclusion.",
    promptText:
      "Write a listicle blog post: '[NUMBER] [TOPIC] for [AUDIENCE] in [YEAR]'. For each item: catchy subheading, 2-3 paragraph explanation, pro tip, and example. Include an intro explaining why this list matters and a conclusion with next steps. Tone: helpful and authoritative.",
    exampleOutput:
      "1. [Item Name] — Why it works: [explanation]. Pro tip: [actionable advice]. Example: [real-world case].",
    tags: ["blog", "listicle", "seo", "traffic"],
    popularity: 545,
    createdAt: "2025-12-20",
  },
  {
    id: "p-31",
    title: "Podcast Episode Outline",
    description: "Structure a podcast episode with segments, questions, and talking points.",
    category: "Podcast Production",
    aiModel: "Claude",
    useCase: "Planning a podcast episode before recording.",
    expectedOutput: "A segment-by-segment outline with timestamps and key questions.",
    promptText:
      "Create a podcast episode outline for [PODCAST NAME]. Episode topic: [TOPIC]. Format: [solo/interview/panel]. Duration: [X] minutes. Include: cold open hook, intro segment, 3-4 main segments with questions/talking points, listener question segment, and outro with CTA. For interview format, include 10 questions ordered from easy to deep.",
    exampleOutput:
      "0:00 Cold open — provocative statement about [topic] | 0:30 Intro + episode promise | 2:00 Segment 1: [subtopic] — 3 talking points | 15:00 Segment 2: [subtopic] | 25:00 Listener Q&A | 28:00 Outro + next episode teaser",
    tags: ["podcast", "outline", "planning", "episode"],
    popularity: 678,
    createdAt: "2025-10-12",
  },
  {
    id: "p-32",
    title: "Podcast Show Notes Writer",
    description: "Write SEO-friendly show notes that drive traffic and listener engagement.",
    category: "Podcast Production",
    aiModel: "ChatGPT",
    useCase: "Publishing show notes after recording a podcast episode.",
    expectedOutput: "Complete show notes with summary, timestamps, links, and key quotes.",
    promptText:
      "Write show notes for a podcast episode about [TOPIC] with guest [GUEST NAME]. Include: (1) Episode summary — 2-3 sentences, (2) Key timestamps with descriptions, (3) 5 notable quotes, (4) Resources/links mentioned, (5) Guest bio, (6) CTA for listeners. Optimize for SEO with keyword '[KEYWORD]'.",
    exampleOutput:
      "Episode 42: [Guest] on [Topic]\n\nIn this episode, [guest] shares how they [achievement]. We cover [point 1], [point 2], and [point 3].\n\nTimestamps:\n0:00 — Intro\n3:15 — [Segment title]\n...",
    tags: ["podcast", "show-notes", "seo", "content"],
    popularity: 534,
    createdAt: "2025-09-18",
  },
  {
    id: "p-33",
    title: "Podcast Clip Caption Writer",
    description: "Write captions for podcast clips shared on social media.",
    category: "Podcast Production",
    aiModel: "Gemini",
    useCase: "Promoting podcast episodes via short clips on social media.",
    expectedOutput: "5 clip captions with hooks optimized for each platform.",
    promptText:
      "Write social media captions for 5 podcast clips from an episode about [TOPIC]. For each clip, provide captions for: Instagram Reels, TikTok, LinkedIn, and Twitter/X. Each caption should hook in the first line, provide context, and include a CTA to listen to the full episode. Include relevant hashtags per platform.",
    exampleOutput:
      "Reels: 'This 30-second clip changed how I think about [topic]. 🎙️ Full episode link in bio.' | LinkedIn: 'My guest dropped a truth bomb about [topic] that every [role] needs to hear.'",
    tags: ["podcast", "clips", "social-media", "promotion"],
    popularity: 456,
    createdAt: "2025-07-25",
  },
  {
    id: "p-34",
    title: "Audience Persona Builder",
    description: "Build detailed audience personas for content targeting.",
    category: "Audience Research",
    aiModel: "Claude",
    useCase: "Understanding your target audience before creating content.",
    expectedOutput: "2-3 detailed personas with demographics, pain points, and content preferences.",
    promptText:
      "Create 3 detailed audience personas for a [NICHE] content creator. For each persona include: Name & age, Job/role, Goals, Top 3 pain points, Content they consume, Platforms they use, Buying triggers, Language they use, Objections to your content. Base personas on realistic [NICHE] audience segments.",
    exampleOutput:
      "Persona 1: 'Startup Sarah' — 28, Marketing Manager at SaaS startup. Goals: Grow personal brand to land a CMO role. Pain points: No time to create content, imposter syndrome, doesn't know which platform to focus on.",
    tags: ["audience", "persona", "research", "targeting"],
    popularity: 723,
    createdAt: "2025-11-08",
  },
  {
    id: "p-35",
    title: "Audience Pain Point Miner",
    description: "Discover what your audience struggles with by analyzing forums and comments.",
    category: "Audience Research",
    aiModel: "Perplexity",
    useCase: "Finding content ideas based on real audience pain points.",
    expectedOutput: "15 pain points ranked by frequency with content angle suggestions.",
    promptText:
      "Research the top pain points, questions, and frustrations that [TARGET AUDIENCE] in the [NICHE] space discuss online. Sources to consider: Reddit, Quora, Twitter, YouTube comments, forums. List 15 pain points ranked by how frequently they appear. For each, suggest a content piece (video, post, article) that addresses it.",
    exampleOutput:
      "1. 'I don't know what to post' (High frequency) → Content: 'Content Idea Generator: 30 Days of Posts for [Niche]' | 2. 'My engagement is dropping' → Content: 'Why Your [Platform] Engagement Dropped (And the Fix)'",
    tags: ["audience", "pain-points", "research", "ideas"],
    popularity: 812,
    createdAt: "2025-10-01",
  },
  {
    id: "p-36",
    title: "Audience Survey Question Generator",
    description: "Create survey questions to understand your audience's needs and preferences.",
    category: "Audience Research",
    aiModel: "ChatGPT",
    useCase: "Running audience surveys to guide content strategy.",
    expectedOutput: "15 survey questions across demographics, preferences, and pain points.",
    promptText:
      "Create a 15-question audience survey for a [NICHE] content creator with [AUDIENCE SIZE] followers. Include: 3 demographic questions, 4 content preference questions, 4 pain point/challenge questions, 2 platform usage questions, 2 open-ended questions. Mix multiple choice and open-ended. Keep it completable in under 3 minutes.",
    exampleOutput:
      "Q1: What's your primary role? (Student / Employee / Freelancer / Business Owner) | Q7: What's your biggest content creation challenge right now? (Open-ended)",
    tags: ["audience", "survey", "research", "feedback"],
    popularity: 445,
    createdAt: "2025-08-07",
  },
  {
    id: "p-37",
    title: "Competitor Content Analyzer",
    description: "Analyze a competitor's content strategy and find gaps you can exploit.",
    category: "Competitor Research",
    aiModel: "Perplexity",
    useCase: "Understanding what competitors publish and finding content gaps.",
    expectedOutput: "Competitor analysis with content themes, gaps, and opportunities.",
    promptText:
      "Analyze the content strategy of [COMPETITOR NAME/CHANNEL] in the [NICHE] space. Cover: (1) Their top 5 content themes, (2) Formats they use most, (3) Posting frequency, (4) What performs best for them, (5) Content gaps they're NOT covering, (6) 5 content ideas I can create to fill those gaps with my unique angle: [YOUR ANGLE].",
    exampleOutput:
      "Top themes: Tutorials (40%), Industry news (25%), Personal stories (20%). Gap: They never cover [subtopic]. Opportunity: Create a series on [specific angle] — no one in this niche is doing this.",
    tags: ["competitor", "analysis", "research", "strategy"],
    popularity: 756,
    createdAt: "2025-09-25",
  },
  {
    id: "p-38",
    title: "Competitor Hook Breakdown",
    description: "Reverse-engineer why a competitor's content hooks work so well.",
    category: "Competitor Research",
    aiModel: "Claude",
    useCase: "Learning from successful competitor content openings.",
    expectedOutput: "Analysis of 5 competitor hooks with psychological breakdown.",
    promptText:
      "Analyze these 5 hooks from [COMPETITOR]'s top-performing content: [PASTE HOOKS OR DESCRIBE VIDEOS]. For each hook, explain: (1) What psychological trigger it uses, (2) Why it stops the scroll, (3) How I can adapt this formula for my niche ([NICHE]) without copying, (4) Write 2 adapted versions for my content.",
    exampleOutput:
      "Hook: 'I made $10K in 30 days doing this one thing' | Trigger: Specificity + social proof + curiosity | Adaptation: 'I gained 5K followers in 30 days with this one [niche] strategy'",
    tags: ["competitor", "hooks", "analysis", "adaptation"],
    popularity: 623,
    createdAt: "2025-12-02",
  },
  {
    id: "p-39",
    title: "Content Strategy 90-Day Plan",
    description: "Build a 90-day content strategy with themes, formats, and KPIs.",
    category: "Content Strategy",
    aiModel: "Claude",
    useCase: "Quarterly content planning for creators and marketers.",
    expectedOutput: "A 90-day plan with monthly themes, weekly content mix, and measurable KPIs.",
    promptText:
      "Create a 90-day content strategy for a [NICHE] creator on [PLATFORMS]. Current stats: [FOLLOWERS/VIEWS]. Goals: [GOALS]. Include: Monthly themes (3), Weekly content mix per platform, Content pillars (4-5), KPIs to track, Milestone checkpoints at day 30/60/90. Balance growth content (70%) with monetization content (30%).",
    exampleOutput:
      "Month 1 Theme: 'Foundation' — Establish core content pillars | Week 1: 2 tutorials + 1 personal story + 1 trend | KPI: 10% follower growth | Checkpoint: Review top 3 performing posts and double down.",
    tags: ["strategy", "planning", "90-day", "content"],
    popularity: 867,
    createdAt: "2025-11-15",
  },
  {
    id: "p-40",
    title: "Content Pillar Definition",
    description: "Define 4-5 content pillars that align with your brand and audience.",
    category: "Content Strategy",
    aiModel: "ChatGPT",
    useCase: "Establishing consistent content themes for your brand.",
    expectedOutput: "4-5 content pillars with descriptions, example topics, and content ratios.",
    promptText:
      "Define 5 content pillars for a [NICHE] creator whose expertise is [EXPERTISE] and audience is [AUDIENCE]. For each pillar: Name, Description (1 sentence), 5 example content topics, Recommended content ratio (%), Best platforms for this pillar. Pillars should cover: education, entertainment, inspiration, promotion, and community.",
    exampleOutput:
      "Pillar 1: 'Quick Wins' (30%) — Actionable tips under 60 seconds | Topics: Hacks, tools, shortcuts | Best on: TikTok, Reels",
    tags: ["strategy", "pillars", "brand", "planning"],
    popularity: 698,
    createdAt: "2025-08-19",
  },
  {
    id: "p-41",
    title: "YouTube to TikTok Repurposer",
    description: "Turn a long YouTube video into 5+ TikTok clips with scripts.",
    category: "Content Repurposing",
    aiModel: "ChatGPT",
    useCase: "Extracting short-form content from long-form YouTube videos.",
    expectedOutput: "5 TikTok clip ideas with timestamps, hooks, and captions.",
    promptText:
      "I have a YouTube video about [TOPIC] ([LENGTH] minutes). Extract 5 standalone TikTok clips. For each: (1) Timestamp range from the original, (2) 15-second hook script, (3) On-screen text, (4) Caption for TikTok, (5) Why this segment works as standalone content. Each clip should deliver value without needing the full video context.",
    exampleOutput:
      "Clip 1 (3:45-4:15): Hook — 'This one mistake is killing your [result]' | Text overlay: 'STOP DOING THIS' | Caption: 'Lesson #3 from my latest video — full breakdown on YouTube (link in bio)'",
    tags: ["repurposing", "youtube", "tiktok", "clips"],
    popularity: 912,
    createdAt: "2025-10-30",
  },
  {
    id: "p-42",
    title: "Blog to Social Media Thread",
    description: "Transform a blog post into an engaging Twitter/X or LinkedIn thread.",
    category: "Content Repurposing",
    aiModel: "Claude",
    useCase: "Promoting blog content via social media threads.",
    expectedOutput: "A 8-12 tweet/thread with hooks, key points, and CTA.",
    promptText:
      "Turn this blog post summary into a Twitter/X thread: [PASTE SUMMARY OR KEY POINTS]. Structure: Tweet 1 — Hook (most surprising insight), Tweets 2-8 — One key point per tweet with mini-story or example, Final tweet — Summary + CTA to read full post. Each tweet under 280 characters. Use line breaks for readability.",
    exampleOutput:
      "1/ I analyzed 100 [topic] strategies. Only 3 actually work.\n\nHere's what the data shows 🧵\n\n2/ First — [insight with example]\n\n3/ Second — [insight with data point]\n\n...\n\n8/ Full breakdown with templates: [link]",
    tags: ["repurposing", "thread", "twitter", "blog"],
    popularity: 734,
    createdAt: "2025-09-12",
  },
  {
    id: "p-43",
    title: "Podcast to Newsletter Converter",
    description: "Turn a podcast episode into a newsletter edition.",
    category: "Content Repurposing",
    aiModel: "Gemini",
    useCase: "Repurposing podcast content for email subscribers.",
    expectedOutput: "A newsletter edition derived from podcast episode content.",
    promptText:
      "Convert this podcast episode into a newsletter edition: Episode topic: [TOPIC], Key points discussed: [POINTS], Guest: [GUEST]. Format: Personal intro referencing the episode, 3-5 key takeaways with your commentary, best quote from the episode, CTA to listen to full episode. Tone: conversational, like sharing a great conversation with a friend.",
    exampleOutput:
      "This week on the pod, [guest] said something that stopped me in my tracks: '[quote]'. Here's the full context and why it matters for you...",
    tags: ["repurposing", "podcast", "newsletter", "content"],
    popularity: 567,
    createdAt: "2025-11-22",
  },
  {
    id: "p-44",
    title: "One Idea, Ten Formats",
    description: "Take one content idea and map it to 10 different content formats.",
    category: "Content Repurposing",
    aiModel: "ChatGPT",
    useCase: "Maximizing content output from a single idea.",
    expectedOutput: "10 format variations with platform, angle, and production notes.",
    promptText:
      "Take this content idea: '[IDEA]' and map it to 10 different formats: (1) YouTube long-form, (2) YouTube Short, (3) TikTok, (4) Instagram Reel, (5) LinkedIn post, (6) LinkedIn carousel, (7) Twitter/X thread, (8) Newsletter section, (9) Blog post, (10) Podcast talking points. For each: platform, specific angle/hook, and estimated production time.",
    exampleOutput:
      "Format 1 — YouTube (10 min): Deep-dive tutorial with screen recording | Format 4 — Reel (30 sec): Quick tip with text overlay — 'The [topic] hack nobody shows you' | Format 8 — Newsletter: Personal story intro + 3 bullet takeaways",
    tags: ["repurposing", "multi-format", "content", "efficiency"],
    popularity: 845,
    createdAt: "2025-12-10",
  },
  {
    id: "p-45",
    title: "Webinar to Content Suite",
    description: "Repurpose a webinar recording into multiple content assets.",
    category: "Content Repurposing",
    aiModel: "Claude",
    useCase: "Extracting maximum value from a live webinar or workshop.",
    expectedOutput: "A content suite plan with 8+ assets from one webinar.",
    promptText:
      "I hosted a webinar about [TOPIC] for [AUDIENCE] ([DURATION] minutes). Create a repurposing plan to turn it into: (1) Blog post summary, (2) 3 social media clips, (3) Email to attendees, (4) Email to non-attendees, (5) LinkedIn carousel, (6) Quote graphics (5 quotes), (7) FAQ document, (8) Lead magnet PDF outline. For each asset, specify content focus and key messages.",
    exampleOutput:
      "Blog post: 'Everything from our [Topic] Workshop' — 1500 words covering 5 key frameworks | Clip 1 (0:15-0:45): Opening hook about [pain point] → TikTok + Reels",
    tags: ["repurposing", "webinar", "content-suite", "marketing"],
    popularity: 589,
    createdAt: "2026-01-15",
  },
  {
    id: "p-46",
    title: "Tweet to LinkedIn Post Expander",
    description: "Expand a viral tweet into a full LinkedIn post with depth.",
    category: "Content Repurposing",
    aiModel: "ChatGPT",
    useCase: "Turning short-form social posts into long-form content.",
    expectedOutput: "An expanded LinkedIn post with story, context, and engagement hook.",
    promptText:
      "Expand this tweet into a full LinkedIn post: '[TWEET TEXT]'. Add: personal context/story behind the insight, 2-3 supporting examples, a counterargument and your response, and an engagement question. Keep the core insight from the tweet as the anchor. Format with short paragraphs and line breaks.",
    exampleOutput:
      "Original tweet: 'The best content strategy is consistency, not perfection.'\n\nExpanded: 'I used to spend 8 hours on one post. Now I publish daily.\n\nHere's what changed when I stopped chasing perfection...'",
    tags: ["repurposing", "tweet", "linkedin", "expansion"],
    popularity: 512,
    createdAt: "2025-07-15",
  },
  {
    id: "p-47",
    title: "Personal Brand Statement Writer",
    description: "Craft a clear personal brand statement for your bio and content.",
    category: "Personal Branding",
    aiModel: "Claude",
    useCase: "Defining your personal brand for social media bios and about pages.",
    expectedOutput: "3 brand statement variations at different lengths (one-liner, short, full).",
    promptText:
      "Write personal brand statements for [NAME], who helps [AUDIENCE] achieve [RESULT] through [METHOD/EXPERTISE]. Create 3 versions: (1) One-liner (under 10 words) for Twitter bio, (2) Short (under 30 words) for Instagram/LinkedIn bio, (3) Full (under 80 words) for website About page. Each should communicate: who you help, what you help them do, and why you're different.",
    exampleOutput:
      "One-liner: 'Helping creators grow without burning out.' | Short: 'I teach content creators how to grow on YouTube and TikTok using systems, not hustle. 500K+ community.' | Full: [Extended version with story element]",
    tags: ["personal-brand", "bio", "statement", "positioning"],
    popularity: 756,
    createdAt: "2025-10-05",
  },
  {
    id: "p-48",
    title: "Creator Bio Optimizer",
    description: "Optimize your social media bios for clarity, credibility, and conversion.",
    category: "Personal Branding",
    aiModel: "ChatGPT",
    useCase: "Updating bios across social media platforms.",
    expectedOutput: "Optimized bios for 4 platforms with conversion-focused CTAs.",
    promptText:
      "Optimize social media bios for a [NICHE] creator. Current info: [BACKGROUND, RESULTS, OFFER]. Write optimized bios for: (1) Instagram (150 chars), (2) TikTok (80 chars), (3) LinkedIn (headline + about), (4) YouTube (1000 chars). Each bio should: state who you help, show credibility, include a CTA. Use emojis sparingly and strategically.",
    exampleOutput:
      "Instagram: 'YouTube & TikTok growth tips 🎬 | Helped 10K+ creators | Free guide 👇' | TikTok: 'Daily creator tips | 500K+ taught | Link = free course'",
    tags: ["personal-brand", "bio", "social-media", "optimization"],
    popularity: 634,
    createdAt: "2025-09-08",
  },
  {
    id: "p-49",
    title: "Personal Brand Content Voice Guide",
    description: "Define your unique content voice and tone guidelines.",
    category: "Personal Branding",
    aiModel: "Claude",
    useCase: "Maintaining consistent voice across all content platforms.",
    expectedOutput: "A voice guide with tone attributes, do's/don'ts, and example phrases.",
    promptText:
      "Create a content voice guide for [CREATOR NAME/BRAND]. Brand personality: [TRAITS]. Audience: [AUDIENCE]. Include: (1) 5 voice attributes with definitions, (2) Tone spectrum (formal ↔ casual, serious ↔ playful), (3) 10 'Do say' example phrases, (4) 10 'Don't say' example phrases, (5) How voice adapts per platform (YouTube vs LinkedIn vs TikTok).",
    exampleOutput:
      "Voice attribute: 'Direct' — We say what others won't. No fluff, no hedging. | Do say: 'Here's the truth about [X]' | Don't say: 'In my humble opinion, maybe consider...'",
    tags: ["personal-brand", "voice", "tone", "guidelines"],
    popularity: 523,
    createdAt: "2025-11-28",
  },
  {
    id: "p-50",
    title: "Creator Media Kit Writer",
    description: "Write a professional media kit for brand partnerships and sponsorships.",
    category: "Personal Branding",
    aiModel: "Gemini",
    useCase: "Pitching to brands for sponsorships and collaborations.",
    expectedOutput: "A media kit outline with stats, audience demographics, and partnership options.",
    promptText:
      "Create a media kit outline for [CREATOR NAME], a [NICHE] creator. Stats: [PLATFORM STATS]. Include sections: (1) About/Bio, (2) Audience demographics, (3) Platform breakdown with engagement rates, (4) Content examples (3), (5) Partnership options (sponsored post, integration, ambassador), (6) Past brand collaborations, (7) Contact info. Write copy for each section.",
    exampleOutput:
      "About: '[Name] is a [niche] creator with [X] combined followers across YouTube, TikTok, and Instagram. Known for [unique angle].' | Partnership options: Dedicated video ($X), Integration segment ($X), Monthly ambassador ($X)",
    tags: ["personal-brand", "media-kit", "sponsorship", "monetization"],
    popularity: 478,
    createdAt: "2025-12-25",
  },
];

export function getPromptById(id: string): Prompt | undefined {
  return prompts.find((p) => p.id === id);
}

export function getPromptsByCategory(category: string): Prompt[] {
  return prompts.filter((p) => p.category === category);
}

export function getPromptsByIds(ids: string[]): Prompt[] {
  return ids.map((id) => getPromptById(id)).filter(Boolean) as Prompt[];
}
