// pages/logout.js
"use client"

import { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import useUserStore from "@/store/useUserStore";


const Logout = () => {

    const { user, clearUser } = useUserStore();

  
  useEffect(() => {
    clearUser();
    signOut({ callbackUrl: '/' }); // Remplacez '/login' par l'URL de redirection souhaitée
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Déconnexion en cours...</p>
    </div>
  );
};

export default Logout;
