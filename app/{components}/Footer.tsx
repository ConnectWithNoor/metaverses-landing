'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { socials } from '../{constants}';
import styles from '../{styles}';
import { footerVariants } from '../{utils}/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.paddings} py-8 relative`}
  >
    <div className='footer-gradient' />
    {/* footer container */}
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      {/* first row */}
      <div className='flex items-center justify-between flex-wrap gap-5'>
        <h4 className='font-bold md:text-[64px] text-[44px] text-white'>
          Enter the Metaverse
        </h4>
        <button
          type='button'
          className='flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]'
        >
          <div className='relative w-[24px] h-[24px]'>
            <Image
              src='/headset.svg'
              alt='headset'
              fill
              className='object-contain'
            />
          </div>

          <span className='font-normal text-[16px] text-white uppercase'>
            Enter Metaverse
          </span>
        </button>
      </div>

      <div className='flex flex-col'>
        {/* horizontal line */}

        <div className='mb-[50px] h-[2px] bg-white opacity-10' />
        {/* second row */}

        <div className='flex item-center justify-between flex-wrap gap-4'>
          {/* logo */}
          <h4 className='font-extrabold text-[24px] text-white'>Metaverses</h4>
          {/* copyright */}
          <p className='font-normal text-[14px] text-white opacity-50'>
            Copyright © {new Date().getFullYear() - 1} -{' '}
            {new Date().getFullYear()} Metaversus. All rights reserved.
          </p>
          {/* social icons */}

          <div className='flex gap-4'>
            {socials.map((social, index) => (
              <div
                key={social.name + index}
                className='relative w-[24px] h-[24px] cursor-pointer'
              >
                <Image
                  src={social.url}
                  alt={social.name}
                  fill
                  className='object-cover'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
