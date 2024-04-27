var navbar= document.getElementsByClassName('navbar')[0];
var about= document.getElementsByClassName('content_about')[0];
var containerModal= document.getElementsByClassName('modal_container')[0];
var imageModal= document.getElementsByClassName('modal-body')[0];
var btnClose= document.getElementsByClassName('close')[0];
var project= document.getElementsByClassName('project')[0];
var mapView= document.getElementsByClassName('mapView')[0];
var contactSection= document.getElementsByClassName('contactSection')[0];
window.addEventListener('scroll',function(params) {
    if (this.scrollY > 1000) {
        
        navbar.style.backgroundColor = '#222222';
        navbar.style.marginTop = '0px'
    } else {
        navbar.style.backgroundColor = ''
        navbar.style.marginTop = '20px'
    }
    if(this.scrollY > 500){
        console.log(this.scrollY);
        about.style.animation= "drop 1.5s ease";
        about.style.opacity= 1;
    }else{
        about.style.animation= "";
        about.style.opacity= 0; 
    }
    if(this.scrollY > 2400){
        console.log(this.scrollY);
        mapView.style.animation= "animatelefttoright 1.5s ease";
        contactSection.style.animation= "animaterighttoleft 1.5s ease";
        mapView.style.opacity= 1;
        contactSection.style.opacity= 1;
    }else{
        mapView.style.animation= "";
        contactSection.style.animation= "";
        mapView.style.opacity= 0; 
        contactSection.style.opacity= 0; 
    }
})
var projectList = [
    {
        Titre: "Propertips By IAD",
        src: "./assets/Projects/propertips.png",
        skills: "Laravel, aws, ReactJs, Batch",
        link: "https://nosrezo.com",
        access: {psw: "", Email: ""}
    },
    {
        Titre: "Cinema news",
        src: "./assets/Projects/cinema_news.png",
        skills: "ReactJs, TypeScript, Redux-Thunk, Styled-components, framer-motion",
        link: "https://cinema-news.netlify.app",
        access: {psw: "", Email: ""}
    },
    {
        Titre: "Gestion de conge",
        src: "./assets/Projects/login.png",
        skills: "Vuejs, Slim, VueX",
        link: "https://leavemanagementhub.netlify.app",
        access: {psw: "test123", Email: "test@gmail.com"}
    },
    {
        Titre: "Music player",
        src: "./assets/Projects/music_player.png",
        skills: "ReactJs, Sass, Uuid",
        link: "https://music-reader.netlify.app",
        access: {psw: "", Email: ""}
    },
    {
        Titre: "QRCode Generator",
        src: "./assets/Projects/generate_qr.png",
        skills: "ReactJs, TypeScript, react-qrcode-logo",
        link: "https://generer-qr-code.netlify.app",
        access: {psw: "", Email: ""}
    },
    {
        Titre: "Gestion de conge",
        src: "./assets/Projects/login.png",
        skills: "Vuejs, Slim, VueX",
        link: "https://leavemanagementhub.netlify.app",
        access: {psw: "test1234", Email: "saad@gmail.com"}
    },
];
var projectsSection = document.getElementById("projectsSection");



projectList.forEach(element => {
    // create classes for the elements 
    var classCard = document.createAttribute("class");
    var classProjectImg = document.createAttribute("class");
    var classTitle = document.createAttribute("class");
    var classSkills = document.createAttribute("class");
    var classLink = document.createAttribute("class");
    var classAccess = document.createAttribute("class");

    // set the classes value and create elements 
    var projectCard = document.createElement("div");
    classCard.value = "projectCard";
    projectCard.setAttributeNode(classCard);
    var imgProject = document.createElement("img");
    classProjectImg.value = "imgProject";
    imgProject.setAttributeNode(classProjectImg);
    var projectTitle = document.createElement("p");
    classTitle.value = "projectTitle";
    projectTitle.setAttributeNode(classTitle);
    var projectSkills = document.createElement("p");
    classSkills.value = "projectSkills";
    projectSkills.setAttributeNode(classSkills);
    var projectLink = document.createElement("a");
    classLink.value = "projectLink";
    projectLink.setAttributeNode(classLink);
    var projectAccess = document.createElement("p");
    classAccess.value = "projectAccess";
    projectAccess.setAttributeNode(classAccess);

    // create src att for img
    var srcProjectImg = document.createAttribute("src");
    var targetTo = document.createAttribute("target");
    var linkTo = document.createAttribute("href");

    srcProjectImg.value = element.src;
    imgProject.setAttributeNode(srcProjectImg);
    targetTo.value = "_blanck";
    linkTo.value = element.link;
    projectLink.setAttributeNode(targetTo);
    projectLink.setAttributeNode(linkTo);
    projectLink.innerText=element.link;
    projectTitle.innerText=element.Titre;
    projectSkills.innerText=element.skills;
    projectAccess.innerText=element?.access?.Email+" / "+element?.access?.psw;
    projectCard.appendChild(imgProject)
    projectCard.appendChild(projectTitle)
    projectCard.appendChild(projectSkills)
    projectCard.appendChild(projectLink)
    if (element.access.Email !== "") {
        projectCard.appendChild(projectAccess)
    }
    projectsSection.appendChild(projectCard)

});
// project.addEventListener('click',function(e){
//    var src= e.target.getAttribute('src');
//    if (src === null) {
//        return
//    }
//    imageModal.setAttribute('src',src);
//    containerModal.classList.add('show');
// })
btnClose.addEventListener('click',function(){
    containerModal.classList.remove('show');
})