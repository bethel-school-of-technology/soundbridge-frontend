import React from 'react'

const Playlists = (props) => {
    console.log(props.playlists);
    if (!props.playlists.items) {
        return (
            <div>
                <h1>you don't have any playlists</h1>
            </div>
        )
    } else {
        console.log(props.playlists.items[0])
        return (
            props.playlists.items.map((playlist, i) => (
                <div key={i} style={{
                    'marginTop': '1em',
                    'background': `url(${playlist.images[0].url})`,
                    'backgroundRepeat': 'no-repeat',
                    'height': '250px',
                    'width': '250px',
                    'display': 'flex',
                    'flexDirection': 'column',
                    'justifyContent': 'flex-start',
                    'alignItems': 'center',
                }}>
                    <h4>Title: {playlist.name}</h4>
                    <p>Number of Tracks: {playlist.tracks.total}</p>
                </div>
            ))
        )
    }
}

export default Playlists;
