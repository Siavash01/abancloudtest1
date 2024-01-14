'use client';

import { useRef, useState } from 'react';
import { Spinner } from 'flowbite-react';

export function CenderedSpinner () {
  const [openModal, setOpenModal] = useState(true);
  const emailInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Spinner aria-label="Center-aligned spinner example" />
    </>
  );
}
