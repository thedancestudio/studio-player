import { Sidebar } from "../ui/sidebar.js";
import { TopBar } from "../ui/topbar.js";
import { getCurrentPage } from "../router.js";

export class App {

    constructor() {
        this.sidebar = document.getElementById("sidebar");
        this.topbar = document.getElementById("topbar");
        this.content = document.getElementById("content");
        this.player = document.getElementById("player");

        this.currentRoute = location.hash || "#/library";
    }

    start() {

        if (!location.hash) {
            location.hash = "#/library";
            return;
        }

        this.renderShell();
        this.renderPage();

        window.addEventListener("hashchange", () => {
            this.currentRoute = location.hash;
            this.renderPage();
        });

    }

    renderShell() {

        this.sidebar.innerHTML = Sidebar(this.currentRoute);

        this.topbar.innerHTML = TopBar();

        // Player comes later
        this.player.innerHTML = "";

    }

    renderPage() {

        const Page = getCurrentPage();

        this.content.innerHTML = Page();

        // Re-render sidebar only so the active item updates
        this.sidebar.innerHTML = Sidebar(this.currentRoute);

    }

}
