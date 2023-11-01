// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');
    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function getDevices(){
  navigator.usb.getDevices().then((devices) => {
    if(devices.length == 0){
        document.getElementById("device-list")
            .insertAdjacentHTML("afterend",`No devices found.`);
    }
    devices.forEach((device) => {
      document.getElementById("device-list")
          .insertAdjacentHTML("afterend",
            device.productName +' '+ device.manufacturerName);
    });
  });
}