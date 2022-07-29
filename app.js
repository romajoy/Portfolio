$(() => {

// Elements Created for JQuery

$aboutMeDiv = $('#bio-paragraph')
$resumeDiv = $('#resume-paragraph')
$projectsDiv = $('#projects-divy')
$professionalDiv = $('.hide-jobs')
$skillsDeets = $('#skills')
$experience = $('#experiencehead')
$resumeSections = $('.resumeheader')
$resumeDeets = $('.resume-details')
$jobDeets = $('.job-details')
$erapDeets = $('#erap-details')
$donorDeets = $('#donor-details')
$libDeets = $('#library-details')
$mcanDeets = $('#mcan-details')
$volDetails = $('#volunteer-details')
$eduDetails = $('#edu-details')


// On Load, show/hide:
$aboutMeDiv.slideUp(2000)
$projectsDiv.slideUp(2500)
$resumeDiv.slideUp(2500)
$jobDeets.hide()
$skillsDeets.hide()
$volDetails.hide()
$eduDetails.hide()
// $erapDeets.hide()
// $donorDeets.hide()
// $libDeets.hide()
// $mcanDeets.hide()



// Funtions for on-click:
const toggleAboutMe = () => {
    $aboutMeDiv.slideToggle(2000)
    $resumeDiv.slideUp(2000)
    $projectsDiv.slideUp(2000)
}
const toggleProjects = () => {
    $projectsDiv.slideToggle(2000)
    $aboutMeDiv.slideUp(2000)
    $resumeDiv.slideUp(2000)
}
const toggleResume = () => {
    $resumeDiv.slideToggle(2000)
    $aboutMeDiv.slideUp(2000)
    $projectsDiv.slideUp(2000)
    $eduDetails.slideUp(1500)
    $volDetails.slideUp(1500)
    $skillsDeets.slideUp(1500)
}
const toggleJobs = () => {
    $professionalDiv.slideToggle(2000)
    $skillsDeets.slideUp(1500)
    $volDetails.slideUp(1500)
    $eduDetails.slideUp(1500)
}
const toggleErap = () => {
    $erapDeets.slideToggle(1500)
    $donorDeets.slideUp(1500)
    $libDeets.slideUp(1500)
    $mcanDeets.slideUp(1500)
}
const toggleDonor = () => {
    $donorDeets.slideToggle(1500)
    $erapDeets.slideUp(1500)
    $libDeets.slideUp(1500)
    $mcanDeets.slideUp(1500)
}
const toggleLibs = () => {
    $libDeets.slideToggle(1500)
    $erapDeets.slideUp(1500)
    $donorDeets.slideUp(1500)
    $mcanDeets.slideUp(1500)
}
const toggleMcan = () => {
    $mcanDeets.slideToggle(1500)
    $erapDeets.slideUp(1500)
    $donorDeets.slideUp(1500)
    $libDeets.slideUp(1500)
}

const toggleSkills = () => {
    $skillsDeets.slideToggle(1500)
    $jobDeets.slideUp(1500)
    $volDetails.slideUp(1500)
    $eduDetails.slideUp(1500)
    $professionalDiv.slideUp(1500)
}
const toggleVolExp = () => {
    $volDetails.slideToggle(1500)
    $jobDeets.slideUp(1500)
    $skillsDeets.slideUp(1500)
    $eduDetails.slideUp(1500)
    $professionalDiv.slideUp(1500)
}
const toggleEdu = () => {
    $eduDetails.slideToggle(1500)
    $jobDeets.slideUp(1500)
    $skillsDeets.slideUp(1500)
    $volDetails.slideUp(1500)
    $professionalDiv.slideUp(1500)
}


// OnClick Actions
    $('#about-header').on('click', toggleAboutMe)
    $('#projects-header').on('click', toggleProjects)
    $('#resume-header').on('click', toggleResume)
    $('#experiencehead').on('click', toggleJobs)
    $('#erap-title').on('click', toggleErap)
    $('#donor-title').on('click', toggleDonor)
    $('#library-title').on('click', toggleLibs)
    $('#mcan-title').on('click', toggleMcan)
    $('#skillshead').on('click', toggleSkills)
    $('#volunteer-title').on('click', toggleVolExp)
    $('#edu-title').on('click', toggleEdu)


// projects carousel









})