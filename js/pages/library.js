import { albums } from "../mock/albums.js";

export function LibraryPage() {

    return {

        title: "Library",

        subtitle: "Browse your music collection",

        actions: `
            <span class="material-symbols-rounded">
                search
            </span>
        `,

        content: `

            <div class="library-tabs">

                <button class="active">Albums</button>

                <button>Artists</button>

                <button>Songs</button>

            </div>

            <div class="album-grid">

                ${albums.map(album => `

                    <div class="album-card">

                        <div class="album-art">

                            <span class="material-symbols-rounded">

                                album

                            </span>

                        </div>

                        <div class="album-title">

                            ${album.title}

                        </div>

                        <div class="album-artist">

                            ${album.artist}

                        </div>

                    </div>

                `).join("")}

            </div>

        `

    };

}
