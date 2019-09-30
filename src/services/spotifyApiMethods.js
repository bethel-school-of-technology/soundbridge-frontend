export var SpotifyApiMethods = {

    // Retrieve user playlists

    getPlaylist: async function(authToken) {
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
    },

    getPlaylistTracks: async function(url, authToken) {
        try {
            const res = await fetch(
                url,
                {
                    headers: {
                        'Authorization': 'Bearer ' + authToken,
                    }
                });
            const tracks = await res.json();
            return tracks;
        } catch (err) {
            console.log(err);
        }
    }

}
