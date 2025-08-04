"use client";
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { gtmPageView } from '@/utils/gtm';

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Construir la URL completa
    const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    
    // Enviar el evento de page view a GTM
    gtmPageView(url);
  }, [pathname, searchParams]);

  return null; // Este componente no renderiza nada visual
}