console.log('fetch_script.js loaded');

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// create the fetch function
async function goFetch(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

// for each url variable above, call the fetch function in a console.log
(async () => {
    console.log(await goFetch(url_posts));
    console.log(await goFetch(url_comments));
    console.log(await goFetch(url_albums));
    console.log(await goFetch(url_todos));
    console.log(await goFetch(url_users));
})();

// from the photos url, put 2 random photos into the img elements in the html
(async () => {
    let photos = await goFetch(url_photos);
    let randomPhotos = photos.sort(() => Math.random() - 0.5).slice(0, 2);
    console.log(randomPhotos);
    document.getElementById('photo1').src = randomPhotos[0].thumbnailUrl;
    document.getElementById('photo2').src = randomPhotos[1].thumbnailUrl;
})();
