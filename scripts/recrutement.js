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
