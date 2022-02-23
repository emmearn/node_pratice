var courses = [
	{ name: 'Learning JavaScript', published: true },
	{ name: 'Learning Node.js', published: true },
	{ name: 'Learning PHP', published: false }
];

function showPublishedCourses() {
	const publishedCourses = courses.filter(course => course.published);
	console.log(publishedCourses);
}

module.exports.showCourses = courses;
module.exports.showPublishedCourses = showPublishedCourses;