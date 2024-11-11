const container=document.getElementById('container');
const text=document.getElementById("text");
const totaltime=7500;
const breathetime=(totaltime/5)*2;
const holdtime=totaltime/5;

breathAnimation();

function breathAnimation() {
    text.innerText="Breathe In!";
    container.className='container grow';
    setTimeout( () => {
        text.innertext='Hold';
        settimeout( ()=> {
            text.innertext='Breathe out!';
            container.classname='container shrink';
        },holdtime);
    },breatheTime);
}
setInterval(breatheAnimation,totalTime);


