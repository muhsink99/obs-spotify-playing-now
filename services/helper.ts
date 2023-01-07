/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 * Taken from https://github.com/spotify/web-api-auth-examples/blob/master/implicit_grant/public/index.html
 */
function generateRandomString(length: number) : string { 
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;``
}

/** 
 * Get the root page URL and return it as a string 
 * @return {string} Root URL
 */
function getHostName() : string { 
    if (typeof window !== 'undefined') {
        return window.location.host;
    }
    return '';
}

/** 
 * Convert ms to a M:s timestamp
 * @param {string} ms 
 * @return {string} H:s timestamp
 */
function convertMillisecondsToTimestamp(ms: number) : string {
    const seconds = ms / 1000;
    const minutes = seconds / 60;  
    const ratio = minutes % 1; 

    const secondsString = parseInt(60*ratio) < 10 ? "0" + parseInt(60*ratio) : parseInt(60*ratio);
 
    const string =  parseInt(minutes) + ":" + secondsString;
    return string;
}

export { 
    generateRandomString, 
    getHostName, 
    convertMillisecondsToTimestamp
}