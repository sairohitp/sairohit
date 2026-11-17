import type { Block, CaseStudy, Card, Caption, Exhibit, Section } from './types';

/*
 * Placeholder case study that mirrors the agreed project layout section by section.
 * Every project starts from this skeleton; replace copy and media per project in projects.ts.
 */

const P = 'Placeholder copy.';

const cap = (number: string, type = 'Image', text = 'Short description of this exhibit.'): Caption => ({
  type,
  number,
  text,
});

const ex = (number: string, opts: { type?: string; text?: string; ratio?: string; label?: string } = {}): Exhibit => ({
  media: { ratio: opts.ratio, label: opts.label ?? '1600 x 1000' },
  caption: cap(number, opts.type, opts.text),
});

const exhibit = (number: string, opts?: Parameters<typeof ex>[1]): Block => ({ type: 'exhibit', ...ex(number, opts) });

const text = (heading: string, body: string[], extra: Partial<Extract<Block, { type: 'text' }>> = {}): Block => ({
  type: 'text',
  heading,
  body,
  ...extra,
});

const card = (title: string, textValue = 'One line that explains this point.', icon: Card['icon'] = 'sun'): Card => ({
  icon,
  title,
  text: textValue,
});

const cards = (prefix: string, count: number): Card[] =>
  Array.from({ length: count }, (_, i) => card(`${prefix} ${i + 1}`));

const challenge = (): Block => ({
  type: 'callout',
  label: 'The Challenge',
  icon: 'sun-light',
  statement: 'State the single challenge this project set out to solve, in one or two lines.',
});

export function placeholderCaseStudy(): CaseStudy {
  const sections: Section[] = [
    {
      id: 'overview',
      label: 'Overview',
      divider: false,
      blocks: [
        {
          type: 'meta',
          role: 'Your role, followed by disciplines (e.g. Interaction Design, Visual Design, User Flows).',
          team: ['Name, Role', 'Name, Role', 'Name, Role', 'Name, Role'],
          timeline: 'Duration, status (e.g. 2 months, launched in Month Year)',
          overview: [
            `${P} Introduce the product, who it is for, and why the project started.`,
            `${P} Describe what you owned end to end and the decisions you drove.`,
            `${P} Close with the outcome: adoption, feedback, or measurable impact.`,
          ],
        },
      ],
    },
    {
      id: 'highlights',
      label: 'Highlights',
      divider: false,
      blocks: [
        {
          type: 'callout',
          label: 'Highlights',
          icon: 'sun-light',
          statement: 'A one-sentence summary of what was delivered and why it mattered.',
          exhibits: [
            ex('0.1', { type: 'Video loop', text: 'Homepage motion concept' }),
            ex('0.2'),
            ex('0.3'),
            ex('0.4'),
          ],
        },
      ],
    },
    {
      id: 'context',
      label: 'Context',
      title: 'Context headline goes here.',
      blocks: [
        text('Supporting subheading.', [`${P} Set the scene: the users, the situation and the opportunity.`]),
        exhibit('1.0'),
        exhibit('1.1'),
      ],
    },
    {
      id: 'the-problem',
      label: 'The Problem',
      title: 'Problem headline goes here.',
      blocks: [
        text(
          'Constraints we worked within.',
          [
            `${P} Explain why the obvious solution was not possible.`,
            `${P} Introduce the constraints the team had to work within:`,
          ],
          {
            list: [
              { icon: 'clock', text: 'Constraint one. A short explanation of the limitation.' },
              { icon: 'key', text: 'Constraint two. A short explanation of the limitation.' },
              { icon: 'thumbs-down', text: 'Constraint three. A short explanation of the limitation.' },
              { icon: 'database', text: 'Constraint four. A short explanation of the limitation.' },
            ],
          },
        ),
        challenge(),
        text('North Star design principles:', [], { cards: cards('Principle', 3) }),
        exhibit('2.0'),
      ],
    },
    {
      id: 'update-flow',
      label: 'Update Flow',
      title: 'Flow headline goes here.',
      blocks: [
        text('Where it started.', [`${P} Describe the starting point and reference it (Exhibit 3.0).`]),
        exhibit('3.0'),
        text('Finding structure.', [
          `${P} Explain how you organised the flow into clear stages.`,
          `${P} Note any wording or content changes made for a general audience.`,
        ]),
        exhibit('3.1'),
        { type: 'cardGrid', cards: cards('Decision', 4) },
        text('Breaking the rhythm.', [`${P} Call out the step that needed special treatment and why.`]),
        {
          type: 'exhibitPair',
          items: [
            { ...ex('3.2', { ratio: '3 / 4', label: '1200 x 1600' }), cards: cards('Detail', 3) },
            { ...ex('3.3', { ratio: '3 / 4', label: '1200 x 1600' }), cards: cards('Detail', 3) },
          ],
        },
      ],
    },
    {
      id: 'layout',
      label: 'Layout',
      title: 'Layout headline goes here.',
      blocks: [
        text('Layout decision.', [
          `${P} Explain how the layout supports the primary action.`,
          `${P} Mention anything removed or disabled to keep focus.`,
        ]),
        exhibit('4.0'),
        text('A second layout decision.', [`${P} Describe how the layout adapts across states or screens.`]),
        exhibit('4.1'),
      ],
    },
    {
      id: 'interactions',
      label: 'Interactions',
      title: 'Interactions headline goes here.',
      blocks: [
        text('Trade-off between two approaches.', [
          `${P} Describe your first approach and why it seemed right in theory (Exhibit 5.0).`,
          `${P} Explain what you learned in practice and the pivot you made (Exhibit 5.1).`,
        ]),
        {
          type: 'exhibitPair',
          items: [
            { ...ex('5.0', { ratio: '3 / 4', label: '1200 x 1600' }), cards: cards('Before', 2) },
            { ...ex('5.1', { ratio: '3 / 4', label: '1200 x 1600' }), cards: cards('After', 2) },
          ],
        },
        text('Micro-interactions.', [`${P} Describe motion or feedback details that made the experience feel alive.`]),
        exhibit('5.2', { type: 'Video loop', text: 'Interaction detail' }),
      ],
    },
    {
      id: 'visual-design',
      label: 'Visual Design',
      title: 'Visual design headline goes here.',
      blocks: [
        text('Visual direction.', [`${P} Explain the colour, type and component choices.`]),
        exhibit('6.0'),
        text('Design system.', [`${P} Show the building blocks that kept the screens consistent.`]),
        exhibit('6.1', { ratio: '750 / 195', label: '1600 x 416', text: 'Colour palette' }),
        exhibit('6.2', { ratio: '750 / 195', label: '1600 x 416', text: 'Typography scale' }),
      ],
    },
    {
      id: 'final-designs',
      label: 'Final Designs',
      title: 'Final designs headline goes here.',
      blocks: [
        text('The shipped experience.', [`${P} Walk through the final screens in the order a user meets them.`]),
        exhibit('7.0'),
        exhibit('7.1'),
        exhibit('7.2'),
      ],
    },
    {
      id: 'retrospective',
      label: 'Retrospective',
      title: 'Retrospective headline goes here.',
      blocks: [
        text('Looking back.', [
          `${P} Summarise the outcome and what you would do differently.`,
          `${P} Share any feedback from users, stakeholders or the community.`,
        ]),
        exhibit('8.0'),
        text('Project Takeaways:', [], { cards: cards('Takeaway', 4) }),
      ],
    },
  ];

  return {
    cover: { label: 'Cover image, 1600 x 920', ratio: '750 / 430' },
    sections,
  };
}
