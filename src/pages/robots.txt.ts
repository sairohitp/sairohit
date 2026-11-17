import type { APIRoute } from 'astro';
import { abs } from '../lib/seo';

/*
 * Crawlers read robots.txt only at the host root (https://sairohitp.github.io/robots.txt).
 * This copy documents the intended rules; see docs/SEO.md for publishing it at the root.
 */
const AI_BOTS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Meta-ExternalAgent', 'Amazonbot',
  'DuckAssistBot', 'CCBot', 'cohere-ai', 'MistralAI-User',
];

export const GET: APIRoute = () => {
  const body = [
    '# Everyone, including search engines and AI assistants, is welcome to read this site.',
    'User-agent: *',
    'Allow: /',
    '',
    ...AI_BOTS.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${abs('/sitemap.xml')}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
