// Placeholder for dynamically loading assignments
document.addEventListener("DOMContentLoaded", function () {
    const assignmentList = document.getElementById('assignmentList');

    // Simulated data for assignments
    const assignments = [
        { title: 'Essay on Shakespeare', due: '2024-12-10', status: 'In Progress' },
        { title: 'Research Paper on AI', due: '2024-12-15', status: 'finished' }]
})
// Show/hide button based on scroll
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Scroll to the top
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById('contactForm').addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const details = document.getElementById('details').value.trim();
    const file = document.getElementById('assignmentFile').files[0];
    const errorDiv = document.getElementById('error');

    let errors = [];

    if (!name) errors.push("Name is required.");
    if (!email || !/\S+@\S+\.\S+/.test(email)) errors.push("Valid email is required.");
    if (!details) errors.push("Assignment details are required.");
    if (!file || !['application/pdf', 'application/msword', 'image/png'].includes(file.type)) {
        errors.push("File must be a PDF, Word document, or PNG.");
    }

    if (errors.length > 0) {
        e.preventDefault();
        errorDiv.innerHTML = errors.join('<br>');
    } else {
        errorDiv.innerHTML = "";
    }
});
// Show or hide the Back-to-Top button
const backToTopButton = document.getElementById('backToTop');
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const details = document.querySelector('textarea[name="details"]').value.trim();

    if (!name || !email || !details) {
        alert('Please fill in all required fields.');
        e.preventDefault(); // Prevent form submission
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }
});

// Simulated dynamic assignment data
const assignments = [
    { title: "History Essay", status: "Completed" },
    { title: "Physics Lab Report", status: "Pending" },
];

const assignmentList = document.getElementById('assignmentList');

// Populate the list with assignment data
assignments.forEach((assignment) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${assignment.title}</strong> - ${assignment.status}`;
    assignmentList.appendChild(listItem);
});

fetch('http://localhost:5000/api/assignments')
    .then((response) => response.json())
    .then((data) => {
        const assignmentList = document.getElementById('assignmentList');
        data.forEach((assignment) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${assignment.title}</strong> - ${assignment.status}`;
            assignmentList.appendChild(listItem);
        });
    })
    .catch((error) => console.error('Error fetching assignments:', error));
