// Phosphor Icons (MIT, https://phosphoricons.com), vendored in ./svg and inlined at build time.
// To add an icon: download the SVG into ./svg, then import it below.
import arrowRight from './svg/arrow-right-light.svg?raw';
import arrowLeft from './svg/arrow-left-regular.svg?raw';
import arrowUpRight from './svg/arrow-up-right-regular.svg?raw';
import linkedin from './svg/linkedin-logo-light.svg?raw';
import github from './svg/github-logo-light.svg?raw';
import dribbble from './svg/dribbble-logo-light.svg?raw';
import sun from './svg/sun-regular.svg?raw';
import sunLight from './svg/sun-light.svg?raw';
import clock from './svg/clock-regular.svg?raw';
import key from './svg/key-regular.svg?raw';
import thumbsDown from './svg/thumbs-down-regular.svg?raw';
import database from './svg/database-regular.svg?raw';
import lightbulb from './svg/lightbulb-regular.svg?raw';
import target from './svg/target-regular.svg?raw';
import users from './svg/users-regular.svg?raw';
import sparkle from './svg/sparkle-regular.svg?raw';
import checkCircle from './svg/check-circle-regular.svg?raw';
import cursorClick from './svg/cursor-click-regular.svg?raw';

export const icons = {
  'arrow-right': arrowRight,
  'arrow-left': arrowLeft,
  'arrow-up-right': arrowUpRight,
  linkedin,
  github,
  dribbble,
  sun,
  'sun-light': sunLight,
  clock,
  key,
  'thumbs-down': thumbsDown,
  database,
  lightbulb,
  target,
  users,
  sparkle,
  'check-circle': checkCircle,
  'cursor-click': cursorClick,
} as const;

export type IconName = keyof typeof icons;
