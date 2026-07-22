import React from 'react';
import Header from './Header'; // Your header component
import Footer from './Footer'; // Your footer component

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}