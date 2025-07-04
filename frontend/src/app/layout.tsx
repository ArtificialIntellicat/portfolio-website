'use client';
import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import CookieConsentBanner from '../components/CookieConsentBanner';
import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Toni Helesic' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookieConsentBanner />
      <Navigation />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

