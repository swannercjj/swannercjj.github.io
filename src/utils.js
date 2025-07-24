export const getImageUrl = (path) => {
    return new URL(`${window.location.origin}/src/resources/${path}`, import.meta.url).href;
};
