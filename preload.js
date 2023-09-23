const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("getMusic", {
	send: () => {
		ipcRenderer.send("loadMusic");
	},
	recieve: (callback) => {
		ipcRenderer.on("loadMusic", (event, response) => {
			callback(response);
		});
	},
});
