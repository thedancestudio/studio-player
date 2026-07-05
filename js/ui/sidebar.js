const navItems = [
    {
        icon: "theater_comedy",
        label: "Productions",
        route: "#/productions"
    },
    {
        icon: "library_music",
        label: "Library",
        route: "#/library"
    },
    {
        icon: "queue_music",
        label: "Queue",
        route: "#/queue"
    },
    {
        icon: "search",
        label: "Search",
        route: "#/search"
    },
    {
        icon: "settings",
        label: "Settings",
        route: "#/settings"
    }
];

export function Sidebar() {

    const current = location.hash || "#/productions";

    const links = navItems.map(item => `
        <a
            class="nav-item ${current === item.route ? "active" : ""}"
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

    return `
        <div class="sidebar-header">

            <div class="logo-circle">
                ♫
            </div>

            <div>

                <h2>Studio Player</h2>

                <small>The Dance Studio</small>

            </div>

        </div>

        <nav>

            ${links}

        </nav>
    `;
}
