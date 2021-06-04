function showMenu() { document.querySelector("header #navLinks").style.right = "0";}
function hideMenu() { document.querySelector("header #navLinks").style.right = "-200px";}

// checkTheme();

(()=>{ // checkTheme
// console.log(localStorage.getItem('darkmode'));
const currentThemeColor = (localStorage.getItem('darkmode')=='true')?'theme-darkmode':'theme-lightmode' ;
// console.log(currentThemeColor);
if(currentThemeColor !== null){
    document.querySelector('body').classList.add(currentThemeColor);
    document.querySelector(`#theme-darkmode`).classList.add('active');
}
})();

function switchColorTheme(){

if(document.querySelector('#theme-darkmode').classList.contains('active')){
    document.querySelector('body').classList.remove('theme-darkmode');
    document.querySelector('body').classList.add('theme-lightmode');
    document.querySelector('#theme-darkmode').classList.remove('active');
    localStorage.setItem('darkmode','false');
}else{
    document.querySelector('body').classList.add('theme-darkmode');
    document.querySelector('body').classList.remove('theme-lightmode');
    document.querySelector('#theme-darkmode').classList.add('active');
    // document.querySelector('')
    localStorage.setItem('darkmode','true');
}

// console.log(localStorage.getItem('darkmode'));

}