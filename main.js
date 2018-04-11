import {
    app,
    BrowserWindow
} from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 587,
        minHeight: 540,
        frame: false,
        autoHideMenuBar: true,
        titleBarStyle: 'hidden'
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});