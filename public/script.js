const remote = require('electron').remote;

document.getElementsByClassName('minimizeMenu')[0].addEventListener('click', function (){
    const window = remote.getCurrentWindow();
    window.minimize();
});

document.getElementsByClassName('questionMenu')[0].addEventListener('click', function (){
    const shell = require('electron').shell;
    shell.openExternal('https://support.riotgames.com/hc/pt-br');
});

document.getElementsByClassName('closeMenu')[0].addEventListener('click', function (){
    const window = remote.getCurrentWindow();
    window.close();
});