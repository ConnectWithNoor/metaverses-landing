'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../{utils}/motion';

type Props = {
  title: string;
  className: string;
};

export const TypingText = ({ title, className }: Props) => (
  <motion.p
    variants={textContainer}
    initial='hidden'
    whileInView='show'
    className='font-normal text-[14px] text-secondary-white'
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
        key={letter + index}
        variants={textVariant2}
        initial='hidden'
        whileInView='show'
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, className }: Props) => <h2>Title Text</h2>;
