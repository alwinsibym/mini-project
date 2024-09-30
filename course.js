const courses = [
  {
    title: "Introduction to JavaScript",
    description:
      "Learn the basics of JavaScript, the programming language of the web.",
    thumbnail: "course1-thumbnail.jpg", // Replace with actual image URL
    instructor: {
      name: "John Doe",
      profilePic: "instructor1.jpg", // Replace with actual image URL
    },
    details: "S3 BCA Data Science",
  },
  {
    title: "Web Development Bootcamp",
    description:
      "Become a full-stack web developer with this comprehensive bootcamp.",
    thumbnail: "course2-thumbnail.jpg",
    instructor: {
      name: "Jane Smith",
      profilePic: "instructor2.jpg",
    },
    details: "S5 BCA Web Development",
  },
  // Add more courses as needed
];

function populateCourses() {
  const container = document.getElementById("courseContainer");
  courses.forEach((course) => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
            <img src="${course.thumbnail}" alt="${course.title}" class="course-thumbnail">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="instructor-info">
                <img src="${course.instructor.profilePic}" alt="${course.instructor.name}">
                <span>${course.instructor.name}</span>
            </div>
            <div class="course-details">
                ${course.details}
            </div>
        `;
    container.appendChild(card);
  });
}

function searchCourses() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm)
  );

  const container = document.getElementById("courseContainer");
  container.innerHTML = ""; // Clear previous results
  filteredCourses.forEach((course) => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
            <img src="${course.thumbnail}" alt="${course.title}" class="course-thumbnail">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="instructor-info">
                <img src="${course.instructor.profilePic}" alt="${course.instructor.name}">
                <span>${course.instructor.name}</span>
            </div>
            <div class="course-details">
                ${course.details}
            </div>
        `;
    container.appendChild(card);
  });
}

// Populate courses on page load
document.addEventListener("DOMContentLoaded", populateCourses);
