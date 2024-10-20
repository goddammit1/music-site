import "./Parts.css";
import { ARTISTS } from "./Artist-info";
import Random from "./random_algorithm";

function Artist() {
  const randomArtist = Random(ARTISTS);
  const BackgroundColor = "background-color";
  const Padding = "Padding";
  return (
    <div className="Artist_area">
      <div className="Artist">
        <img
          className="Artist-img"
          key={randomArtist[0].id}
          src={randomArtist[0].artist_img}
          alt={randomArtist[0].artist_name}
        />
        <h1 className="Artist_font">{randomArtist[0].artist_name}</h1>
      </div>
      <div className="Artist">
        <img
          className="Artist-img"
          key={randomArtist[1].id}
          src={randomArtist[1].artist_img}
          alt={randomArtist[1].artist_name}
        />
        <h1 className="Artist_font">{randomArtist[1].artist_name}</h1>
      </div>
    </div>
  );
}
export default Artist;
