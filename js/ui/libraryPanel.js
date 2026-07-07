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

function albums() {

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

    return [...map.values()];

}

function artists() {

    return [...new Set(filteredTracks().map(t => t.artist))];

}

function renderAlbums() {

    return `

<div class="album-grid">

${albums().map(album=>`

<div
    class="album-card"
    data-album="${album.title}"
>

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

function renderArtists(){

    return `

<div class="artist-list">

${artists().map(name=>`

<div
    class="artist-row"
    data-artist="${name}"
>

${name}

</div>

`).join("")}

</div>

`;

}

function renderSongs(){

    return `

<div class="song-list">

${filteredTracks().map(track=>`

<div
    class="song-row"
    data-track="${track.id}"
>

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

function renderAlbumTracks(){

    const tracks = filteredTracks().filter(
        t => t.album === selectedAlbum
    );

    return `

<button
    class="back-button"
>

← Albums

</button>

<div class="song-list">

${tracks.map(track=>`

<div
    class="song-row"
    data-track="${track.id}"
>

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

function body(){

    if(selectedAlbum){

        return renderAlbumTracks();

    }

    switch(mode){

        case "artists":

            return renderArtists();

        case "songs":

            return renderSongs();

        default:

            return renderAlbums();

    }

}

export function LibraryPanel(){

    return `

<div
    class="library-panel"
>

<div class="library-header">

<input
    id="library-search"
    class="library-search"
    placeholder="Search..."
>

</div>

<div class="library-tabs">

<button
class="${mode==="albums"?"active":""}"
data-mode="albums"
>

Albums

</button>

<button
class="${mode==="artists"?"active":""}"
data-mode="artists"
>

Artists

</button>

<button
class="${mode==="songs"?"active":""}"
data-mode="songs"
>

Songs

</button>

</div>

<div
id="library-body"
>

${body()}

</div>

</div>

`;

}

export function mountLibrary(onTrackChosen){

    const panel=document.querySelector(".library-panel");

    panel.querySelector("#library-search").oninput=e=>{

        search=e.target.value;

        refresh(onTrackChosen);

    };

    panel.querySelectorAll("[data-mode]").forEach(button=>{

        button.onclick=()=>{

            mode=button.dataset.mode;

            selectedAlbum=null;

            refresh(onTrackChosen);

        };

    });

    panel.querySelectorAll("[data-album]").forEach(card=>{

        card.onclick=()=>{

            selectedAlbum=card.dataset.album;

            refresh(onTrackChosen);

        };

    });

    panel.querySelectorAll(".back-button").forEach(button=>{

        button.onclick=()=>{

            selectedAlbum=null;

            refresh(onTrackChosen);

        };

    });

    panel.querySelectorAll("[data-track]").forEach(song=>{

        song.ondblclick=()=>{

            const track=library.find(
                t=>t.id===song.dataset.track
            );

            onTrackChosen(track);

        };

    });

}

function refresh(callback){

    document.querySelector(".library-column").innerHTML=LibraryPanel();

    mountLibrary(callback);

}
