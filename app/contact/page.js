

import Navbar from "../NavBarClient";
import Footer from "../Footer";
import FormContact from "../FormContact";
import fetchFooter from "../component/fetchFooter";

 async function Contact () {
  const pageTitle = 'Contact';
  const pageDescription = 'Restons en contact, telephone, email, réseaux sociaux';
  const footer = await fetchFooter();
  return (
    <>
      <Navbar />
      <FormContact/>
      <Footer footer={footer}/>
    </>
  );
};

export default Contact;
