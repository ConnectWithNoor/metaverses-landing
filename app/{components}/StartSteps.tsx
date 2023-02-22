import styles from '../{styles}';

type Props = {
  text: string;
  number: number;
};
const StartSteps = ({ number, text }: Props) => (
  <div className={`${styles.flexCenter} flex-row`}>
    {/* numbers */}
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <p className='font-bold text-[20px] text-white'>0{number}</p>
    </div>

    {/* text */}

    <p className='flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]'>
      {text}
    </p>
  </div>
);

export default StartSteps;
