$(() => {

    $aboutMeDiv = $('#about-div')
    $resumeDiv = $('#resume-div')
    $projectsDiv = $('#projects-div')

const toggleAboutMe = () => {
    $aboutMeDiv.show()
    $resumeDiv.hide()
    $projectsDiv.hide()
}

const toggleResume = () => {
    $resumeDiv.show()
    $aboutMeDiv.hide()
    $projectsDiv.hide()
}

const toggleProjects = () => {
    $projectsDiv.show()
    $aboutMeDiv.hide()
    $resumeDiv.hide()
}




})

$(() => {

    $('#about-me').on('click', toggleAboutMe)
    $('#resume').on('click', toggleResume)
    $('#projects').on('click', toggleProjects)

})