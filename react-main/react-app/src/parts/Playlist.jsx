import "./Parts.css";
import TrackWidget from "./track_widget";

function Playlist() {
    return (
        <div className="Playlist_area">
            <div className="Playlist">
                <h1 className="Playlist_font">
                    PLAYLIST
                </h1>
                <div className="playlist_tracks_area">
                    <TrackWidget></TrackWidget>
                    <TrackWidget></TrackWidget>
                    <TrackWidget></TrackWidget>
                </div>
            </div>
        </div>
    );
}
export default Playlist