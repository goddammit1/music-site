import './Parts.css'
import { TRACKS } from './Track-info'
// свг play добавить надо

function MusicCard() {
    const randomTrack = TRACKS[Math.floor(Math.random() * (TRACKS.length - 1))]; //получаем рандомный трек из базы данных
    return (
        <div className='MusicCard'>
            <img className='MusicCardImg' key={randomTrack.id} src={randomTrack.music_img} alt={randomTrack.music_name} />
            <div className='play_button'>
                <div className='play_button1'>
                </div>
            </div>
            <div className='music_ref'>
                <h1 className='music_name' key={randomTrack.id}>
                    {randomTrack.music_name}    {/* название трека*/}
                </h1>
                <p className='music_name' key={randomTrack.id}>
                    {randomTrack.music_artist} {/* исполнители */}
                </p>
            </div>
        </div>
    );
}
export default MusicCard