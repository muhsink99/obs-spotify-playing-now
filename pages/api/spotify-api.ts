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
    }).catch(function (error: any) { 
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
    })

    return response; 
}

export { 
    getPlaybackState
}