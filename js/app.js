import { Sidebar } from "./ui/sidebar.js";

function render() {

    document.getElementById("sidebar").innerHTML = Sidebar();

    document.getElementById("topbar").innerHTML = "";

    document.getElementById("player").innerHTML = "";

    document.getElementById("content").innerHTML = `

        <h1>Welcome</h1>

        <p>

            Studio Player is under construction.

        </p>

    `;

}

window.addEventListener("hashchange", render);

render();
