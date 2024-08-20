import React from "react";
import NavbarClient from "@/NavBarClient";
import Title from "@/TitleLine";
import fetchPages from "@/component/fetchPages";
import HomeClient from "./HomeClient"; // Le composant client que nous allons créer

export default async function HomeServer() {
    // Fetch all pages and their data côté serveur
    const pages = await fetchPages();

    return (
        <main className="p-4">
            <NavbarClient />
            <Title title="Photos du site" />

            {/* Passer les données au composant client */}
            <HomeClient pages={pages} />
        </main>
    );
}
