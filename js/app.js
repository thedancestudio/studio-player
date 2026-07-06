import { Sidebar } from "./ui/sidebar.js";
import { TopBar } from "./ui/topbar.js";
import { getCurrentPage } from "./router.js";

function render(){

    document.getElementById("sidebar").innerHTML=Sidebar();

    document.getElementById("topbar").innerHTML=TopBar();

    document.getElementById("player").innerHTML="";

    const Page=getCurrentPage();

    document.getElementById("content").innerHTML=Page();

}

window.addEventListener("hashchange",render);

render();
