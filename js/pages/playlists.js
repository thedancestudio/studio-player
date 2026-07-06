import {
    state,
    getCurrentPlaylist,
    selectPlaylist,
    subscribe
} from "../state.js";

function renderPlaylistWorkspace() {

    const playlist = getCurrentPlaylist();

    return `

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

                        ${index + 1}

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

`;

}

function wireEvents(container) {

    container.querySelectorAll(".playlist-item").forEach(item => {

        item.addEventListener("click", () => {

            selectPlaylist(item.dataset.playlist);

        });

    });

}

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
            <div id="playlist-page-root"></div>
        `,

        mounted() {

            const root = document.getElementById("playlist-page-root");

            function render() {

                root.innerHTML = renderPlaylistWorkspace();

                wireEvents(root);

            }

            subscribe(render);

            render();

        }

    };

}
