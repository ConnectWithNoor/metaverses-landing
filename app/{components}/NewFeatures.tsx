import Image from 'next/image';
import styles from '../{styles}';

type Props = {
  imgUrl: string;
  title: string;
  subtitle: string;
};

const NewFeatures = ({ imgUrl, subtitle, title }: Props) => (
  <div className='flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]'>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <div className='relative w-1/2 h-1/2'>
        <Image src={imgUrl} alt='icon' className='object-contain' fill />
      </div>
    </div>
    <h1 className='mt-[26px] font-bold text-[24px] leading-[30px] text-white'>
      {title}
    </h1>
    <p className='flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]'>
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
