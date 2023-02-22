'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { NewFeatures, TitleText, TypingText } from '../{components}';
import { newFeatures } from '../{constants}';
import styles from '../{styles}';
import { fadeIn, planetVariants } from '../{utils}/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      viewport={{ once: false }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
    >
      {/* left */}

      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.75] flex justify-center flex-col'
      >
        <TypingText title="| What's new" className='' />
        <TitleText title={<>What&apos;s new about metaversus</>} className='' />

        <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
          {newFeatures.map((feature, index) => (
            <NewFeatures key={feature.title + index} {...feature} />
          ))}
        </div>
      </motion.div>

      {/* right */}

      <motion.div
        variants={planetVariants('right')}
        initial='hidden'
        whileInView='show'
        className={`${styles.flexCenter} flex-1`}
      >
        <div className='relative w-[90%] h-[30rem]'>
          <Image
            src='/whats-new.png'
            alt='whats-new'
            fill
            className='object-contain'
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
