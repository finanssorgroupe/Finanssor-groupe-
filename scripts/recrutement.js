document.addEventListener('DOMContentLoaded', function() {
    loadJobs();
});

function loadJobs() {
    axios.get('/data/jobs.json')  // Assurez-vous que le chemin est correct.
    .then(function (response) {
        const jobs = response.data;
        const jobListings = document.getElementById('jobListings');
        jobListings.innerHTML = '';
        jobs.forEach(job => {
            jobListings.innerHTML += `
    <div class="job">
        <div class="job-title">${job.title}</div>
        <div class="job-location">${job.location}</div>
        <div class="job-posted">${job.postedDate}</div>
        <button onclick="location.href='${job.url}'">Postuler</button>
    </div>
`;

        });
    })
    .catch(function (error) {
        console.error('Error loading the jobs:', error);
        jobListings.innerHTML = 'Erreur de chargement des offres ';
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const jobListings = document.getElementById('jobListings');
    const categorySelect = document.querySelector('select[name="category"]');
    const searchInput = document.querySelector('input[name="keyword"]');
    const locationInput = document.querySelector('input[name="location"]');
    const searchButton = document.querySelector('.search-filters button');

    let jobs = [];

    function loadJobs() {
        axios.get('/data/jobs.json')
        .then(function (response) {
            jobs = response.data;
            displayJobs(jobs);
        })
        .catch(function (error) {
            console.error('Error loading the jobs:', error);
            jobListings.innerHTML = 'Erreur de chargement des offres.';
        });
    }

    function displayJobs(filteredJobs) {
        jobListings.innerHTML = '';
        filteredJobs.forEach(job => {
            jobListings.innerHTML += `
                <div class="job">
                    <div class="job-title">${job.title}</div>
                    <div class="job-location">${job.location}</div>
                    <div class="job-posted">${job.postedDate}</div>
                    <button onclick="location.href='${job.url}'">Postuler</button>
                </div>
            `;
        });
    }

    function filterJobs() {
        const searchText = searchInput.value.toLowerCase();
        const locationText = locationInput.value.toLowerCase();
        const category = categorySelect.value;

        const filteredJobs = jobs.filter(job => {
            return (job.title.toLowerCase().includes(searchText) || job.location.toLowerCase().includes(locationText)) &&
                   (job.category.toLowerCase().includes(category) || category === 'selectionner une option');
        });
        displayJobs(filteredJobs);
    }

    searchButton.addEventListener('click', filterJobs);
    categorySelect.addEventListener('change', filterJobs);

    loadJobs();
});
