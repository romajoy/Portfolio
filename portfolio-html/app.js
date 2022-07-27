$(() => {

// Elements Created for JQuery

$aboutMeDiv = $('#bio-paragraph')//.hide(5000)
$resumeDiv = $('#resume-paragraph')//.hide(5000)
$projectsDiv = $('#projects-divy')//.hide(5000)
$projectParas = $('.project-description')
$projectA = $('#project1')
$projectB = $('#project2')
$projectC = $('#project3')
$projectHeads = $('.head')

// On Load, show/hide:
$aboutMeDiv.show()
$resumeDiv.hide()
$projectsDiv.hide()

// Funtions for on-click:
const toggleAboutMe = () => {
    $aboutMeDiv.toggle(4000)
    $resumeDiv.hide(4000)
    $projectsDiv.hide(4000)
}
const toggleResume = () => {
    $resumeDiv.toggle(4000)
    $aboutMeDiv.hide(4000)
    $projectsDiv.hide(4000)
}
const toggleProjects = () => {
    $projectsDiv.toggle(4000)
    $aboutMeDiv.hide(4000)
    $resumeDiv.hide(4000)
    $projectParas.hide()
    $projectHeads.show(4000)
}
const projectAx = () => {
    $projectA.toggle(3000)
    $projectB.hide(3000)
    $projectC.hide(3000)
}
const projectBx = () => {
    $projectB.toggle(3000)
    $projectA.hide(3000)
    $proejctC.hide(3000)
}
const projectCx = () => {
    $projectC.toggle(3000)
    $projectB.hide(3000)
    $projectA.hide(3000)
}


// OnClick Actions
    $('#about-header').on('click', toggleAboutMe)
    $('#resume-header').on('click', toggleResume)
    $('#projects-header').on('click', toggleProjects)
    $('#p1-head').on('click', projectAx)
    $('#p2-head').on('click', projectBx)
    $('#p3-head').on('click', projectCx)


// flexbox variable, possibly not needed
// const $flexboxfooter = $('<footer>').attr('id','flexbox')
// $('body').append($flexboxfooter)

})