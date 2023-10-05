function carousel() {
    let carouselSlider = document.querySelector(".carousel-slider");
    let list = document.querySelector(".carousel-list");
    let list2;

    const speed = 1;
    const width = list.offsetWidth;
    let x = 0;
    let x2 = width;

    function clone() {
        list2 = list.cloneNode(true);
        carouselSlider.appendChild(list2);
        list2.style.left = `${width}px`; // Corrected template literal
    }

    function moveFirst() {
        x -= speed;
        if (width >= Math.abs(x)) {
            list.style.left = `${x}px`; // Corrected template literal
        } else {
            x = width;
        }
    }
    // Example of fetching data from an API using the Fetch API
fetch('https://api.themoviedb.org/3/trending/all/week?api_key=YOUR_API_KEY')
.then(response => response.json())
.then(data => {
    // Process and display the fetched data here
})
.catch(error => console.error('Error fetching data:', error));
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Load more content here
    }
});


    function moveSecond() {
        x2 -= speed;
        if (list.offsetWidth >= Math.abs(x2)) {
            list2.style.left = `${x2}px`; // Corrected template literal
        } else {
            x2 = width;
        }
    }

    function hover() {
        clearInterval(a);
        clearInterval(b);
    }

    function unhover() {
        a = setInterval(moveFirst, 10);
        b = setInterval(moveSecond, 10);
    }

    clone();

    let a = setInterval(moveFirst, 10);
    let b = setInterval(moveSecond, 10);

    carouselSlider.addEventListener("mouseenter", hover);
    carouselSlider.addEventListener("mouseleave", unhover); // Corrected event name
}

carousel();
