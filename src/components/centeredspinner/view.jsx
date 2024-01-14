'use client';

import { useRef } from 'react';
import { Spinner } from 'flowbite-react';

export function CenderedSpinner () {
  const emailInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Spinner aria-label="Center-aligned spinner example" />
    </>
  );
}
