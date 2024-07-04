import React from 'react';
import NavBar from './NavBar';
import Alert from './Alert';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children, firstName, setFirstName }) => {
  return (
    <>
      <Alert message="Reminder to Take a Break! Check out our features to learn more!" />
      <NavBar firstName={firstName} setFirstName={setFirstName}  />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;





