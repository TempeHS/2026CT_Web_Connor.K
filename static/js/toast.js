const toastLiveExample2 = document.getElementById("liveToast");
function popup() {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2);
  toastBootstrap.show();
}
popup();
