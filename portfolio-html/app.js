$(() => {

    // const $flexbox = $('.nav').attr('id','flexbox')
    // $('body').append($flexbox)


    $aboutMeDiv = $('#about-div').hide(5000)
    $resumeDiv = $('#resume-div').hide(5000)
    $projectsDiv = $('#projects-div').hide(5000)

const toggleAboutMe = () => {
    $aboutMeDiv.show(4000)
    $resumeDiv.hide()
    $projectsDiv.hide()
}

const toggleResume = () => {
    $resumeDiv.show(4000)
    $aboutMeDiv.hide()
    $projectsDiv.hide()
}

const toggleProjects = () => {
    $projectsDiv.show(4000)
    $aboutMeDiv.hide()
    $resumeDiv.hide()
}

    $('#about-me').on('click', toggleAboutMe)
    $('#resume').on('click', toggleResume)
    $('#projects').on('click', toggleProjects)

const $flexboxfooter = $('<footer>').attr('id','flexbox')
$('body').append($flexboxfooter)

})