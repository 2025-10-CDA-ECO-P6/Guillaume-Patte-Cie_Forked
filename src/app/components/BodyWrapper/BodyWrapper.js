'use client';

import { useEffect } from 'react';

export default function BodyWrapper({ children, className }) {
  useEffect(() => {
    document.body.removeAttribute('cz-shortcut-listen');
  }, []);

  return children;
}