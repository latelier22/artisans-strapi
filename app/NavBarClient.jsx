"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import useMenuStore from './store/useMenuStore';
import useSiteStore from './store/useSiteStore';
import { useSession, signOut } from 'next-auth/react';
import Dropdown from "./DropDown";
import { Heart, Star } from "./component/album/icons";

const NavbarClient = () => {
  const { menuItems, fetchAndSetMenus } = useMenuStore();
  const { site, fetchAndSetSite } = useSiteStore();
  const { data: session } = useSession();

  useEffect(() => {
    fetchAndSetSite();
  }, [fetchAndSetSite]);

  useEffect(() => {
    fetchAndSetMenus();
  }, [fetchAndSetMenus]);

  useEffect(() => {
    const init = async () => {
      const { Collapse, initTE } = await import("tw-elements");
      initTE({ Collapse });
    };
    init();
  }, []);

  const handleLogout = () => {
    signOut({ callbackUrl: '/login' });
  };

  // Séparer les items de menu réguliers des items de menu ADMIN
  const regularMenuItems = menuItems.filter(item => item.label !== 'ADMIN');
  const adminMenuItems = session && session.user.role === 'admin' 
    ? menuItems.filter(item => item.label === 'ADMIN')
    : [];

  const getIconForRoute = (route) => {
    if (route.includes("favoris")) {
      return <Heart isOpen={true} className="mr-2" />;
    }
    if (route.includes("recents")) {
      return <Star isOpen={true} className="mr-2" />;
    }
    return null;
  };

  return (
    <>
      <nav
        className="z-40 md:fixed flex flex-col w-full items-center justify-between py-2 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-black dark:text-gold-500 md:flex-wrap"
        data-te-navbar-ref
      >
        <h3 className="adresse">{site.societe} - {site.adress} - {site.codePostal} - {site.ville} - {site.telephone}</h3>
        <div className="flex w-full items-center px-3">
          <div className="flex items-center">
            <button
              className="border-0 bg-transparent text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  className="menuMobile h-12 w-12"
                  style={{ stroke: "currentColor" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div
            className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto mx-auto"
            id="navbarSupportedContentY"
            data-te-collapse-item
          >
            <ul className="mx-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
              {regularMenuItems.map((menuItem) => (
                <li key={menuItem.id} className={`lg:mb-0 lg:pr-2`} data-te-nav-item-ref>
                  {menuItem.children && menuItem.children.length ? (
                    <Dropdown className="" item={menuItem} />
                  ) : (
                    <a
                      className={`font-lien flex flex-row transition duration-150 ease-in-out dark:text-gold-200 dark:hover:text-gold-800 dark:focus:text-gold-500 lg:p-2 [&.active]:text-black/90`}
                      href={menuItem.route}
                      data-te-nav-link-ref
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      {getIconForRoute(menuItem.route)}
                      {menuItem.label}
                    </a>
                  )}
                </li>
              ))}
              {adminMenuItems.map(adminMenuItem => (
                <li key={adminMenuItem.id} className={`lg:mb-0 lg:pr-2`} data-te-nav-item-ref>
                  {adminMenuItem.children && adminMenuItem.children.length ? (
                    <Dropdown className="" item={adminMenuItem} />
                  ) : (
                    <a
                      className={`font-lien flex flex-row transition duration-150 ease-in-out dark:text-gold-200 dark:hover:text-gold-800 dark:focus:text-gold-500 lg:p-2 [&.active]:text-black/90`}
                      href={adminMenuItem.route}
                      data-te-nav-link-ref
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      {getIconForRoute(adminMenuItem.route)}
                      {adminMenuItem.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="lg:mb-0 lg:pr-2 flex flex-row items-center" data-te-nav-item-ref>
                {session ? (
                  <>
                    <a
                      className="font-lien flex flex-row transition duration-150 ease-in-out dark:text-gold-200 dark:hover:text-gold-800 dark:focus:text-gold-500 lg:p-2 [&.active]:text-black/90"
                      onClick={handleLogout}
                      style={{ cursor: 'pointer' }}
                    >
                      Se Déconnecter
                    </a>
                    <div>
                      {session.user.email}
                    </div>
                  </>
                ) : (
                  <Link
                    className="font-lien flex flex-row transition duration-150 ease-in-out dark:text-gold-200 dark:hover:text-gold-800 dark:focus:text-gold-500 lg:p-2 [&.active]:text-black/90"
                    href="/login"
                  >
                    Se Connecter
                  </Link>
                )}
              </li>
            </ul>
          </div>
          {site.facebook && (
            <div className="flex ml-10 md:ml-0 flex-row items-center self:justify-end">
              <a href={site.facebook} className="text-sky-300 dark:text-sky-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavbarClient;
