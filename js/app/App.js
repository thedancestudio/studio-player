import { Sidebar } from "../ui/sidebar.js";
import { TopBar } from "../ui/topbar.js";
import { getCurrentPage } from "../router.js";

export class App {

    constructor() {

        this.sidebar = document.getElementById("sidebar");
        this.topbar = document.getElementById("topbar");
        this.content = document.getElementById("content");
        this.player = document.getElementById("player");

    }

    start() {

        this.renderShell();

        this.renderPage();

        window.addEventListener("hashchange", () => {

            this.renderPage();

        });

    }

    renderShell() {

        this.sidebar.innerHTML = Sidebar();

        this.topbar.innerHTML = TopBar();

    }

    renderPage() {

        const Page = getCurrentPage();

        this.content.innerHTML = Page();

        this.sidebar.innerHTML = Sidebar();

    }

}
