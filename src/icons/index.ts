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
import arrowDown from './svg/arrow-down-regular.svg?raw';
import figma from './svg/figma-logo-regular.svg?raw';
import caretLeft from './svg/caret-left-regular.svg?raw';
import caretRight from './svg/caret-right-regular.svg?raw';

import envelopeSimpleIcon from './svg/envelope-simple-regular.svg?raw';
import copyIcon from './svg/copy-regular.svg?raw';
import checkIcon from './svg/check-regular.svg?raw';
import mapPinIcon from './svg/map-pin-regular.svg?raw';
import trophyIcon from './svg/trophy-regular.svg?raw';
import medalIcon from './svg/medal-regular.svg?raw';
import certificateIcon from './svg/certificate-regular.svg?raw';
import graduationCapIcon from './svg/graduation-cap-regular.svg?raw';
import briefcaseIcon from './svg/briefcase-regular.svg?raw';
import rocketLaunchIcon from './svg/rocket-launch-regular.svg?raw';
import codeSimpleIcon from './svg/code-simple-regular.svg?raw';
import caretDownIcon from './svg/caret-down-regular.svg?raw';
import chartBarIcon from './svg/chart-bar-regular.svg?raw';
import handshakeIcon from './svg/handshake-regular.svg?raw';
import microphoneStageIcon from './svg/microphone-stage-regular.svg?raw';
import buildingsIcon from './svg/buildings-regular.svg?raw';
import plusIcon from './svg/plus-regular.svg?raw';

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
  'arrow-down': arrowDown,
  figma,
  'caret-left': caretLeft,
  'caret-right': caretRight,
  'envelope-simple': envelopeSimpleIcon,
  'copy': copyIcon,
  'check': checkIcon,
  'map-pin': mapPinIcon,
  'trophy': trophyIcon,
  'medal': medalIcon,
  'certificate': certificateIcon,
  'graduation-cap': graduationCapIcon,
  'briefcase': briefcaseIcon,
  'rocket-launch': rocketLaunchIcon,
  'code-simple': codeSimpleIcon,
  'caret-down': caretDownIcon,
  'chart-bar': chartBarIcon,
  'handshake': handshakeIcon,
  'microphone-stage': microphoneStageIcon,
  'buildings': buildingsIcon,
  'plus': plusIcon,
} as const;

export type IconName = keyof typeof icons;
