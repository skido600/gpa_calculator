export function Suggest() {
  let suggest = document.getElementById("suggest");
  let toast = document.getElementById("toast");
  console.log(suggest, toast);
  suggest.addEventListener("click", function () {
    toast.style.display = "block";
    toast.style.top = "20px";

    setTimeout(() => {
      toast.style.top = "-50px";
      setTimeout(() => {
        toast.style.display = "none";
      }, 500);
    }, 2000);
  });
}
