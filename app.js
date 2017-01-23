/*jshint esversion: 6 */
const {webFrame} = require('electron')
//webFrame.setZoomFactor(1);

// Operatividad en la pagina cargada
const webview = document.getElementById('sap');
webview.addEventListener('dom-ready', () => {
    //webview.openDevTools();
    //Codigo insertado en la web externa
    webview.insertCSS(`

    `);
    webview.executeJavaScript(`

    `);
    //webview.send(channel)
});



window.onload = () => {
    //Evento que recoje el valor de cada click
    let boton = document.querySelectorAll('.button');
    for (let i of boton) {
        i.addEventListener('click', (e) => {
            webview.insertText(i.innerHTML);
        });
    }

    // Mostrar los eventos de consola en la consola del software
    webview.addEventListener('console-message', (e) => {
        //console.log('webview:'+ e.message);
    });

    // Abrir cerrar teclado
    document.querySelector('#icon-box').addEventListener('click', () => {
        document.querySelector('#keybottom').classList.toggle('active');
        document.querySelector('#webviewbox').classList.toggle('active');
    });
}
