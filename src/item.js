export function drawGalleryItem(item) {
    const itemElement = document.createElement('div');
    itemElement.className = "gallery-item";

    const resourceWrapElement = document.createElement('div');
    resourceWrapElement.className = "gallery-item__resource";

    if (item.type === 'image') {
        const imageElement = document.createElement('img');
        imageElement.className = "gallery-item__image";
        imageElement.src = item.resource;

        resourceWrapElement.appendChild(imageElement);
    } else if (item.type === 'audio') {
        const audioElement = document.createElement('audio');
        audioElement.className = "gallery-item__audio";
        audioElement.src = item.resource;
        audioElement.controls = true;

        resourceWrapElement.appendChild(audioElement);
    }

    const titleElement = document.createElement('span');
    titleElement.className = "gallery-item__title";
    titleElement.textContent = item.title;

    itemElement.appendChild(resourceWrapElement);
    itemElement.appendChild(titleElement);

    return itemElement;
}