/**
 * Copies semantically matched assets from the READ-ONLY central library
 * into this project's public/ directories. Does not modify the library.
 */
import { copyFileSync, existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIBRARY = join(
  process.env.HOME,
  "Documents/Ecommerce-Product-Library"
);

const PRODUCTS = [
  ["harbor-lantern", "images/outdoor/camping-lantern-001.jpg"],
  ["wicker-picnic-basket", "images/outdoor/picnic-basket-001.jpg"],
  ["field-binoculars", "images/outdoor/binoculars-001.jpg"],
  ["trail-hiking-boots", "images/outdoor/hiking-boots-002.jpg"],
  ["compact-led-flashlight", "images/outdoor/flashlight-001.jpg"],
  ["cotton-hammock", "images/outdoor/camping-hammock-001.jpg"],
  ["trail-thermos", "images/outdoor/insulated-outdoor-bottle-001.jpg"],
  ["brass-pocket-compass", "images/outdoor/compass-001.jpg"],
  ["garden-hand-tools", "images/outdoor/garden-tools-001.jpg"],
  ["canvas-weekender", "images/travel-bags/weekender-duffel-bag-001.jpg"],
  ["olive-canvas-daypack", "images/travel-bags/canvas-daypack-001.jpg"],
  ["waxed-travel-pack", "images/travel-bags/travel-backpack-002.jpg"],
  ["leather-messenger", "images/travel-bags/messenger-bag-001.jpg"],
  ["cream-knit-throw", "images/home-living/knit-throw-blanket-001.jpg"],
  ["seagrass-catchall", "images/home-living/woven-storage-basket-001.jpg"],
  ["celadon-bud-vase", "images/home-living/ceramic-vase-001.jpg"],
  ["double-coat-hook", "images/home-living/coat-hooks-001.jpg"],
  ["wood-wick-candle", "images/gifts-lifestyle/scented-candle-001.jpg"],
  ["hardwood-side-table", "images/home-living/wooden-side-table-001.jpg"],
  ["white-linen-bedding", "images/home-living/linen-bedding-set-001.jpg"],
  ["glass-bud-vases", "images/home-living/glass-bud-vase-001.jpg"],
  ["striped-cotton-towels", "images/gifts-lifestyle/bath-towel-set-001.jpg"],
  ["white-ceramic-mugs", "images/kitchen-dining/ceramic-mug-001.jpg"],
  ["bamboo-cutting-board", "images/kitchen-dining/wooden-cutting-board-001.jpg"],
  ["cast-iron-skillet", "images/kitchen-dining/cast-iron-skillet-001.jpg"],
  ["copper-tea-kettle", "images/kitchen-dining/tea-kettle-001.jpg"],
  ["hand-crank-coffee-mill", "images/kitchen-dining/coffee-grinder-001.jpg"],
  ["celadon-fluted-plate", "images/kitchen-dining/stoneware-dinner-plate-001.jpg"],
  ["lidded-serving-tureen", "images/kitchen-dining/serving-bowl-001.jpg"],
  ["pour-over-coffee-set", "images/gifts-lifestyle/pour-over-coffee-set-001.jpg"],
  ["stoneware-teapot", "images/kitchen-dining/teapot-001.jpg"],
  ["art-deco-flatware", "images/kitchen-dining/cutlery-set-001.jpg"],
  ["buffalo-check-flannel", "images/apparel/flannel-shirt-001.jpg"],
  ["trail-knit-beanie", "images/apparel/knit-beanie-001.jpg"],
  ["suede-work-gloves", "images/accessories/gloves-001.jpg"],
  ["leather-bifold-wallet", "images/accessories/leather-wallet-001.jpg"],
  ["brass-buckle-belt", "images/accessories/leather-belt-001.jpg"],
  ["olive-felt-fedora", "images/accessories/felt-hat-001.jpg"],
  ["cable-knit-scarf", "images/accessories/wool-scarf-001.jpg"],
  ["field-watch", "images/accessories/wristwatch-001.jpg"],
  ["clear-frame-sunglasses", "images/accessories/sunglasses-002.jpg"],
  ["staunton-chess-set", "images/gifts-lifestyle/chess-set-001.jpg"],
  ["classic-shave-set", "images/gifts-lifestyle/grooming-kit-001.jpg"],
];

const CATEGORIES = [
  ["outdoor", "images/outdoor/binoculars-001.jpg"],
  ["home", "images/home-living/knit-throw-blanket-001.jpg"],
  ["kitchen-dining", "images/kitchen-dining/tea-kettle-001.jpg"],
  ["travel", "images/travel-bags/weekender-duffel-bag-001.jpg"],
  ["apparel", "images/apparel/flannel-shirt-001.jpg"],
  ["accessories", "images/accessories/felt-hat-001.jpg"],
];

const BANNERS = [
  ["editorial-weekend.jpg", "images/outdoor/picnic-blanket-002.jpg"],
  ["editorial-pack.jpg", "images/outdoor/camping-lantern-002.jpg"],
  ["lifestyle-outdoor.jpg", "images/travel-bags/travel-backpack-002.jpg"],
  ["about.jpg", "images/home-living/knit-throw-blanket-001.jpg"],
];

function copy(srcRel, destAbs) {
  const src = join(LIBRARY, srcRel);
  if (!existsSync(src)) throw new Error(`Missing library file: ${src}`);
  const st = statSync(src);
  if (st.size < 4000) throw new Error(`Suspiciously small file: ${src} (${st.size} bytes)`);
  mkdirSync(dirname(destAbs), { recursive: true });
  copyFileSync(src, destAbs);
  return { src: srcRel, dest: destAbs.replace(ROOT, ""), bytes: st.size };
}

const copied = [];
for (const [slug, rel] of PRODUCTS) {
  copied.push(copy(rel, join(ROOT, "public/products", `${slug}.jpg`)));
}
for (const [slug, rel] of CATEGORIES) {
  copied.push(copy(rel, join(ROOT, "public/categories", `${slug}.jpg`)));
}
for (const [name, rel] of BANNERS) {
  copied.push(copy(rel, join(ROOT, "public/banners", name)));
}

const report = {
  generatedAt: new Date().toISOString(),
  libraryRoot: LIBRARY,
  products: PRODUCTS.length,
  copied: copied.length,
  files: copied,
};
writeFileSync(join(ROOT, "data/library-asset-map.json"), JSON.stringify(report, null, 2));
console.log(`Copied ${copied.length} files from library. Products: ${PRODUCTS.length}`);
