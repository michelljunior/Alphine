Neutralino.init();

function onWindowClose() {
    Neutralino.app.exit();
}

Neutralino.events.on("windowClose", onWindowClose);

Neutralino.filesystem.getStats('C:/Alphine').then(resultado => {
    Neutralino.filesystem.getStats('C:/Alphine/Clientes.json').then(resultado => {
        console.log('Base de Clientes OK')
    }, () => {
        Neutralino.filesystem.writeFile('C:/Alphine/Clientes.json', '[]');
    });
    Neutralino.filesystem.getStats('C:/Alphine/Contratos.json').then(resultado => {
        console.log('Base de Contratos OK')
    }, () => {
        Neutralino.filesystem.writeFile('C:/Alphine/Contratos.json', '[]');
    });
}, () => {
    Neutralino.filesystem.createDirectory('C:/Alphine');
    Neutralino.filesystem.writeFile('C:/Alphine/Clientes.json', '[]');
    Neutralino.filesystem.writeFile('C:/Alphine/Contratos.json', '[]');
});