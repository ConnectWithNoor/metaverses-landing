'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../{utils}/motion';
import styles from '../{styles}';
import Image from 'next/image';

type Props = {
  index: number;
  active: string;
  handleClick: React.Dispatch<React.SetStateAction<string>>;
  world: {
    id: string;
    imgUrl: string;
    title: string;
  };
};

const ExploreCard = ({
  index,
  active,
  handleClick,
  world: { id, imgUrl, title },
}: Props) => (
  <motion.div
    variants={fadeIn('right', 'spring', index + 0.5, 0.75)}
    initial='hidden'
    whileInView='show'
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-all duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      fill
      alt={title}
      className='object-cover rounded-[24px] '
    />
    {active === id ? (
      <div className='absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'>
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] glassmorphism rounded-[24px]  mb-[16px]`}
        >
          <div className='relative w-1/2 h-1/2'>
            <Image
              src='/headset.svg'
              className='object-contain'
              fill
              alt={title}
            />
          </div>
        </div>
        <p className='font-normal text-[16px] leading-[20px] text-white uppercase'>
          Enter the Metaverse
        </p>
        <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white'>
          {title}
        </h2>
      </div>
    ) : (
      <h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
        {title}
      </h3>
    )}
  </motion.div>
);

export default memo(ExploreCard);
