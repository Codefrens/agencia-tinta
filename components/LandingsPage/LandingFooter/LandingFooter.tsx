import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './LandingFooter.module.css';

interface LandingFooterProps {
  lang: 'es' | 'en';
}

export default function LandingFooter({ lang }: LandingFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo de Tinta - Izquierda */}
          <Link href="/" aria-label="go to home page" className={styles.logo}>
            <Image
              src="https://res.cloudinary.com/nicojoystin/image/upload/v1740221032/agencia-tinta/logo-tinta_utcrxj.svg"
              alt="Tinta logo"
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>
          
          {/* Links legales - Derecha */}
          <div className={styles.legalLinks}>
            <Link href="/cookies" className={styles.link}>
              {lang === 'es' ? 'Políticas de Cookies' : 'Cookie Policy'}
            </Link>
            <Link href="/privacy" className={styles.link}>
              {lang === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
            </Link>
            <Link href="/legal" className={styles.link}>
              {lang === 'es' ? 'Aviso Legal' : 'Legal Notice'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 