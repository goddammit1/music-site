import "./Parts.css";
import ListeningHistory from "./Listening-history";
import LikedTracks from "./Liked-tracks";
import ArtistsWidget from "./Artists-widget";

function MainWidget() {
    return (
        <div className="main_widget_area">
            <ListeningHistory></ListeningHistory>
            <LikedTracks></LikedTracks>
            <ArtistsWidget></ArtistsWidget>
        </div>
    );
}
export default MainWidget