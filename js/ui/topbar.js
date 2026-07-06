export function TopBar() {

    return `

        <div class="topbar-title">

            <h1>Studio Player</h1>

            <small>The Dance Studio</small>

        </div>

        <div class="topbar-right">

            <label class="search">

                <span class="material-symbols-rounded">
                    search
                </span>

                <input
                    type="text"
                    placeholder="Search..."
                >

            </label>

            <button class="icon-button">

                <span class="material-symbols-rounded">

                    sync

                </span>

            </button>

            <button class="icon-button">

                <span class="material-symbols-rounded">

                    settings

                </span>

            </button>

        </div>

    `;

}
