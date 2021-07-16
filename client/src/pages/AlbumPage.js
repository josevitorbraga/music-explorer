import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaAngleDoubleRight, FaPlayCircle } from 'react-icons/fa';

export default function AlbumPage(props) {
  const albumId = props.match.params.id;

  const song = new Audio();

  const [album, setAlbum] = useState([]);
  const [artist, setArtist] = useState([]);
  const [tracks, setTracks] = useState([]);

  const playMusic = (song, url) => {
    song.src = url;
    song.play();
  };

  useEffect(() => {
    async function getAlbum() {
      const response = await axios.get(
        `http://localhost:3333/api/album/${albumId}`
      );
      setAlbum(response.data);
      console.log(response.data);
      setArtist(response.data.artist);
      setTracks(response.data.tracks.data);
    }
    getAlbum();
  }, [albumId]);
  console.log(tracks);
  return (
    <div className="mt-4 d-flex justify-content-center">
      <div className="album-cover">
        <img className="mb-3" src={album.cover_big} alt={album.title} />
        <h3>
          <strong>{album.title}</strong>
        </h3>
        <h3>By: {artist.name}</h3>
      </div>
      <div className="album-musics">
        {tracks.map((item) => (
          <div
            key={item.id}
            className="w-1 mb-1 track-list"
            onClick={() => playMusic(song, item.preview)}
          >
            <FaPlayCircle /> {item.title}
          </div>
        ))}
        <div className="mt-5 go-to-album">
          <Button variant="warning">
            Go to album page <FaAngleDoubleRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
