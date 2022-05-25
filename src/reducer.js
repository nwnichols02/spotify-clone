export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  top_artists: null,
  discover_weekly: null,
  spotify: null,
  //Remove this later to remove authentication
  // token: 'BQDA0K4f4AVL4mYmfbdzaciTHCBUtX4vZ9mWMNCy1DawNePqvbFRgsYGoxi4xeJKGrKTibDk-FqVNOuMo8UX5-W4MQ1-2zljKHt-YkqR_AmoHdYrw1CHH9-w4pxwGd7b-a5vgZ205iaV2JZaSgAGMsxtq9Ru-og'
};

const reducer = (state, action) => {
  console.log(action);

  //Action => type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    default:
      return state;
  }
};

export default reducer;
