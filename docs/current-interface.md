# Current portfolio — October 19

The phone opens over the actual introduction and stays pinned while the page scrolls inside it. There is one intro DOM tree throughout the reveal; no stand-in biography is exchanged at the end of the animation. Reduced motion skips the opening and closing. Without JavaScript the content is a readable ordinary document.

Home contains five featured projects followed immediately by thirteen interactive project folders. Every feature has description before screenshot. The dock links to Home, Work, Folders, About and Contact on this page; /archive redirects to /#folders for older links. All eighteen case routes keep their data sources, examples, checks and limitations, with descriptions preceding images. Cases link back to the inline folders. Cross-page links use normal browser navigation so Back cannot leave a cached case visible under a home-page URL; same-page dock anchors retain the scroll animation.

The work heading is “Featured projects.” Basic/Glow/Orbit and hardware-colour controls were removed because their implementation did not match the reference. Decorative status text and the redundant statistics/invitation sections were removed. The dock has its own reserved area instead of covering text or links. Source-only project illustrations use unique SVG pattern IDs.

Folder click/Enter/Space opens its real case/demo/source links; Tab navigates files, Escape closes and returns focus. Filters select All, Live demos or Research. The supplied MIT Glassmorphism Folder Cards component is credited in THIRD_PARTY_NOTICES.md. Existing React/TypeScript/Tailwind are reused; no dependency or paid service was added.

The contact form opens an email draft in the visitor’s configured email application. This site stores and sends nothing. The direct email, GitHub and LinkedIn links remain available. Optional cloud AI is disabled and remains deferred.

Verification from parent My-Projects workspace: node delivery/check-phone-fold.mjs (desktop1440/mobile390/320, dock, inline folders, form validation, reduced motion, no-JS, all18cases) and node delivery/check-portfolio-integration.mjs (all13folders, actual case/back/history flows, /archive redirect, hash changes, text/IDs/links, reveal continuity). npm run lint, npm run type-check and npm run build check source. Historical documents describe earlier interfaces and experiments.
