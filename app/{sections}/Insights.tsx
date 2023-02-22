'use client';

import { motion } from 'framer-motion';
import { InsightCard, TitleText, TypingText } from '../{components}';
import { insights } from '../{constants}';
import styles from '../{styles}';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title='| Insights' className='text-center' />
      <TitleText title={<>Insight about metaverse</>} className='text-center' />

      <div className='mt-[50px] flex flex-col gap-[30px]'>
        {insights.map((insight, index) => (
          <InsightCard key={insight.title + index} {...insight} index={index} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
