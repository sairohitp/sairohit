import type { Block, Project } from '../data/types';
import { cardSubtitle, projectHref } from '../data/projects';
import { abs } from './seo';

/* Plain-text versions of the case studies, for llms-full.txt. */

function block(b: Block): string[] {
  switch (b.type) {
    case 'meta':
      return [`Role: ${b.role}`, ...(b.team?.length ? [`Team: ${b.team.join(', ')}`] : []), `Timeline: ${b.timeline}`, ...b.overview];
    case 'text':
      return [`#### ${b.heading}`, ...(b.body ?? []), ...[...(b.list ?? []), ...(b.cards ?? [])].map((c) => `- ${c.title ? `${c.title}: ` : ''}${c.text}`)];
    case 'callout':
      return [`${b.label}: ${b.statement}`, ...(b.stats ?? []).map((s) => `- ${s.prefix ?? ''}${s.value}${s.suffix ?? ''} ${s.label}`)];
    case 'cardGrid':
      return b.cards.map((c) => `- ${c.title ? `${c.title}: ` : ''}${c.text}`);
    case 'flow':
      return [`Flow: ${b.steps.map((s) => s.label).join(' > ')}`];
    case 'tree':
      return [`Structure of ${b.root}:`, ...b.groups.map((g) => `- ${g.label}: ${g.items.join(', ')}`)];
    case 'palette':
      return [`Palette: ${b.swatches.map((s) => `${s.name} ${s.hex}`).join(', ')}`];
    case 'stats':
      return b.items.map((s) => `- ${s.prefix ?? ''}${s.value}${s.suffix ?? ''} ${s.label}`);
    case 'faq':
      return b.items.flatMap((i) => [`Q: ${i.q}`, `A: ${i.a}`]);
    case 'goals':
      return [`UN Sustainable Development Goals: ${b.items.map((g) => `${g.number} ${g.name}`).join(', ')}`];
    case 'exhibit':
      return b.caption ? [`[Image: ${b.caption.text}]`] : [];
    case 'exhibitPair':
      return b.items.flatMap((i) => (i.caption ? [`[Image: ${i.caption.text}]`] : []));
    case 'compare':
      return b.caption ? [`[Comparison: ${b.caption.text}]`] : [];
    case 'gallery':
      return b.caption ? [`[Gallery: ${b.caption.text}]`] : [];
    default:
      return [];
  }
}

export function caseStudyText(p: Project): string {
  const lines = [`## ${p.title}`, `URL: ${abs(projectHref(p))}`, `${cardSubtitle(p)}; ${p.platform === 'mobile' ? 'Mobile' : 'Web'}${p.period ? `; ${p.period}` : ''}`];
  if (p.figma) lines.push(`Figma: ${p.figma}`);
  for (const s of p.caseStudy.sections) {
    lines.push('', `### ${s.label}${s.title ? `: ${s.title}` : ''}`);
    s.blocks.forEach((b) => lines.push(...block(b)));
  }
  return lines.join('\n');
}
