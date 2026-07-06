import { LibraryPage } from "./pages/library.js";
import { PlaylistsPage } from "./pages/playlists.js";
import { QueuePage } from "./pages/queue.js";
import { SettingsPage } from "./pages/settings.js";

const routes = {
    "#/library": LibraryPage,
    "#/playlists": PlaylistsPage,
    "#/queue": QueuePage,
    "#/settings": SettingsPage
};

export function getCurrentPage() {
    return routes[location.hash] || LibraryPage;
}
