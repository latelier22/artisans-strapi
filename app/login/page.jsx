
import { getServerSession } from 'next-auth';
import Form from './form';
import { redirect } from 'next/navigation';

import Navbar from "../NavBar"
import Footer from "../Footer";


// A FAIRE : metadata avec page

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect('/accueil');
  }
  return (
    <main>
      
        <Navbar />
        <Form/>
        <Footer />
      
    </main>
  );
}