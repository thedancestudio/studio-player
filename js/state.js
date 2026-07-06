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
                { id: 1, title: "Snow Waltz", artist: "Studio Orchestra", duration: "2:47" },
                { id: 2, title: "Toy Soldiers", artist: "Studio Orchestra", duration: "3:05" }
            ]
        },

        {
            id: 3,
            name: "Competition Music",
            tracks: [
                { id: 1, title: "Lyrical Solo", artist: "Studio Orchestra", duration: "2:41" }
            ]
        }

    ],

    selectedPlaylistId: 1

};

export function getCurrentPlaylist() {

    return state.playlists.find(
        p => p.id === state.selectedPlaylistId
    );

}
