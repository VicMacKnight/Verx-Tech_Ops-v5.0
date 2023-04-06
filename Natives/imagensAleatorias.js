const photosContainer = document.getElementById('photos-container');
const albumNumberElement = document.getElementById('album-number');
const randomAlbumId = Math.floor(Math.random() * 100) + 1;

albumNumberElement.innerHTML = randomAlbumId;

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(photos => {
        const filteredPhotos = photos.filter(photo => photo.albumId === randomAlbumId);

        filteredPhotos.forEach(photo => {
            const photoElement = document.createElement('div');
            photoElement.className = 'photo';

            const imgElement = document.createElement('img');
            imgElement.src = photo.url;

            photoElement.appendChild(imgElement);
            photosContainer.appendChild(photoElement);
        });
    });