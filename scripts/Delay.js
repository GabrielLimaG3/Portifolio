window.delay = ScrollReveal({reset: true});
delay.reveal('.conteiner-main > img',{duration: 3500})
setTimeout(() => {delay.reveal('.text-h1-conteiner-main > h1',{duration: 2000})} ,1200);
setTimeout(()=> {delay.reveal('.text-h2-conteiner-main > p', {duration: 2000})}, 1700);
setTimeout(()=> {delay.reveal('.title-sobre-mim h1', {duration: 2000})}, 2200);
setTimeout(() => {delay.reveal('.text-sobre-mim p',{duration: 2000})}, 2700)
setTimeout(() => {delay.reveal('.tecnologias h1',{duration: 2000})}, 3200)
setTimeout(() => {delay.reveal('.img-tecnologias img',{duration: 2000})}, 3700)
setTimeout(() => {delay.reveal('button',{duration: 1000})}, 4200)

