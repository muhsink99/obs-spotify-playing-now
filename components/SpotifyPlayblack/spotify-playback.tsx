import { convertMillisecondsToTimestamp } from "../../services/helper"
import styles from './SpotifyPlayback.module.css';

export default function SpotifyPlayback(playbackData: any) {
    return ( 
        <>
            <div className={styles.card}>
                <img src={playbackData.data.item?.album?.images[1].url} alt="artists Cover" id="cover"/>
                <h2 className={styles.card__title}> {playbackData.data.item?.name} </h2>
                <span className={styles.card__artist}> {playbackData.data.item?.artists[0]?.name} </span>
                <div className={styles.card__controllers}>
                    <input type="range" value={playbackData.data?.progress_ms} max={playbackData.data.item?.duration_ms} id="tracker" />
                    <span className={styles.card__controllers__time} id="current-time">{convertMillisecondsToTimestamp(playbackData.data?.progress_ms)}</span>
                    <span className={styles.card__controllers__time} id="info-time">{convertMillisecondsToTimestamp(playbackData.data.item?.duration_ms)} </span>
                </div>
            </div>
        </>
    )
}
