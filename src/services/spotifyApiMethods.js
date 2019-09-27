var SpotifyMethods = {

    // Retrieve user playlists
    
    getPlaylist: async (authToken) => {
        try {
        const res = await fetch(
            "https://api.spotify.com/v1/me/playlists",
            {
                headers: {
                    'Authorization': 'Bearer ' + authToken,
                }
            });
        const playlists = await res.json();
        return playlists;
        } catch (err) {
            return err;
        }
    }

}

module.exports = SpotifyMethods;