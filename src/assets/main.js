$(function() {

  $.ajax({
  	url: 'https://www.codeschool.com/users/rlargett.json',
  	dataType: 'jsonp',
  	success: function(response){
  		addCourses(response.courses.completed);
  	}
  });

  function addCourses(courses){
  	var $badge = $('#badges');
  	courses.forEach(function(course){
  		console.log(course);
  		var $course = $('<div />', {'class': 'course'}).appendTo($badge);
  		$('<h3 />', {text: course.title}).appendTo($course);
  		$('<img />').attr('src', course.badge).appendTo($course);
  		$('<a />').addClass('btn btn-primary').attr('url', course.url).attr('target', '_blank').text('See Course').appendTo($course);
  	})
  }

});
