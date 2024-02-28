'use client';

import { Button } from '@/components/ui/button';
import { EvervaultCard, Icon } from '@/components/ui/card';
import Example from '@/components/ui/reg-button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-black">
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start mx-auto p-4 relative h-screen">
        <EvervaultCard text="E11®"></EvervaultCard>
      </div>
    </div>
  );
}
