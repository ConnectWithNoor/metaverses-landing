'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypingText, ExploreCard, TitleText } from '../{components}';
import { fadeIn, staggerContainer, textContainer } from '../{utils}/motion';

import styles from '../{styles}';
import { exploreWorlds } from '../{constants}';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| The World' className='text-center' />
        <TitleText
          title={
            <>
              Choose the world you want
              <br className='md:block hidden' />
              to explore
            </>
          }
          className='text-center'
        />

        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id + index}
              index={index}
              active={active}
              handleClick={setActive}
              world={world}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
