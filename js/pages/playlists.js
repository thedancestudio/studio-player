import { state, getCurrentPlaylist } from "../state.js";

export function PlaylistsPage() {

    const playlist = getCurrentPlaylist();

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

        ${state.playlists.map(p => `

            <div
                class="playlist-item ${p.id === state.selectedPlaylistId ? "active" : ""}"
                data-playlist="${p.id}"
            >

                <div class="playlist-name">

                    ${p.name}

                </div>

                <div class="playlist-meta">

                    ${p.tracks.length} Tracks

                </div>

            </div>

        `).join("")}

    </aside>

    <section class="playlist-main">

        <div class="playlist-header">

            <div>

                <h2>${playlist.name}</h2>

                <p>${playlist.tracks.length} Tracks</p>

            </div>

            <button class="primary-button">

                ▶ Play

            </button>

        </div>

        <div class="track-list">

            ${playlist.tracks.map((track,index)=>`

                <div class="track-row">

                    <div class="track-number">

                        ${index+1}

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
