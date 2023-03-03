const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgFileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altNames = ['Closeup of eye', 'Waves/shell-like object', 'Flowers', 'Egyptian hieroglyphics', 'Butterfly'];

/* Looping through images */

let i;
for (i = 0; i < imgFileNames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/" + imgFileNames[i]);
    newImage.setAttribute('alt', altNames[i]); // TODO
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => displayedImage.src = e.target.src);
    newImage.addEventListener('click', e => displayedImage.alt = e.target.alt);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (e) => {
    if (e.target.className == 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});