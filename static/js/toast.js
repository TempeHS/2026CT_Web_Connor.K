const toastLiveExample = document.getElementById("liveToast");

function popup() {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastBootstrap.show();
}
setInterval(popup, 5000);
