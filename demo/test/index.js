function init () {
  const canvasEle = document.getElementById('canvasEle')
  const oCanvasInterface = new window.NSCanvasInterface(canvasEle)
  registerNSCanvasReqHandlers(oCanvasInterface)
}

function registerNSCanvasReqHandlers (oCanvasInterface) {
  oCanvasInterface.canvasReqHandlers = {
    setCanvasImage,
    setBrightness
  }
}

function setCanvasImage (canvas, ctx, image) {
  // set image to canvas or do anything you want.
  ctx.drawImage(image, 0, 0, 100, 100)
}

/**
 * Return promise or value or nothing.
 * Once the promise is reslved or value is returned, the plugin will create an image
 * from canvas context and pass it to native app.
 */
function setBrightness (canvas, ctx, value) {
  return Promise((resolve, reject) => {
    // do image manipulation on canvas
    resolve()
  })
}

init()
