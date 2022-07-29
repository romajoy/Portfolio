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
$aboutMeDiv.show(1000)
$projectsDiv.hide(1000)
$resumeDiv.hide(1000)
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
    $aboutMeDiv.toggle(2000)
    $resumeDiv.hide(2000)
    $projectsDiv.hide(2000)
}
const toggleProjects = () => {
    $projectsDiv.toggle(2000)
    $aboutMeDiv.hide(2000)
    $resumeDiv.hide(2000)
}
const toggleResume = () => {
    $resumeDiv.toggle(2000)
    $aboutMeDiv.hide(2000)
    $projectsDiv.hide(2000)
}
const toggleJobs = () => {
    $professionalDiv.toggle(2000)
}
const toggleErap = () => {
    $erapDeets.toggle(1500)
    $donorDeets.hide(1500)
    $libDeets.hide(1500)
    $mcanDeets.hide(1500)
}
const toggleDonor = () => {
    $donorDeets.toggle(1500)
    $erapDeets.hide(1500)
    $libDeets.hide(1500)
    $mcanDeets.hide(1500)
}
const toggleLibs = () => {
    $libDeets.toggle(1500)
    $erapDeets.hide(1500)
    $donorDeets.hide(1500)
    $mcanDeets.hide(1500)
}
const toggleMcan = () => {
    $mcanDeets.toggle(1500)
    $erapDeets.hide(1500)
    $donorDeets.hide(1500)
    $libDeets.hide(1500)
}

const toggleSkills = () => {
    $skillsDeets.toggle(1500)
    $jobDeets.hide(1500)
    $volDetails.hide(1500)
    $eduDetails.hide(1500)
}
const toggleVolExp = () => {
    $volDetails.toggle(1500)
    $jobDeets.hide(1500)
    $skillsDeets.hide(1500)
    $eduDetails.hide(1500)
}
const toggleEdu = () => {
    $eduDetails.toggle(1500)
    $jobDeets.hide(1500)
    $skillsDeets.hide(1500)
    $volDetails.hide(1500)
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

})