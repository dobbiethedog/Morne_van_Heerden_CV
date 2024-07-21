const sections = document.querySelectorAll('.section');
// : const sectBtns = document.querySelectorAll('.controls'); // jy slect the hele ding , ons wil net die knoppies 
const sectBtns = document.querySelectorAll('.control'); // : Nou's ons reg, elke knoppie individueel!

const sectBtn = document.querySelectorAll('.control'); // Mooi
// : const allSections = document.querySelectorAll('.main-content'); // Was hierdie ou ooit gebruik? 

function PageTransitions() {
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            // : currentBtn[0].className = currentBtn[0].className.replace('active-btn', ''); // dinge deurmekaar raak met die spasies. ek weet slef nie wat hier an gan nie WAT ? idk anymore dalk selfmoord hdsafasfAS
            // : this.className += ' active-btn'; // as jy die dinhs meers as eenkeer click maak jy n string van actives O_O kan bly wees ek kyk nie na die cvv niee sall voesekkk joke......
            currentBtn.forEach(btn => btn.classList.remove('active-btn')); // : Skoon wat is skoon ooit in coding ? like is dit leterlik iets of is dit net my manier ek weet nie
            this.classList.add('active-btn'); // Nuut: Voeg net die klas by, sonder diplicates.
        })
    }

    // Oorweeg om hierdie deel te skrap, want ons het dit nie nodig vir  knoppies nie of ek weeni maaki saak
    // sections.addEventListener('click', (e) =>{ //  HUHHHH jy kan nie eventlistner op n node site nie maar oki u do u
    sectBtn.forEach(btn => { // jy verstaan
        btn.addEventListener('click', function () {
            const id = this.dataset.id;
            const element = document.getElementById(id);
            
            sections.forEach(section => {
                section.classList.remove('active'); //Maak seker net een afdeling is aktief op 'n slag.
            });
         
            if (element) {
                element.classList.add('active'); // Aktiveer die afdeling,
            }
        });
    });
}

PageTransitions();
