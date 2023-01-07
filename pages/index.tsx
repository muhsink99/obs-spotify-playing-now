import { authenticateWithSpotify } from "../services/spotify-service"

export default function Home() {
  return (
    <div>
      <h3>READ BEFORE LOGGING IN</h3>
      <p>
        This is currently not open to the public and is in development mode. You&apos;ll need to request access to be able to log in.
        <br/>
        Once you&apos;ve been granted access, follow the steps below to set this up on your OBS client. 
      </p>
      <ol>
        <li>Log into Spotify using the button below</li>
        <li>You&apos;ll be redirected to a new page, showing the song you&apos;re currently playing on Spotify. Keep a note of the entire URL</li>
        <li>Create a new &apos;Browser&apos; source on OBS. </li>
        <li>Give this source a size of 300x400 and give it the URL you just kept a note of.</li>
        <li>Move the Browser source to your desired position in your current scene.</li>
      </ol>
      <h3>Known Issues</h3>
      <ul>
        <li>Once logged in, the playblack will only last for an hour before ceasing to work. This is normal and will be resolved soon</li>
        <li>Song titles that are too long will cut off and mess up the styling</li>
      </ul>
      <button onClick={() => authenticateWithSpotify()}>Log into spotify</button>
    </div>
  )
}
