contact = document.querySelector('.contact');

contact.addEventListener('click',scrollToContact);

function scrollToContact(){
    document.querySelector('.contact-wrapper').scrollIntoView({behavior: 'smooth'})
}