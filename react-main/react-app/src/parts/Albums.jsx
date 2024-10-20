import "./Parts.css";
import { ALBUMS } from "./Album-info";
import Random from "./random_algorithm";
// свг play добавить надо

function Albums() {
  const randomAlbum = Random(ALBUMS); //получаем рандомные 3 альбома из базы данных
  return (
    <div className="album-panel">
      <div className="albums-panel-area">
        <h1>ALBUMS</h1>
        <div className="album_imges">
          {randomAlbum.map((albums) => (
            <img
              className="album_img"
              key={albums.id}
              src={albums.album_img}
              alt={albums.album_name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Albums;
