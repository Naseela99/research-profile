// click down to add transition

down_btn = document.querySelector('.down-link');

down_btn.addEventListener('click',scrollToMain);


function scrollToMain(){
    // window.scrollTo('.main-container')
    document.querySelector('.main-container').scrollIntoView({behavior: 'smooth'})
}

menu_icon = document.querySelector('.menu-icon')

menu_icon.addEventListener('click',popMenu)

menu = document.querySelector('.navbar')

function popMenu(){
    

    if(menu.style.display=='none'){
        menu.style.display = 'block'
    }
    else{
        menu.style.display = 'none' 
    }
}

abt = document.querySelector('.about');

abt.addEventListener('click',scrollToAbout);

function scrollToAbout(){
    document.querySelector('.about-wrapper').scrollIntoView({behavior: 'smooth'})
    
}


res = document.querySelector('.research');

res.addEventListener('click',scrollToStatement);

function scrollToStatement(){
    document.querySelector('.research-wrapper').scrollIntoView({behavior: 'smooth'})
    
}

project = document.querySelector('.projects');

project.addEventListener('click',scrollToProject);

function scrollToProject(){
    document.querySelector('.project-wrapper').scrollIntoView({behavior: 'smooth'})
    
}

// skills = document.querySelector('.skills');

// skills.addEventListener('click',scrollToSkills);

// function scrollToSkills(){
//     document.querySelector('.skills-wrapper').scrollIntoView({behavior: 'smooth'})
// }

exp = document.querySelector('.experience');

exp.addEventListener('click',scrollToExp);

function scrollToExp(){
    document.querySelector('.experience-wrapper').scrollIntoView({behavior: 'smooth'})
}


news = document.querySelector('.highlights');

news.addEventListener('click',scrollToNews);

function scrollToNews(){
    document.querySelector('.news-wrapper').scrollIntoView({behavior: 'smooth'})
}


pub = document.querySelector('.publications');

pub.addEventListener('click',scrollToPub);

function scrollToPub(){
    document.querySelector('.publication-wrapper').scrollIntoView({behavior: 'smooth'})
}



mail = document.querySelector('.gmail')
linked_in = document.querySelector('.linked-in')
insta = document.querySelector('.instagram')
github = document.querySelector('.github')

mail.addEventListener('click',goToMail)
linked_in.addEventListener('click',goToLinked)
insta.addEventListener('click',goToInsta)
github.addEventListener('click',goToGit)


function goToMail(){
    window.open('mailto:naseelasidiqi@gmail.com?subject=Website Reachout')
}
function goToLinked(){
    window.open('https://www.linkedin.com/in/naseela-pervez/')
}
function goToInsta(){
    window.open('https://www.instagram.com/naseela.pervez/')
}
function goToGit(){
    window.open('https://github.com/Naseela99')
}


contact = document.querySelector('.contact');

contact.addEventListener('click',scrollToContact);

function scrollToContact(){
    document.querySelector('.contact-wrapper').scrollIntoView({behavior: 'smooth'})
}

statement = document.querySelector('.research');

statement.addEventListener('click',scrollToStatement);

function scrollToStatement(){
    document.querySelector('.research-wrapper').scrollIntoView({behavior: 'smooth'})
}