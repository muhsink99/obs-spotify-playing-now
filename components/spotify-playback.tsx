import { convertMillisecondsToTimestamp } from "../services/helper"

export default function SpotifyPlayback(playbackData: any) {
    return ( 
        <>
            <div> 
                <div>
                    <img src={playbackData.data.item?.album?.images[1].url} />
                </div>
                <div>
                    <p> {playbackData.data.item?.artists[0]?.name} - <b>{playbackData.data.item?.name}</b> </p>
                    <p> {convertMillisecondsToTimestamp(playbackData.data?.progress_ms)} / {convertMillisecondsToTimestamp(playbackData.data.item?.duration_ms)} </p>
                </div>
            </div> 
        </>
    )
}
