'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TitleText, TypingText } from '../{components}';
import styles from '../{styles}';
import { fadeIn } from '../{utils}/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title='| People in the world' className='text-center' />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        className='text-center'
      />

      {/* illustration */}

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        {/* bg world map picture */}
        <div className='relative w-full h-full'>
          <Image src='/map.png' alt='map' fill />
        </div>

        {/* orange boy picture (over Austraila) */}

        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-6px] rounded-full bg-[#5d6680]'>
          <div className='w-full h-full'>
            <Image
              src='/people-01.png'
              alt='people'
              className='object-contain'
              fill
            />
          </div>
        </div>

        {/* pink girl picture (over Canada) */}

        <div className='absolute top-10 left-20 w-[70px] h-[70px] p-6px] rounded-full bg-[#5d6680]'>
          <div className='w-full h-full'>
            <Image
              src='/people-02.png'
              alt='people'
              className='object-contain'
              fill
            />
          </div>
        </div>

        {/* pink girl picture (over Canada) */}

        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-6px] rounded-full bg-[#5d6680]'>
          <div className='w-full h-full'>
            <Image
              src='/people-03.png'
              alt='people'
              className='object-contain'
              fill
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
