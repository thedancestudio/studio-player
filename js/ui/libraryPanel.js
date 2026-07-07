import { library } from "../mock/library.js";

let mode = "albums";
let selectedAlbum = null;
let search = "";

function filteredTracks() {

    return library.filter(track => {

        const text = (
            track.title +
            track.artist +
            track.album
        ).toLowerCase();

        return text.includes(search.toLowerCase());

    });

}

function renderAlbums() {

    const map = new Map();

    filteredTracks().forEach(track => {

        if (!map.has(track.album)) {

            map.set(track.album, {
                title: track.album,
                artist: track.artist,
                artwork: track.artwork
            });

        }

    });

    return `
        <div class="album-grid">
            ${[...map.values()].map(album=>`

                <div class="album-card"
                     data-album="${album.title}">

                    <div class="album-art">
                        <span class="material-symbols-rounded">
                            album
                        </span>
                    </div>

                    <div class="album-title">
                        ${album.title}
                    </div>

                    <div class="album-meta">
                        ${album.artist}
                    </div>

                </div>

            `).join("")}
        </div>
    `;

}

function renderArtists() {

    const artists = [...new Set(
        filteredTracks().map(t=>t.artist)
    )];

    return `
        <div class="artist-list">

            ${artists.map(name=>`

                <div class="artist-row"
                     data-artist="${name}">

                    ${name}

                </div>

            `).join("")}

        </div>
    `;

}

function renderSongs(tracks){

    return `
        <div class="song-list">

            ${tracks.map(track=>`

                <div class="song-row"
                     data-track="${track.id}">

                    <div>

                        <div class="song-title">
                            ${track.title}
                        </div>

                        <div class="song-meta">
                            ${track.artist}
                        </div>

                    </div>

                    <div>
                        ${track.duration}
                    </div>

                </div>

            `).join("")}

        </div>
    `;

}

function renderBody(){

    if(selectedAlbum){

        const tracks = filteredTracks().filter(
            t=>t.album===selectedAlbum
        );

        return `
            <button class="back-button">

                ← Albums

            </button>

            ${renderSongs(tracks)}
        `;
    }

    switch(mode){

        case "artists":
            return renderArtists();

        case "songs":
            return renderSongs(filteredTracks());

        default:
            return renderAlbums();

    }

}

export function LibraryPanel(){

    return `

<div class="library-panel">

    <div class="library-header">

        <input
            id="library-search"
            class="library-search"
            placeholder="Search..."
            value="${search}"
        >

    </div>

    <div class="library-tabs">

        <button class="${mode==="albums"?"active":""}"
                data-mode="albums">

            Albums

        </button>

        <button class="${mode==="artists"?"active":""}"
                data-mode="artists">

            Artists

        </button>

        <button class="${mode==="songs"?"active":""}"
                data-mode="songs">

            Songs

        </button>

    </div>

    <div id="library-body">

        ${renderBody()}

    </div>

</div>

`;

}

export function bindLibraryEvents(root,onTrackChosen,onRefresh){

    root.querySelector("#library-search").oninput=e=>{

        search=e.target.value;

        onRefresh();

    };

    root.querySelectorAll("[data-mode]").forEach(button=>{

        button.onclick=()=>{

            mode=button.dataset.mode;
            selectedAlbum=null;

            onRefresh();

        };

    });

    root.querySelectorAll("[data-album]").forEach(card=>{

        card.onclick=()=>{

            selectedAlbum=card.dataset.album;

            onRefresh();

        };

    });

    root.querySelectorAll(".back-button").forEach(button=>{

        button.onclick=()=>{

            selectedAlbum=null;

            onRefresh();

        };

    });

    root.querySelectorAll("[data-track]").forEach(row=>{

        row.ondblclick=()=>{

            const track = library.find(
                t=>t.id===row.dataset.track
            );

            onTrackChosen(track);

        };

    });

}
