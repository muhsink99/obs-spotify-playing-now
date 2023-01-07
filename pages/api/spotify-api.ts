const axios = require('axios');

const instance = axios.create({ 
    baseURL: 'https://api.spotify.com/v1/', 
    timeout: 1000
});

async function getPlaybackState(accessToken: string) : Promise<any> { 
    const response = await instance.get('me/player', { 
        headers: { 
            'Authorization': 'Bearer ' + accessToken,
            'Content-type': 'application/json',
        }
    });

    return response; 
}

export { 
    getPlaybackState
}