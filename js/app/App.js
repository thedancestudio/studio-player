import { Sidebar } from "../ui/sidebar.js";
import { TopBar } from "../ui/topbar.js";
import { getCurrentPage } from "../router.js";

export class App {

    constructor() {

        this.sidebar = document.getElementById("sidebar");
        this.topbar = document.getElementById("topbar");
        this.content = document.getElementById("content");
        this.player = document.getElementById("player");

        this.route = location.hash || "#/library";

    }

    start() {

        if (!location.hash) {
            location.hash = "#/library";
        }

        this.render();

        window.addEventListener("hashchange", () => {

            this.route = location.hash;

            this.render();

        });

    }

    render() {

        const page = getCurrentPage();

        this.sidebar.innerHTML = Sidebar(this.route);

        this.topbar.innerHTML = TopBar(page);

        this.content.innerHTML = page.content;

        if (typeof page.mounted === "function") {
            page.mounted();
        }        

        this.player.innerHTML = "";

    }

}
