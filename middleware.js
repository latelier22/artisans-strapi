import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";


// Liste des routes protégées et des rôles requis
const protectedRoutes = [
  { path: '/admin', role: 'admin' },
  { path: '/mobiles/marques', role: 'admin' },
  // Ajoutez d'autres routes ici
];

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const userRole = token?.role || 'authenticated'; // Rôle de l'utilisateur, par défaut 'authenticated'

  // Rediriger les utilisateurs en fonction de leur rôle
  const Redirect = () => {
    if (userRole === "admin") {
      return NextResponse.redirect(new URL("/accueil", request.url));
    } else {
      return NextResponse.redirect(new URL("/accueil", request.url));
    }
  };

  // Vérifier si la route est protégée
  const matchedRoute = protectedRoutes.find(route => pathname.startsWith(route.path));

  if (matchedRoute) {
    // Si la route est protégée et l'utilisateur n'est pas authentifié
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    // Si l'utilisateur est authentifié mais n'a pas le rôle requis
    if (userRole !== matchedRoute.role && !(userRole === 'admin' && matchedRoute.role === 'authenticated')) {
      return NextResponse.redirect(new URL('/403', request.url));
    }
  }

  // Permettre l'accès aux autres routes
  return NextResponse.next();
}

export const config = {
  matcher: protectedRoutes.map(route => `${route.path}/:path*`), // Routes protégées
};
