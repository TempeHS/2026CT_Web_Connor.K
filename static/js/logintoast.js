const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToastlogin");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
