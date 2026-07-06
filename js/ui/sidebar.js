import { navigation, settingsNavigation } from "../data/navigation.js";

function buildNav(items, currentRoute) {

    return items.map(item => `

        <a
            class="nav-item ${item.route === currentRoute ? "active" : ""}"
            href="${item.route}"
        >

            <span class="material-symbols-rounded">
                ${item.icon}
            </span>

            <span class="label">
                ${item.label}
            </span>

        </a>

    `).join("");

}

export function Sidebar(currentRoute) {

    return `

        <div class="sidebar-header">

            <div class="logo">

                <span class="material-symbols-rounded">
                    music_note
                </span>

            </div>

            <div>

                <h2>Studio Player</h2>

                <small>The Dance Studio</small>

            </div>

        </div>

        <nav class="sidebar-nav">

            ${buildNav(navigation, currentRoute)}

        </nav>

        <div class="sidebar-footer">

            ${buildNav(settingsNavigation, currentRoute)}

        </div>

    `;

}
