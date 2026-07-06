import { navigation, settingsNavigation } from "../data/navigation.js";

function buildNav(items, current) {

    return items.map(item => `

        <a
            class="nav-item ${current === item.route ? "active" : ""}"
            href="${item.route}"
        >

            <span class="material-symbols-rounded">
                ${item.icon}
            </span>

            <span>
                ${item.label}
            </span>

        </a>

    `).join("");

}

export function Sidebar() {

    const current = location.hash || "#/productions";

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

            ${buildNav(navigation, current)}

        </nav>

        <div class="sidebar-footer">

            ${buildNav(settingsNavigation, current)}

        </div>

    `;

}
