const imgUrl = 'http://localhost:3000/images/1';

// GET request to server
fetch(imgUrl)
.then(res => res.json())
.then(flataPage)

// Render image on page
function flataPage(picture) {
    const imageGram = document.querySelector('.image-container');

    const pic = document.querySelector('.title');
    pic.textContent = picture.title;
    
    const img = document.querySelector('#card-image');
    img.src = picture.image;
    img.alt = picture.title;  
};

// add comments to ul#comments-list, will need to remove existing list
    // iterate through the comments array .forEach()?

// Event listener to click like button, it will increase the likes by 1
   // Will need to target picture.likes
const button = document.querySelector('#like-button');
button.addEventListener('click', e => {
    e.preventDefault();

    console.log(e.target['like-button'])
});

// Event listener to submit a new comment
const newComment = document.querySelector('#comment-form');
newComment.addEventListener('submit', e => {
    e.preventDefault();

    console.log(e.target['comment-button'])
});