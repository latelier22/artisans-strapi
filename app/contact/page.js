

import Navbar from "../NavBarClient";
import Footer from "../Footer";
import FormContact from "../FormContact";

const Contact = () => {
  const pageTitle = 'Contact';
  const pageDescription = 'Restons en contact, telephone, email, réseaux sociaux';
  return (
    <>
      <Navbar />
      <FormContact/>
      <Footer />
    </>
  );
};

export default Contact;
