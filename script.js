const movies = [
    // Trending
    { title: "Neon Nights", category: "Trending Now", image: "https://placehold.co/500x700/121212/00f3ff?text=Neon+Nights", genre: "Sci-Fi Thriller" },
    { title: "Velocity", category: "Trending Now", image: "https://placehold.co/500x700/121212/ff0055?text=Velocity", genre: "Action" },
    { title: "Ghost Protocol", category: "Trending Now", image: "https://placehold.co/500x700/121212/33ff00?text=Ghost", genre: "Mystery" },
    { title: "Last Laugh", category: "Trending Now", image: "https://placehold.co/500x700/121212/ffcc00?text=Comedy", genre: "Comedy" },
    { title: "Cyber Horizon", category: "Trending Now", image: "https://placehold.co/500x700/121212/00f3ff?text=Cyber", genre: "Sci-Fi" },

    // Action
    { title: "Blast Radius", category: "Action", image: "https://placehold.co/500x700/202020/ff3333?text=Blast", genre: "Action" },
    { title: "Shadow Warrior", category: "Action", image: "https://placehold.co/500x700/202020/888?text=Shadow", genre: "Martial Arts" },
    { title: "Desert Storm", category: "Action", image: "https://placehold.co/500x700/202020/cc8800?text=Desert", genre: "War" },
    { title: "High Octane", category: "Action", image: "https://placehold.co/500x700/202020/ff5500?text=Octane", genre: "Racing" },

    // Comedy
    { title: "Office Pranks", category: "Comedy", image: "https://placehold.co/500x700/222/ffee00?text=Pranks", genre: "Sitcom" },
    { title: "Family Trip", category: "Comedy", image: "https://placehold.co/500x700/222/00aaff?text=Trip", genre: "Family" },
    { title: "Date Night", category: "Comedy", image: "https://placehold.co/500x700/222/ff0099?text=Date", genre: "Romance" },
    { title: "College Days", category: "Comedy", image: "https://placehold.co/500x700/222/00ffaa?text=College", genre: "Teen" },

    // Sci-Fi
    { title: "Star Voyager", category: "Sci-Fi", image: "https://placehold.co/500x700/111/9900ff?text=Voyager", genre: "Space Opera" },
    { title: "AI Awakening", category: "Sci-Fi", image: "https://placehold.co/500x700/111/00ffff?text=AI", genre: "Dystopian" },
    { title: "Mars Colony", category: "Sci-Fi", image: "https://placehold.co/500x700/111/ff5500?text=Mars", genre: "Survival" },
    { title: "Time Loop", category: "Sci-Fi", image: "https://placehold.co/500x700/111/ffffff?text=Loop", genre: "Thriller" },
];

function renderCategories() {
    const container = document.getElementById('categories-container');
    const categories = ["Trending Now", "Action", "Comedy", "Sci-Fi"];

    categories.forEach(category => {
        // Create Section
        const section = document.createElement('section');
        section.classList.add('category');

        // Title
        const title = document.createElement('h2');
        title.classList.add('category-title');
        title.textContent = category;
        section.appendChild(title);

        // Grid/Slider
        const grid = document.createElement('div');
        grid.classList.add('movie-grid');

        // Filter movies
        const categoryMovies = movies.filter(m => m.category === category);

        categoryMovies.forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('movie-card');

            card.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}" class="movie-poster">
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <p class="movie-genre">${movie.genre}</p>
                </div>
            `;
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}

document.addEventListener('DOMContentLoaded', renderCategories);
