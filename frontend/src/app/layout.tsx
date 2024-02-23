'use client';
import React from 'react';
import Head from 'next/head';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import './globals.css';

const Layout = ({ children, title = 'Toni Helesic' }) => {

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
