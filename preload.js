const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('neonBridge', {
  onPad: (cb) => ipcRenderer.on('pad', (_e, index) => cb(index)),
  onStopAll: (cb) => ipcRenderer.on('stop-all', () => cb())
});
