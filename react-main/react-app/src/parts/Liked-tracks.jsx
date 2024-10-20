import "./Parts.css";
import TrackWidget from "./track_widget";

function LikedTracks() {
    return (
        <div className="main_widgets_area">
            <h4>
                LIKED
            </h4>
            <div className="Listening_tracks_area"> {/*максимум 4 трека может быть видно */}
                <TrackWidget></TrackWidget>
                <TrackWidget></TrackWidget>
                <TrackWidget></TrackWidget>
                <TrackWidget></TrackWidget>
            </div>
        </div>
    );
}
export default LikedTracks