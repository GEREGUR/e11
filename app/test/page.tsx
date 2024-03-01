import { Parallax } from '@/components/ui/parallax';
import React from 'react';
import React, { useEffect } from 'react'

const Test = () => {

  useEffect(() => {
    console.log('rendered')
  },[])

  return (
    <div>
      <Parallax />
    </div>
  );
};

export default Test;
