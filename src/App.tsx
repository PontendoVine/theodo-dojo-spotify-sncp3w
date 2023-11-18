import logo from './assets/logo.svg';
import './App.css';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTracks } from './lib/fetchTracks'
import { SavedTrack } from 'spotify-types';



const trackUrls = [
  'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
  'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
  'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
  'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
  'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52'
];

const App = () => {

  const [defaultTrackIndex, setDefaultTrackIndex] = useState(0);
  const [customTrackIndex, setCustomTrackIndex] = useState(0);

  const goToNextDefaultTrack = () => {
    setDefaultTrackIndex(defaultTrackIndex + 1);
  };

  const goToNextCustomTrack = () => {
    setCustomTrackIndex(customTrackIndex + 1);
  };

  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks
  });

  console.log(tracks)

  const num_padre_tracks = trackUrls.length
  const num_XAl_tracks = tracks?.length
  const custom_tracks_first_name = tracks?.[customTrackIndex]?.track.name

  const AlbumCover = ({ track }) =>  {
    const src = track.uri ; // A changer ;)
    return (
        <img src={src} style={{ width: 400, height: 400 }} />
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test</h1>
      </header>
      <div className="App-images">
        <p>
          Site d'écoute aveugle (accessibilité+++)
        </p>
      </div>
      
      <p>Morceau par défaut :</p>
      <audio src={trackUrls[0]} autoPlay controls />
      
      <p>La sélection du padre : {num_padre_tracks} morceaux du terter</p>
      <div>
      <audio src={trackUrls[defaultTrackIndex]} autoPlay controls />
      </div>
      <button onClick={goToNextDefaultTrack}>Next track</button>
      <div className="App-buttons"></div>


      <p>La sélection du XAl : {num_XAl_tracks} morceaux qui déchirent</p>
      <p>Morceau en cours : {tracks?.[customTrackIndex]?.track.name}</p>
      <AlbumCover track={tracks?.[customTrackIndex]} />
      <div>
      <audio src={tracks?.[customTrackIndex]?.track.preview_url} autoPlay controls />
      </div>
      <button onClick={goToNextCustomTrack}>Next track</button>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
