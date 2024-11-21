
document.getElementById('blog-form').addEventListener('submit', event => {
    event.preventDefault();
    const content = document.getElementById('blog-content').value;
    const entry = document.createElement('div');
    entry.textContent = content;
    document.getElementById('blog-entries').appendChild(entry);
});
