const headermenu=document.querySelector('.headermenu')
const openmenu=document.querySelector('.openmenu')
const closemenu=document.querySelector('.closemenu')

openmenu.addEventListener('click',show)
closemenu.addEventListener('click',close)
   
function show(){
	headermenu.style.display='flex'
	headermenu.style.top='0'
}
function close(){
	headermenu.style.top='-100%'
}
	

 

