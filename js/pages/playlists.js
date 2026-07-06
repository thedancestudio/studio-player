const playlists = [
    {
        id: 1,
        name: "Spring Recital 2027",
        tracks: 72,
        duration: "2 hr 43 min"
    },
    {
        id: 2,
        name: "Christmas Show",
        tracks: 34,
        duration: "1 hr 28 min"
    },
    {
        id: 3,
        name: "Competition Music",
        tracks: 18,
        duration: "51 min"
    }
];

const currentTracks = [
    { number: 1, title: "Opening Number", artist: "Studio Orchestra", duration: "2:31" },
    { number: 2, title: "Ballet Suite", artist: "Studio Orchestra", duration: "3:48" },
    { number: 3, title: "Tap Finale", artist: "Studio Orchestra", duration: "2:12" },
    { number: 4, title: "Curtain Call", artist: "Studio Orchestra", duration: "1:54" }
];

export function PlaylistsPage() {

    return {

        title: "Playlists",

        subtitle: "Build and organize performances",

        actions: `
            <button class="primary-button">
                New Playlist
            </button>
        `,

        content: `

<div class="playlist-workspace">

    <aside class="playlist-sidebar">

        <h3>Playlists</h3>

        ${playlists.map((playlist, index) => `

            <div class="playlist-item ${index === 0 ? "active" : ""}">

                <div class="playlist-name">
                    ${playlist.name}
                </div>

                <div class="playlist-meta">
                    ${playlist.tracks} Tracks • ${playlist.duration}
                </div>

            </div>

        `).join("")}

    </aside>

    <section class="playlist-main">

        <div class="playlist-header">

            <div>

                <h2>Spring Recital 2027</h2>

                <p>72 Tracks</p>

            </div>

            <button class="primary-button">

                ▶ Play

            </button>

        </div>

        <div class="track-list">

            ${currentTracks.map(track => `

                <div class="track-row">

                    <div class="track-number">

                        ${track.number}

                    </div>

                    <div class="track-info">

                        <div class="track-title">

                            ${track.title}

                        </div>

                        <div class="track-artist">

                            ${track.artist}

                        </div>

                    </div>

                    <div class="track-duration">

                        ${track.duration}

                    </div>

                </div>

            `).join("")}

        </div>

    </section>

</div>

`

    };

}
