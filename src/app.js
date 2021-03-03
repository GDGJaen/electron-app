let isShowingImage = false;

async function downloadImage() {
    const ID = 'image'
    if (isShowingImage) {
        document.body.removeChild(document.getElementById(ID));
    }
    const URL = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(URL);
    const data = await response.json();
    const image = document.createElement('img');
    image.setAttribute('id', ID);
    image.src = data.message;
    document.body.appendChild(image);
    isShowingImage = true;
}

document.getElementById('button').addEventListener('click', downloadImage);