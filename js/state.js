export const state = {

    playlists: [

        {
            id: 1,
            name: "Spring Recital 2027",
            tracks: [
                { id: 1, title: "Opening Number", artist: "Studio Orchestra", duration: "2:31" },
                { id: 2, title: "Ballet Suite", artist: "Studio Orchestra", duration: "3:48" },
                { id: 3, title: "Tap Finale", artist: "Studio Orchestra", duration: "2:12" },
                { id: 4, title: "Curtain Call", artist: "Studio Orchestra", duration: "1:54" }
            ]
        },

        {
            id: 2,
            name: "Christmas Show",
            tracks: [
                { id: 5, title: "Snow Waltz", artist: "Studio Orchestra", duration: "2:47" },
                { id: 6, title: "Toy Soldiers", artist: "Studio Orchestra", duration: "3:05" }
            ]
        },

        {
            id: 3,
            name: "Competition Music",
            tracks: [
                { id: 7, title: "Lyrical Solo", artist: "Studio Orchestra", duration: "2:41" }
            ]
        }

    ],

    selectedPlaylistId: 1

};

const listeners = [];

export function subscribe(fn) {
    listeners.push(fn);
}

function notify() {
    listeners.forEach(fn => fn());
}

export function getCurrentPlaylist() {
    return state.playlists.find(p => p.id === state.selectedPlaylistId);
}

export function selectPlaylist(id) {
    state.selectedPlaylistId = Number(id);
    notify();
}

export function moveTrack(oldIndex, newIndex) {

    const playlist = getCurrentPlaylist();

    const track = playlist.tracks.splice(oldIndex, 1)[0];

    playlist.tracks.splice(newIndex, 0, track);

    notify();

}
export function addTrackToCurrentPlaylist(track){

    const playlist=getCurrentPlaylist();

    playlist.tracks.push({

        id:track.id,

        title:track.title,

        artist:track.artist,

        duration:track.duration

    });

    notify();

}
