import { tracks } from "../mock/tracks.js";

export function LibraryPage() {

    return `
        <section class="library">

            <div class="library-grid">

                ${tracks.map(t => `
                    <div class="track-card">
                        <div class="track-title">${t.title}</div>
                        <div class="track-meta">${t.artist}</div>
                        <div class="track-duration">${t.duration}</div>
                    </div>
                `).join("")}

            </div>

        </section>
    `;
}
