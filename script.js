//movment animation
const card =document.querySelector('.card');
const container=document.querySelector('.container');
// items
const title=document.querySelector('.title');
const snowboard=document.querySelector('.snowboard img');
const purchase=document.querySelector('.purchase button');
const discription=document.querySelector('.info h3');
const size=document.querySelector('.size');

// moving animation event
container.addEventListener('mousemove', (e)=>{
    let xAxis= (window.innerWidth/ 2 - e.pageX)/25;
    let yAxis= (window.innerHeight/ 2 - e.pageY)/25;
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

//  animate in
container.addEventListener('mouseenter',(e)=>{
// popout
title.style.transform='translateZ(150px)';
snowboard.style.transform='translateZ(200px)rotateZ(-45deg)';
discription.style.transform='translateZ(120px)';
size.style.transform='translateZ(100px)';
size.style.transform='translateZ(75px)';
});

// animate out
container.addEventListener('mouseleave',(e)=>{
    card.style.transition='all 0.5 ease';
card.style.transform=`rotateY(0deg)rotateX(0deg)`;
title.style.transform='translateZ(0px)';
snowboard.style.transform='translateZ(0px)rotateZ(0deg)';
discription.style.transform='translateZ(0px)';
size.style.transform='translateZ(0px)';
size.style.transform='translateZ(0px)';

});