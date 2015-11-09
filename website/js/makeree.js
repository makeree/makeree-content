var repository = '';

$(document).ready(function () {

    var customrepository = getParameterByName('repository');
    var lessonid = getParameterByName('lessonid');
    var courseid = getParameterByName('courseid');

    // Get repository
    if (customrepository != '') {
        repository = customrepository;
        $('#repoistoryText').val(repository);
    }
    else {
        repository = $('#repoistoryText').val();
    }
    repository = repository.replace('https://github.com/', '');
    repository = repository.replace('http://github.com/', '');
    repository = repository.replace('github.com/', '');
    
	if (repository.indexOf("/", repository.length - 1)) {
        repository = repository.substring(0, repository.length - 1);
    }

    // Generate menus
    GenerateCoursesMenu(repository);

    // Get course name
    var course = '';
    if (courseid != '') {
        course = courseid;
    }
    else
    {
        var firstCourse = $("#courses a:first-child");
        if (firstCourse != null) {
            course = firstCourse.text().trim();
        }
    }

    // Generate menus
    GenerateLessonsMenu(repository, course);

    // Get lesson id
    var lesson = '';
    if (lessonid != '') {
        lesson = lessonid;
    }
    else
    {
        var firstLesson = $("#lessons a:first-child");
        if (firstLesson != null) {
            lesson = firstLesson.text();
        }
    }

    // Check if there are lesson or course parameters
    if (courseid == '' && lessonid == '') {

        Flatdoc.run({
            fetcher: Flatdoc.github(repository)
        });
	}
    else {

        Flatdoc.run({
            fetcher: Flatdoc.github(repository, 'courses/' + course + '/' + lesson + '/lesson.md')
        });
    }
})

$(document).on('flatdoc:ready', function() {
	$('img').each(
        function(){
			var newUrl = $(this).attr("src").replace("[BASE]", "https://raw.githubusercontent.com/" + repository + "/master/");
            $(this).attr("src", newUrl);
        });
});

function GenerateCoursesMenu(repository)
{
    // Fetch courses folder from git
    var url = 'https://api.github.com/repos/' + repository + '/contents/courses';
    $.ajax({
        url: url,
        success: function (data) {

            for (var index = 0; index < data.length; index++) {
                var courseLink = $("<a/>", {
                    href: "",
                    text: data[index].name,
                    onclick: "loadcourse('" + data[index].name + "');return false;"
                });
                $("#courses").append(courseLink);
            }
        },
        async: false
    }
    );
}

function GenerateLessonsMenu(repository, course) {

    // Fetch lessons folder from git
    var url = 'https://api.github.com/repos/' + repository + '/contents/courses/' + course;
    $.ajax({
        url: url,
        success: function (data) {

            for (var index = 0; index < data.length; index++) {
                var lessonLink = $("<a/>", {
                    href: "",
                    text: data[index].name,
                    onclick: "loadlesson('" + data[index].name + "');return false;"
                });
                $("#lessons").append(lessonLink);
            }
        },
        async: false
    }
    );
}

function loadrepository() {

    var repository = $('#repoistoryText').val();
    var url = window.location.href;
    url = setGetParameter(url, 'repository', repository);
    url = setGetParameter(url, 'lessonid', '');
    url = setGetParameter(url, 'courseid', '');
    window.location.href = url;
}

function loadlesson(lessonid) {

    var url = window.location.href;
    url = setGetParameter(url, 'lessonid', lessonid);
    window.location.href = url;
}

function loadcourse(course) {

    var url = window.location.href;
    url = setGetParameter(url, 'courseid', course);
    url = setGetParameter(url, 'lessonid', '');
    window.location.href = url;
}

function setGetParameter(url, paramName, paramValue) {
    if (url.indexOf(paramName + "=") >= 0) {
        var prefix = url.substring(0, url.indexOf(paramName));
        var suffix = url.substring(url.indexOf(paramName));
        suffix = suffix.substring(suffix.indexOf("=") + 1);
        suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
        url = prefix + paramName + "=" + paramValue + suffix;
    }
    else {
        if (url.indexOf("?") < 0)
            url += "?" + paramName + "=" + paramValue;
        else
            url += "&" + paramName + "=" + paramValue;
    }
    return url;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
