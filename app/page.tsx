'use client';

import { EvervaultCard, Icon } from '@/components/ui/card';
import { BackgroundGradientAnimation } from '@/components/ui/gradient';



export default function Home() {
  return (
    <div className="bg-black">
      <div className="flex flex-col items-start mx-auto relative h-screen px-10 pt-10">
        <EvervaultCard text="E11®"></EvervaultCard>

      </div>
      {/* <div className='w-full h-96 bg-black px-10'>
        <BackgroundGradientAnimation />
      </div> */}
    </div>
  );
}
