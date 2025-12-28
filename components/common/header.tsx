"use client";

import { Compass, Home, Menu, Sparkle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.scss";
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Sparkle className={`${styles.logoIcon} animate-bounce`} />
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

            {isSignedIn ? (
              <>
                <Link href="/submit-product" className={styles.submitBtn}>
                  <Sparkle className={styles.sparkle} />
                  Submit Product
                </Link>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: styles.userIconLarge,
                    },
                  }}
                />
              </>
            ) : (
              <>
                <SignInButton>
                  <button className={styles.submitBtn}>Sign In</button>
                </SignInButton>
                <SignUpButton>
                  <button className={styles.submitBtn}>Sign Up</button>
                </SignUpButton>
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

              {isSignedIn ? (
                <>
                  <Link
                    href="/submit-product"
                    className={styles.mobileLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Sparkle className={`${styles.mobileIcon} ${styles.submitIcon}`} />
                    <span>Submit Product</span>
                  </Link>
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: `${styles.mobileIcon} ${styles.profileIconLarge}`,
                      },
                    }}
                  />
                </>
              ) : (
                <>
                  <SignInButton>
                    <button
                      className={styles.mobileLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button
                      className={styles.mobileLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign Up
                    </button>
                  </SignUpButton>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
