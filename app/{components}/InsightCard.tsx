'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '../{utils}/motion';

type Props = {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
};

const InsightCard = ({ imgUrl, subtitle, title, index }: Props) => (
  <motion.div
    variants={fadeIn('up', 'spring', index + 0.5, 1)}
    className={'flex md:flex-row flex-col gap-4'}
  >
    {/* image */}
    <div className='relative md:w-[270px] w-full h-[250px] '>
      <Image
        src={imgUrl}
        alt={title}
        fill
        className='object-cover rounded-[32px]'
      />
    </div>

    <div className='w-full flex justify-between items-center'>
      {/* text */}
      <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
        <h4 className='font-normal lg:text-[42px] text-[26px] text-white'>
          {title}
        </h4>
        <p className='mt-[16px] font-normal lg:text-[20px] text-[14px] text-white'>
          {subtitle}
        </p>
      </div>
      {/* arrow icon */}

      <div className='lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white'>
        <div className='w-[40%] h-[40%] relative'>
          <Image src='/arrow.svg' alt='arrow' fill className='object-contain' />
        </div>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
