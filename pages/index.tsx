import { authenticateWithSpotify } from "../services/spotify-service"

export default function Home() {
  return (
    <>
      <button onClick={() => authenticateWithSpotify()}>Log into spotify</button>
    </>
  )
}
