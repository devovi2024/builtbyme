"use client";

import { Compass, Home, Menu, Sparkle, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import styles from "../common/Header.module.scss";

export default function Header() {
  const [isLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Sparkle className={styles.logoIcon + " animate-bounce"} />
            <span>
              Built <span className={styles.pink}>By</span>{" "}
              <span className={styles.indigo}>Me</span>
            </span>
          </Link>

          <nav className={styles.desktopNav}>
            <Link href="/" className={styles.iconBtn}>
              <Home className={`${styles.icon} ${styles.home}`} />
            </Link>
            <Link href="/explore" className={styles.iconBtn}>
              <Compass className={`${styles.icon} ${styles.explore}`} />
            </Link>

            {isLoggedIn ? (
              <>
                <Link href="/submit-product" className={styles.submitBtn}>
                  <Sparkle className={styles.sparkle} />
                  Submit Product
                </Link>
                <button className={styles.profileBtn}>
                  <User className={styles.userIcon} />
                </button>
              </>
            ) : (
              <>
                <button className={styles.submitBtn}>Sign In</button>
                <button className={styles.submitBtn}>Sign Up</button>
              </>
            )}
          </nav>

          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={styles.menuIcon} />
            ) : (
              <Menu className={styles.menuIcon} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuInner}>
              <Link
                href="/"
                className={styles.mobileLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className={`${styles.mobileIcon} ${styles.homeIcon}`} />
                <span>Home</span>
              </Link>
              <Link
                href="/explore"
                className={styles.mobileLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Compass className={`${styles.mobileIcon} ${styles.exploreIcon}`} />
                <span>Explore</span>
              </Link>

              {isLoggedIn && (
                <>
                  <Link
                    href="/submit-product"
                    className={styles.mobileLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Sparkle className={`${styles.mobileIcon} ${styles.submitIcon}`} />
                    <span>Submit Product</span>
                  </Link>
                  <div className={styles.mobileLink}>
                    <User className={`${styles.mobileIcon} ${styles.profileIcon}`} />
                    <span>Profile</span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}