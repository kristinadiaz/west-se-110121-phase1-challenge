const imgUrl = 'http://localhost:3000/images/1';
const commentList = document.getElementById('comments-list');

fetch(imgUrl)
.then((res) => res.json())
.then((json) => {
    imageData = json;
    renderImage(imageData)
});

document
.getElementById('like-button')
.addEventListener('click', incrementLikes)

document
.getElementById('comment-form')
.addEventListener('submit', addComment)

function renderImage(image) {
    const title = document.getElementById('card-title');
    title.textContent = image.title;

    document.getElementById('card-image').src = image.image;
    document.getElementById('card-image').alt = image.title;

    renderLikes(image.likes);
    renderComments(image.comments);
};

function incrementLikes() {
    imageData.likes += 1;
    renderLikes(imageData.likes);
}

function renderLikes(likes) {
    document.getElementById('like-count').textContent = `${likes} likes`;
}

function addComment(event) {
    event.preventDefault();
    const commentText = event.target.comment.value;

    renderComment( {content:commentText} );
    event.target.reset();
}

function renderComments(comments) {
    commentList.innerHTML = ' ';
    comments.forEach(renderComment);
};

function renderComment(comment) {
    const li = document.createElement('li');
    li.textContent = comment.content;
    commentList.append(li);
};