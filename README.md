# Stewart Family Minecraft Server website

Six static pages for `TDStewart/stewnet-website`. No build tools, installation, accounts, external fonts, or JavaScript frameworks are required. All internal paths are relative and work at the GitHub Pages project path `/stewnet-website/` as well as a domain root.

## Preview before uploading

Open `index.html` in your browser. All page content and navigation work without JavaScript; JavaScript adds the address-copy button. Clipboard support depends on browser permissions and a secure context; if copying fails, the address is displayed for manual copying.

## Upload files (does not configure publishing)

1. Extract the downloaded ZIP.
2. Open https://github.com/TDStewart/stewnet-website and select the `main` branch.
3. Choose **Add file → Upload files**.
4. Upload the **contents** of the extracted folder, so `index.html` is at the repository root, alongside `README.md`, the five other pages, `guide-original.md`, `.nojekyll`, and the `assets` folder. Do not upload the ZIP or put everything inside another `stewnet-website` folder. If hidden files are omitted by your file picker, `.nojekyll` can be added separately; the ordinary static files also work without Jekyll processing.
5. Commit the upload. If Pages is already enabled for this branch, committing can automatically publish the changes. Check **Settings → Pages** before committing if you want to keep this staged only.

## Publish only when you are ready

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose branch **main**, folder **/ (root)**, then **Save**.
4. Wait for the Pages deployment to finish. Use the URL GitHub displays. For the usual project configuration this is https://tdstewart.github.io/stewnet-website/.
5. Check all six navigation links and the map link on a phone and computer.

GitHub's instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

No CNAME file is included. No DNS changes, custom-domain setup, repository writes, or publication were performed by the site builder. Existing custom-domain settings should be reviewed separately before publishing.

The Minecraft server's whitelist controls who can play. The wording “private” on this static website does not add website access control. A normal public GitHub Pages site and public repository are visible to anyone. The package contains no family player list, private contact details, or credentials.

## Content authority

The source is Terry's October 19, 2026 email version of “Stewart Family Minecraft Server — Getting Started Guide” pasted into the ChatGPT conversation **Minecraft Backpack Plugins**, conversation ID `6ad4e5ce-64c4-83e9-a899-8cf34f897ca9`, message ID `eda12557-b2ab-4c9e-aaa5-05e05d8e28b8`.

`guide-original.md` preserves that supplied text, including original typos and conditional wording. The full guide is rendered on `getting-started.html`; relevant sections are repeated on the Connect, Commands & features, and World map pages. The whitelist notice incorporates Terry's subsequent correction: players must give him their player name before connecting so he can whitelist them. FAQ answers and homepage summaries derive from the same guide. No server version, live status, extra commands, permissions, limits, or plugins have been invented.

The source says both “to return to peaceful mode, /peaceful” and that `/peaceful` toggles modes. Both original statements remain in the full guide. The FAQ also gives the explicit `/peaceful peaceful` command already supplied in its command table.

Console DNS addresses and compatible featured-server names were checked against https://github.com/Pugmatt/BedrockConnect on October 20, 2026. They match the supplied guide. The guide's third-party service caveat, troubleshooting link, and Automatic DNS restore instruction are retained. Minecraft server and map availability were not asserted or tested.

Visual revision: the user subsequently supplied “Stewart Family Minecraft Server Guide.png”, the original design reference. The homepage now follows its cinematic forest banner, grass-and-stone title, private-family panel, four shortcuts, and Java/Bedrock/map cards. Shared pages use textured stone/dirt panels and grass edging. The six requested pages are retained. The illustrated scenery is decorative and is not a screenshot of the actual server or live map. No tracking or analytics is included.

## Editing

- `assets/style.css`: shared appearance and responsive/print layouts.
- `assets/site.js`: copy-address enhancement.
- `assets/creeper.svg`, `assets/sheep.svg`: local illustrations.
- Six `.html` files: complete standalone page content, navigation, and the exact shared footer.

Keep repeated guide sections and the shared navigation/footer in sync when editing. Preserve conditional claims such as “if enabled,” “once enabled,” and “should.”

## Banner artwork

`assets/family-hero.webp` was created with the built-in image-generation tool using the user-supplied mockup as its reference, then encoded as WebP for the website. The unused standalone SVG sheep remains available in assets, but the homepage now uses the sheep in the banner.

Generation prompt:

> Use case: precise-object-edit. Create a wide website hero banner adapted from the provided reference. Preserve the reference's exact Minecraft voxel forest at dusk, warm lanterns, lake and house scenery, green Creeper at left and recognizable cubic white Minecraft sheep at right. Preserve the central two-line block title exactly: 'STEWART FAMILY' in grass-over-dirt 3D block letters and 'MINECRAFT SERVER' in pale stone 3D block letters. Below the title keep the small tagline 'BUILD • EXPLORE • SURVIVE • TOGETHER'. Remove ALL navigation bars, panels, cards, address boxes, UI buttons, private-server notice and lower website interface. This output is just a cinematic landscape hero artwork with the title and characters, to be placed above real HTML content. Frame the complete title and both characters without clipping, leave modest breathing room; wide landscape composition approximately 3:1. No other text. Match reference faithfully, not a redesign.

Revision validation: all internal files, anchors, navigation links, and exact shared footers passed checks. Full rendered guide wording matches the original after removing Markdown formatting. Banner artwork was visually inspected. A browser preview of this revision could not be run because local server sockets are restricted in this session; responsive CSS is provided but this revision has not been visually checked in a browser.
