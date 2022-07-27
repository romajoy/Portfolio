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
$resumeDiv.hide(1000)
$projectsDiv.hide(1000)

// Funtions for on-click:
const toggleAboutMe = () => {
    $aboutMeDiv.toggle(2000)
    $resumeDiv.hide(2000)
    $projectsDiv.hide(2000)
}
const toggleResume = () => {
    $resumeDiv.toggle(2000)
    $aboutMeDiv.hide(2000)
    $projectsDiv.hide(2000)
}
const toggleProjects = () => {
    $projectsDiv.toggle(2000)
    $aboutMeDiv.hide(2000)
    $resumeDiv.hide(2000)
    $projectParas.hide(2000)
    $projectHeads.show(2000)
}
const projectAx = () => {
    $projectA.toggle(2000)
    $projectB.hide(2000)
    $projectC.hide(2000)
}
const projectBx = () => {
    $projectB.toggle(2000)
    $projectA.hide(2000)
    $proejctC.hide(2000)
}
const projectCx = () => {
    $projectC.toggle(2000)
    $projectA.hide(2000)
    $projectB.hide(2000)
    
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