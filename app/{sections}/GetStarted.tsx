'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { StartSteps, TitleText, TypingText } from '../{components}';
import { startingFeatures } from '../{constants}';
import styles from '../{styles}';
import { fadeIn, planetVariants } from '../{utils}/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      viewport={{ once: false }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
    >
      {/* left */}

      <motion.div
        variants={planetVariants('left')}
        initial='hidden'
        whileInView='show'
        className={`${styles.flexCenter} flex-1`}
      >
        <div className='relative w-[90%] h-[30rem]'>
          <Image
            src='/get-started.png'
            alt='get-started'
            fill
            className='object-contain'
          />
        </div>
      </motion.div>

      {/* right */}

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] flex justify-center flex-col'
      >
        <TypingText title='| How Metaversus Work' className='' />
        <TitleText
          title={<>Get started with justa few clicks</>}
          className=''
        />

        <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature + index}
              text={feature}
              number={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
