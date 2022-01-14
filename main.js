const form = document.querySelector("form");
form.onsubmit = (event) => {
    event.preventDefault();

    const selected = event.target.querySelector("input[type=submit]:focus");
    console.log(selected);
    if (selected.classList.contains("yes"))
        document.location.href = "SAC-site/yes-page.html";
    else if (selected.classList.contains("no"))
        document.location.href = "https://youtu.be/dQw4w9WgXcQ";
}