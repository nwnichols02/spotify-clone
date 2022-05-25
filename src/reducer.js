export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove this later to remove authentication
    // token: 'BQDA0K4f4AVL4mYmfbdzaciTHCBUtX4vZ9mWMNCy1DawNePqvbFRgsYGoxi4xeJKGrKTibDk-FqVNOuMo8UX5-W4MQ1-2zljKHt-YkqR_AmoHdYrw1CHH9-w4pxwGd7b-a5vgZ205iaV2JZaSgAGMsxtq9Ru-og'
}

const reducer = (state, action) => {
    console.log(action)

    //Action => type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;