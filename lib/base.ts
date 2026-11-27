/**
 * Path prefix when the site is served from a sub-path (GitHub Pages: /kaspian-clone).
 * Next adds it to <Link> hrefs itself; files in /public referenced by plain strings go through asset().
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${BASE_PATH}${path}`;
