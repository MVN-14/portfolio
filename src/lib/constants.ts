import { browser } from "$app/environment";

export const lineHeight = 20;
export const cursorWidth = 9;

let width = 0;
if (browser) {
  width = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--sidebar-width",
    ),
  );
}
export const sidebarWidth = width;

