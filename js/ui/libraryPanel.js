import { library } from "../mock/library.js";

export function LibraryPanel() {

    const albums = [...new Map(
        library.map(track => [
            track.album,
            {
                title: track.album,
                artist: track.artist,
                artwork: track.artwork,
                tracks: library.filter(t => t.album === track.album).length
            }
        ])
    ).values()];

    return `

<div class="library-panel">

    <div class="library-header">

        <input
            class="library-search"
            type="text"
            placeholder="Search music..."
        >

    </div>

    <div class="library-tabs">

        <button class="active">
            Albums
        </button>

        <button>
            Artists
        </button>

        <button>
            Songs
        </button>

    </div>

    <div class="album-grid">

        ${albums.map(album => `

            <div class="album-card">

                <div class="album-art">

                    ${
                        album.artwork
                        ? `<img src="${album.artwork}" alt="">`
                        : `<span class="material-symbols-rounded">album</span>`
                    }

                </div>

                <div class="album-title">

                    ${album.title}

                </div>

                <div class="album-meta">

                    ${album.artist}

                </div>

                <div class="album-count">

                    ${album.tracks} Tracks

                </div>

            </div>

        `).join("")}

    </div>

</div>

`;

}
