const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1100,
      height: 800,
      simpleFullScreen: true
    })
  
    win.loadFile('index.html')
  }


  app.whenReady().then(() => {
    createWindow()
  })