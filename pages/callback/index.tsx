import { useEffect, useState } from "react"
import { getPlaybackState } from "../api/spotify-api";
import SpotifyPlayback from "../../components/SpotifyPlayblack/spotify-playback";

export default function Main() {
    const [playbackData, setPlaybackData] = useState<Object>({}); 
    const [accessToken, setAccessToken] = useState<string>("");

    const getCurrentPlayback = (accessToken: string) => getPlaybackState(accessToken).then((res) => {
        if (res?.status === 200) {
            setPlaybackData(res.data); 
            console.log(res.data); 
        }
    })

    const getAccessToken = () => { 
        const url = window.location.href;
        const data = url.split('#')[1];
        const params = new URLSearchParams(data); 

        const token = params.get("access_token") ?? "";
        setAccessToken(token);
    }
    
    useEffect(() => { 
        if (accessToken === "") { 
            getAccessToken(); 
        }

        const interval = setInterval(() => {
            getCurrentPlayback(accessToken); 
        }, 1000);
      
        return () => clearInterval(interval);
    }, [accessToken]); 

    return (
      <>
        <SpotifyPlayback data={playbackData} />
      </>
    )
  }
  