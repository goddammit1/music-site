import "./Parts.css";
import Artist from "./Artist";

function ArtistsWidget() {
    return (
        <div className="main_widgets_area">
            <h4>
                YOUR ARTISTS
            </h4>
            <div className="artists_area">
                <Artist></Artist>
            </div>
        </div>
    );
}
export default ArtistsWidget