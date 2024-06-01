const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("getMusic", {
  send: () => {
    ipcRenderer.send("loadMusic");
  },
  receive: (callback) => {
    ipcRenderer.on("loadMusic", (event, response) => {
      callback(response);
    });
  },
});
