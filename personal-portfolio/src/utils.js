export const getImageUrl = (path) => {
    return new URL(`${window.location.origin}/assets/${path}`, import.meta.url).href;

};