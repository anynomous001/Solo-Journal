const firstSection = document.getElementById("first-section")
const firstContent = document.getElementById("first-content")
const clickedFirstSection = document.getElementById("clicked-first-section")
const firstPostContent = document.getElementById("first-post-content")
const aboutMeContent = document.getElementById("about-me-content")
const viewMoreContent = document.querySelectorAll(".view-more-content");
const viewMore = document.getElementById("view-more")

const home = document.getElementById("home")
const aboutMe = document.getElementById("about-me")

clickedFirstSection.style.display = "none";

for (var i = 0; i < viewMoreContent.length; i++) {
    viewMoreContent[i].style.display = "none";
}

viewMore.addEventListener("click", function () {
    for (var i = 0; i < viewMoreContent.length; i++) {
        viewMoreContent[i].style.display = "block";
    }
    viewMore.style.display = "none"
})

firstContent.addEventListener("click", function () {


    firstSection.style.display = "none";
    aboutMeContent.style.display = "none";


    clickedFirstSection.style.display = "block";
    firstPostContent.style.display = 'block';

})

home.addEventListener("click", function () {

    clickedFirstSection.style.display = "none";
    firstSection.style.display = "block";


})

aboutMe.addEventListener("click", function () {

    firstPostContent.style.display = "none";
    firstSection.style.display = "none";

    clickedFirstSection.style.display = "block";
    aboutMeContent.style.display = 'flex';

})