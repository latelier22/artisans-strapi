"use server";

async function myFetch(endpoint, method, body, entity, additionalHeaders = {}) {
    const baseUrl = process.env.NEXT_PUBLIC_ADMIN_STRAPI_URL;
    const headers = {
        'Content-Type': 'application/json',
        ...additionalHeaders
    };

    if (body instanceof FormData) {
        delete headers['Content-Type'];
    } else {
        body = body ? JSON.stringify(body) : null;
    }

    try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
            method: method,
            headers,
            body,
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch ${entity}: Status ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`An error occurred while fetching ${entity}:`, error);
        throw error;
    }
}

export default myFetch;



// "use server";

// async function myFetchStrapi(endpoint, method, body, entity, token = null) {
//     const baseUrl = process.env.NEXT_PUBLIC_ADMIN_STRAPI_PUBLIC_URL;

//     const headers = {};

//     // Adjust headers and body for FormData
//     if (body instanceof FormData) {
//         // For FormData, browser automatically sets the Content-Type to 'multipart/form-data'
//         // with the boundary, so we don't manually set 'Content-Type' here.
//     } else {
//         headers['Content-Type'] = 'application/json';
//         body = body ? JSON.stringify(body) : null;
//     }

//     // If a token is provided, add it to the Authorization header
//     if (token) {
//         headers['Authorization'] = `Bearer ${token}`;
//     }

//     try {
//         const response = await fetch(`${baseUrl}${endpoint}`, {
//             method: method,
//             headers,
//             body,
//             cache: "no-store"
//         });

//         if (!response.ok) {
//             throw new Error(`Failed to fetch ${entity}: Status ${response.status}`);
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error(`An error occurred while fetching ${entity}:`, error);
//         throw error; // It's usually good practice to handle or throw errors for the caller to decide what to do
//     }
// }

// export default myFetchStrapi;
