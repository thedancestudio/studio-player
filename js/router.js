import { ProductionsPage } from "./pages/productions.js";
import { LibraryPage } from "./pages/library.js";
import { QueuePage } from "./pages/queue.js";
import { SearchPage } from "./pages/search.js";
import { SettingsPage } from "./pages/settings.js";

const routes = {

    "#/productions": ProductionsPage,

    "#/library": LibraryPage,

    "#/queue": QueuePage,

    "#/search": SearchPage,

    "#/settings": SettingsPage

};

export function getCurrentPage() {

    const hash = location.hash || "#/productions";

    return routes[hash] || ProductionsPage;

}
