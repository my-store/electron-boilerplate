const {app, BrowserWindow} = require("electron")
const path = require("path")
const url = require("url")

let WINDOW = null

app.whenReady().then(() =>
{
    WINDOW = new BrowserWindow({
        webPreferences : {
            nodeIntegration : true,
            contextIsolation : false,
            nodeIntegrationInWorker : true,
            enableRemoteModule : true
        },
        title : "My First App",
        width : 700,
        height : 400,
        frame : true // Change this if you want frameless app
    })
    WINDOW.loadURL(url.format({
        pathname : path.join(__dirname, "app.html"),
        slashes : true,
        protocol : "file:"
    }))
    WINDOW.on("closed", () =>
    {
        WINDOW = null
        app.quit()
    })
})
app.on("window-all-closed", () => app.quit())