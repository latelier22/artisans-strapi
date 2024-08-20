import React from "react";
import Navbar from "@/NavBarClient";
import Footer from "@/Footer";
import BrandsPageClient from "./BrandsPageClient";
import fetchPaginatedBrands from "@/component/fetchPaginatedBrands";


const BrandsPage = async ({ searchParams }) => {
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const filters = { active: true }; // Ajouter ici les filtres nécessaires
  const brandsData = await fetchPaginatedBrands(page, 20, filters);
  const brands = brandsData.data;
  const pagination = {
    page: page,
    pageCount: brandsData.meta.pagination.pageCount,
  };

  return (
    <>
      <Navbar />
      <div className="pt-64 container mx-auto prose max-w-none">
        <h1 className="text-center">MOBILES</h1>
        <BrandsPageClient brands={brands} pagination={pagination} />
      </div>
      <Footer />
    </>
  );
};

export default BrandsPage;