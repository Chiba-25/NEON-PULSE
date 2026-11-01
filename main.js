const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

// Ctrl+Alt+<key> fires pad N from anywhere, even while a game or call is in front.
const PAD_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
let win = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 900,
    backgroundColor: '#090a0f',
    title: 'Neon Pulse',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      autoplayPolicy: 'no-user-gesture-required',
      backgroundThrottling: false // keep audio timing steady when minimized
    }
  });
  win.setMenuBarVisibility(false);
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  PAD_KEYS.forEach((key, i) => {
    globalShortcut.register(`CommandOrControl+Alt+${key}`, () => {
      if (win) win.webContents.send('pad', i);
    });
  });
  globalShortcut.register('CommandOrControl+Alt+S', () => {
    if (win) win.webContents.send('stop-all');
  });
  // Toggle "always on top"
  globalShortcut.register('CommandOrControl+Alt+T', () => {
    if (win) win.setAlwaysOnTop(!win.isAlwaysOnTop());
  });
});

app.on('will-quit', () => globalShortcut.unregisterAll());
app.on('window-all-closed', () => app.quit());
