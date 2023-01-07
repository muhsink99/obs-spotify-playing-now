import { getHostName, generateRandomString } from "./helper"

/**
 * Redirects to the Spotify authentication page. Prompts the user to log in, and upon completion, redirect back to the web app.
 * @returns void
 */
function authenticateWithSpotify(): void { 
    const clientId : any = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    const redirectUri = getHostName() + '/callback';
    const state = generateRandomString(16); 
    localStorage.setItem('spotify_auth_state', state); 
    const scope = 'user-read-private user-read-email user-read-playback-state user-read-currently-playing';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientId);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirectUri);
    url += '&state=' + encodeURIComponent(state);

    window.location.assign(url); 
}

export { 
    authenticateWithSpotify
}