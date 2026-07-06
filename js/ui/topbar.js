export function TopBar(page) {

    return `
        <div class="topbar-title">
            <h1>${page.title}</h1>
            <small>${page.subtitle}</small>
        </div>

        <div class="topbar-actions">

            ${page.actions || ""}

        </div>
    `;

}
