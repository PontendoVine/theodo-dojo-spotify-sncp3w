const apiToken: string = 'BQCU38lLasCnolmxk7ruS9wRlKk0u2UPEtvuZnLoY-JPNVDY7A50oLzq_Gx9xvcLYSUqTshYSIgcH_VSsyxZnZLmsYOu6S6q5OiwU6EnhZiYEIzYJMnBMq_boOtcS1U0ZaCcYkoFIpOmBHKxF-J3LKqKVb4wz17ge3bDTnpyttpfzSxpjO04P2p7kTFRZc6rkSATthBR9c58MqBNIEIYHbFl8xrYmQ';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};
