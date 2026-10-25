# Stewart Family Minecraft website — October 25 update

Complete static website for TDStewart/stewnet-website, based on current GitHub commit b7cb7ed. No build tools or installation required.

## What changed

- Getting Started keeps the complete numbered guide and adds an eight-topic jump list.
- Connections, Commands & Features, and World Map use descriptive section headings, keeping existing instruction sequences, tables, and links intact. Old fragment IDs still work.
- Previous/Next links follow the existing family-page order.
- New Server Plugins & Updates page is in the main navigation on every page and linked in the footer. It contains all six manual and ten Starbase-managed entries supplied by Terry.
- EssentialsX Core, Protect, and Spawn use the documented matching development-build workflow with official Jenkins artifacts and the explicit instruction not to use Starbase Reinstall for those components.
- Geyser-Spigot and Floodgate use official Spigot/Paper downloads. Existing NetherNet signaling, ports, authentication settings, keys and configuration are preserved during routine update instructions.
- Lodeway instructions replace only the plugin JAR and preserve the existing hosted map, dashboard, association and domain.
- Managed entries link to official project pages for notes and compatibility. They normally use BisectHosting Starbase; manual replacement is explained only as a fallback when no compatible managed update is available.
- Development-build and GitHub Actions artifact download steps are included. No installed plugin release numbers are shown.
- The current full guide uses 15 homes to match your existing GitHub Commands and FAQ changes. The downloadable October 19 guide remains an untouched historical archive.
- The Minecraft artwork, colors, family navigation order and exact private-family footer remain. The article backdrop is slightly darker for text readability; the logo home link now has an accessible name.

## Upload to the existing repository

1. Extract the ZIP.
2. Open https://github.com/TDStewart/stewnet-website and select main.
3. Choose Add file → Upload files.
4. Upload the contents of the extracted folder, with index.html and plugin-updates.html at the repository root and the assets folder beside them. Do not upload the ZIP or enclose the site inside another folder.
5. Commit the files with a message such as “Improve guide headings and add plugin update reference”. This can automatically publish because the existing Pages branch is configured for deployment.
6. After deployment completes, open https://stewnet.com and refresh with Ctrl+Shift+R. Check the Plugin Updates navigation link.

Keep the existing CNAME file containing stewnet.com. The full ZIP preserves its exact current contents. No domain, DNS, live Minecraft server file, server setting, repository, or publication change was performed while preparing this update.

An optional update-only ZIP contains just the changed HTML pages, assets/style.css and README.md. It leaves the domain file, original guide and existing images alone. Upload its contents to the same repository root if you use it instead of the full package.

## Validation

- Seven pages: local file links, fragment anchors, seven-item header navigation, active page labels, exact family footer, and one main heading each checked.
- Main guide: eight numbered topics and an eight-link roadmap checked. Original guide wording retained with the confirmed 15-home change and command typo/format correction.
- Separate guides: instruction list counts, table rows and original external links checked against the current GitHub content.
- Six manual and ten Starbase-managed plugin entries checked against Terry’s supplied inventory.
- All 23 official project and documentation links on the plugin page returned HTTP 200 and matching page titles. Download builds are selected at maintenance time; no plugin binary was installed or executed.
- Administrator page checked in desktop and mobile browser layouts; mobile jump navigation reached the correct heading and no horizontal overflow was observed.
- Original Markdown guide and CNAME retained byte-for-byte from GitHub; all artwork files are unchanged.

## Maintaining the page

Open plugin-updates.html to edit administrator instructions. Update assets/style.css for shared appearance. All content is present in HTML without requiring JavaScript. assets/site.js only enhances the server address copy buttons.

The per-plugin management assignments come from Terry’s supplied list. Backpack specifically uses https://modrinth.com/plugin/backpackpl; version/loader filters from the supplied link were omitted to avoid a permanently pinned release. WIT links to the server plugin “What is That?”; VaultUnlocked may appear as Vault in logs.

## Suggested next improvements

- Put repeated commands and limits in one editable source and generate the static pages, so future changes cannot leave inconsistent copies.
- Add a device chooser to Connections, keeping the existing instructions beneath it.
- Keep last-reviewed dates on administrator and connection documentation; avoid fixed plugin releases.

These are future suggestions. The full numbered guide and working family instructions have not been replaced or shortened.

## Privacy and access

The Minecraft whitelist controls who may play. This public static website does not authenticate administrators; the plugin page is documentation only. It contains no panel credentials, key material, private dashboard links, or server configuration secrets.

## Official sources

Project links and documentation were reviewed October 25, 2026. The plugin page links to the relevant official sources beside each entry. Additional checked URLs:
- https://ci.ender.zone/job/EssentialsX/
- https://docs.papermc.io/paper/updating/
- https://essentialsx.net/downloads
- https://geysermc.org/download/
- https://geysermc.org/wiki/floodgate/setup/
- https://geysermc.org/wiki/geyser/setup/
- https://github.com/JXYZP-G/SortersSatchel/actions
- https://github.com/JXYZP-G/SortersSatchel/releases
- https://hangar.papermc.io/Myztic_dev/NoChatPopup/
- https://help.bisecthosting.com/hc/en-us/articles/40278552646299-How-to-Use-the-Plugins-Manager-on-a-Minecraft-Server
- https://help.bisecthosting.com/hc/en-us/articles/40526000363163-How-to-Install-Craftbukkit-and-Spigot-Plugins-on-a-Minecraft-Server
- https://modrinth.com/plugin/backpackpl
- https://modrinth.com/plugin/luckperms
- https://modrinth.com/plugin/neatsort
- https://modrinth.com/plugin/peaceful-players
- https://modrinth.com/plugin/scythe
- https://modrinth.com/plugin/sorters-satchel
- https://modrinth.com/plugin/timberella
- https://modrinth.com/plugin/vaultunlocked
- https://modrinth.com/plugin/what-is-that
- https://www.lodeway.app/
- https://www.lodeway.app/docs/getting-started
- https://www.lodeway.app/docs/troubleshooting
