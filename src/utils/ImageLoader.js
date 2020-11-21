const loadImage = (img) =>
    new Promise((resolve, reject) => {
        if (img.complete) {
            resolve();
        }

        img.addEventListener('load', () => {
            resolve();
        });

        img.addEventListener('error', (error) => {
            reject(error);
        });
    });

export const loadImages = () => {
    const imgs = Array.from(document.querySelectorAll('img'));

    return Promise.all(imgs.map(loadImage));
};
