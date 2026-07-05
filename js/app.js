import { renderSidebar } from "./ui/sidebar.js";
import { renderTopBar } from "./ui/topbar.js";
import { renderPlayer } from "./ui/playerbar.js";

renderSidebar();
renderTopBar();
renderPlayer();

document.querySelector("#content").innerHTML = `
    <h1>Studio Player</h1>
    <p>Welcome.</p>
`;
