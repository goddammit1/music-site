import "./Parts.css";
import MusicCard from "./MusicCard";

function New_Tracks() {
    return (
        <div className="New_Tracks_area">
            <div className="New_Tracks">
                <div className="new_tracks_fonts">
                    <h1 className="NEW-font">
                        NEW
                    </h1>
                    <h2 className="TRACKS-font">
                        TRACKS
                    </h2>
                </div>
                <div className="tracks_widgets_area">
                    <MusicCard>
                    </MusicCard>
                    <MusicCard>
                    </MusicCard>
                    <MusicCard>
                    </MusicCard>
                </div>
            </div>
        </div>
    );
}
export default New_Tracks