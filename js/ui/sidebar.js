import { navigation, settingsNavigation } from "../data/navigation.js";

function build(items, route) {

    return items.map(item => `
        <a class="nav-item ${item.route === route ? "active" : ""}"
           href="${item.route || "#"}">

            <span class="material-symbols-rounded">
                ${item.icon}
            </span>

            <span>${item.label}</span>

        </a>
    `).join("");

}

export function Sidebar(route) {

    return `
        <div class="sidebar-header">
            <div class="logo">
                <span class="material-symbols-rounded">music_note</span>
            </div>
            <div>
                <h2>Studio Player</h2>
                <small>The Dance Studio</small>
            </div>
        </div>

        <nav class="sidebar-nav">
            ${build(navigation, route)}
        </nav>

        <div class="sidebar-footer">
            ${build(settingsNavigation, route)}
        </div>
    `;
}
