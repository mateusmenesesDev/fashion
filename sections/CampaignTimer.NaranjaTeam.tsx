
export interface Props {
  salesTitle: string;
  buttonText: string;
  hoursInput?: string;
}

export default function CampaignTimer ({salesTitle, buttonText, hoursInput} : Props) {
  // const totalTime = hoursInput * 60 * 60;

  // const hours = Math.floor(totalTime) / (60 * 60);
  // const minutes = Math.floor(totalTime) / 60;
  // const 

  return (
    <section className='h-28 w-full absolute z-50 bottom-0 bg-[#E37A69] p-4 text-center text-white
      lg:flex lg:justify-center lg:items-center lg:gap-20 lg:h-20'>
      <h2 className='text-base w-full lg:w-auto shrink-0'>{salesTitle}</h2>
      <div className='flex justify-center items-center gap-6 lg:gap-20'>
        <div className='flex gap-3 items-center'>
          <div>
            <div className='text-xl'>00</div>
            <div className='text-xs'>Hours</div>
          </div>
          <div>:</div>
          <div>
            <div className='text-xl'>00</div>
            <div className='text-xs'>Minutes</div>
          </div>
          <div>:</div>
          <div>
            <div className='text-xl'>00</div>
            <div className='text-xs'>Seconds</div>
          </div>
        </div>
        <button className='text-base h-10 min-w-16 px-2 bg-[#273746] shadow-sm'>
          {buttonText}
        </button>
      </div>
    </section>
  )
}