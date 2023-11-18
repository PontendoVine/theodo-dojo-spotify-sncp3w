
import { SavedTrack } from 'spotify-types';

const apiToken: string = 'BQDj8DoprMuZVkm2Wz5eZhin9X4OY1ZWJyFTp6a5trP5jwn88ZMr_fUcsXlzheh-it1oLyIY1X0rCDQNiGsSgIo_DU9PyoN8brjMxYJz2zf2FgBrs6Tc0saxEi2IPCsYXH4qk-0pSzpkWQtqGok-0tPFTzdMn48sTcCBhiWnQtTwKCQA6g62fDkulpW-A-wf5sraOMHveWtwwEnnIyU5nznAuCKJ8w'

export const fetchTracks = async ():Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: SavedTrack[] };

  return data.items;
};
