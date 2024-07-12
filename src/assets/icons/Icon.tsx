import React from 'react';
interface SvgIconProps {
  className?: string;
  onClick?: () => void;
}

const PlayingMusicIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    color="#FFFFFF"
    aria-hidden="true"
    focusable="false"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path>
  </svg>
);

const CloseMusicIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    color="#FFFFFF"
    aria-hidden="true"
    focusable="false"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4.27 3 3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z" />
  </svg>
);

const CloseIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    color="#FFFFFF"
    aria-hidden="true"
    focusable="false"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: 'rgb(255, 255, 255)' }}
    className={className}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

const HamburgerIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    color="#FFFFFF"
    aria-hidden="true"
    focusable="false"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: 'rgb(255, 255, 255)' }}
    className={className}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

const ArrowBottomIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    height="17"
    width="17"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
  </svg>
);

const ArrowLeftIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
    color="bgSecondary"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    ></path>
  </svg>
);

const ArrowRightIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 16l-4-4m0 0l4-4m-4 4h18"
    ></path>
  </svg>
);

export {
  PlayingMusicIcon,
  CloseMusicIcon,
  CloseIcon,
  HamburgerIcon,
  ArrowBottomIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
};
