const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");
function createWindow() {
	const window = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},
	});
	window.loadFile("index.html");
}

app.whenReady().then(() => {
	createWindow();
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

// load files from ./music
function loadMusic() {
	retArr = [];
	fs.readdirSync("./music").forEach((file) => {
		retArr.push("./music/" + file);
	});
	return retArr;
}

ipcMain.on("loadMusic", (event, arg) => {
	event.reply("loadMusic", loadMusic());
});
