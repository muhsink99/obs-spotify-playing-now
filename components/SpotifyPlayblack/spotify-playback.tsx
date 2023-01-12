import { convertMillisecondsToTimestamp } from "../../services/helper"
import styles from './SpotifyPlayback.module.css';
const _ = require('lodash');

export default function SpotifyPlayback(playbackData: any) {
    return ( 
        <>
            {!_.isEmpty(playbackData.data) ?
                (
                    <div className={styles.card}>
                        <img src={playbackData.data.imgMedium} alt="artists Cover" id="cover"/>
                        <h2 className={styles.card__title}> {playbackData.data.songName} </h2>
                        <span className={styles.card__artist}> {playbackData.data.songArtist} </span>
                        <div className={styles.card__controllers}>
                            <input type="range" value={playbackData.data.progressMs} max={playbackData.data.durationMs} id="tracker" readOnly={true}/>
                            <span className={styles.card__controllers__time} id="current-time">{convertMillisecondsToTimestamp(playbackData.data.progressMs)}</span>
                            <span className={styles.card__controllers__time} id="info-time">{convertMillisecondsToTimestamp(playbackData.data.durationMs)} </span>
                        </div>
                    </div>
                ) : ( 
                    <div className={styles.card}>
                        <h2 className={styles.card__title}>Currently loading...</h2>
                    </div>
                )
            }
        </>
    )
}
