import "./App.css";
import Login from "./Login";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    console.log("token!", hash);
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      // setToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })
      spotify.getPlaylist('37i9dQZEVXcFikgylE5Zoc').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })
    }
    // console.log("token!", hash);
  }, []);


  // console.log("this is user", user);
  // console.log("this is token", token);


  return (
    <div className="app">
      {token ? <Player spotify={spotify}/> : <Login />}
      {/* {!token && <Login />}
      <Login />
      <Player/> */}
    </div>
  );
}

export default App;
