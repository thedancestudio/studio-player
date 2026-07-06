import { Sidebar } from "./ui/sidebar.js";
import { getCurrentPage } from "./router.js";

function render() {

    document.getElementById("sidebar").innerHTML = Sidebar();

    document.getElementById("topbar").innerHTML = "";

    document.getElementById("player").innerHTML = "";

    const Page = getCurrentPage();

    document.getElementById("content").innerHTML = Page();

}

window.addEventListener("hashchange", render);

render();
