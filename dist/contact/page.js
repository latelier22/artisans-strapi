import Navbar from "../NavBarClient";
import Footer from "../Footer";
import RootLayout from "../layout";
import FormContact from "../FormContact";
const Contact = () => {
  const pageTitle = 'Contact';
  const pageDescription = 'Restons en contact, telephone, email, réseaux sociaux';
  return /*#__PURE__*/React.createElement(RootLayout, {
    pageTitle: pageTitle,
    pageDescription: pageDescription
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(FormContact, null), /*#__PURE__*/React.createElement(Footer, null));
};
export default Contact;