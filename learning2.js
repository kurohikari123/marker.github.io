function createMenu(name)
{
    let li=document.createElement('li');
    li.textContent=name;
    return li;
}
const menu=document.querySelector('#menu');
menu.appendChild(createMenu('hello'));
menu.appendChild(createMenu('hello2'));
const menu2=document.querySelector('#menu2');
menu2.appendChild(createMenu('hello3'));
menu2.appendChild(createMenu('hello4'));
