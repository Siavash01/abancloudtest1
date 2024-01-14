'use client';

import { Spinner } from 'flowbite-react';

export function CenderedSpinner () {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Spinner aria-label="Center-aligned spinner example" />
    </div>
  );
}
