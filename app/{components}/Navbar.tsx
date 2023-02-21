'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../{styles}';
import { navVariants } from '../{utils}/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='absolute w-[50%] inset-0 gradient-01' />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8 2xl:`}
    >
      {/* search icon */}
      <div className='relative w-[24px] h-[24px] cursor-pointer'>
        <Image src='/search.svg' alt='search' fill className='object-contain' />
      </div>

      {/* title */}

      <h2 className='font-extrabold text-[1.5rem] leading-[30px] text-white uppercase'>
        Metaversus
      </h2>

      {/* hambudger menu icon */}
      <div className='w-[24px] h-[24px] relative cursor-pointer'>
        <Image src='/menu.svg' alt='menu' fill className='object-contain' />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
