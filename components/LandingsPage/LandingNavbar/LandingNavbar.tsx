import Link from 'next/link';
import styles from './LandingNavbar.module.css';
import Image from 'next/image';


export default function LandingNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" aria-label="go to home page" className={styles.logo}>
            <Image
              src="https://res.cloudinary.com/nicojoystin/image/upload/v1740221032/agencia-tinta/logo-tinta_utcrxj.svg"
              alt="Tinta logo"
              fill
              priority
              style={{ objectFit: "contain" }}
              />
          </Link>
      </div>

    </nav>
  );
} 