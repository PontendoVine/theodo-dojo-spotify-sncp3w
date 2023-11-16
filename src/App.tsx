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

  const [trackIndex, setTrackIndex] = useState(0);

  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };

  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks
  });

  console.log(tracks)

  const num_padre_tracks = trackUrls.length

  const track_number = tracks?.length

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
      <p>Premier morceau : ???</p>
      <div>
      <audio src={trackUrls[trackIndex]} autoPlay controls />
      </div>
      <button onClick={goToNextTrack}>Next track</button>
      <div className="App-buttons"></div>
      <p>Bientôt sur ce site : {track_number} morceaux du XAl</p>
    </div>
  );
};

export default App;
