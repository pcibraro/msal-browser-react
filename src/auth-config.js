export const msalConfig = {
    auth: {
        clientId: "CLIENT-ID",
        authority: 'AZURE-AD-URL',
        redirectUri: 'http://localhost:3000/',
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["openid", "profile", "User.Read"],
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const apiRequest = {
    scopes: ["API-SCOPE"],
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};