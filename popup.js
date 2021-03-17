window.onload = () => {

document.getElementById('emDash').addEventListener("click", function() {
  var promise = navigator.clipboard.writeText("—");
  document.getElementById("emDash").innerHTML = "copied to clipboard";
});

document.getElementById('enDash').addEventListener("click", function() {
  var promise = navigator.clipboard.writeText("–");
  document.getElementById("enDash").innerHTML = "copied to clipboard";
});

document.getElementById('bulletPoint').addEventListener("click", function() {
  var promise = navigator.clipboard.writeText("•");
  document.getElementById("bulletPoint").innerHTML = "copied to clipboard";
});

document.getElementById('copyright').addEventListener("click", function() {
  var promise = navigator.clipboard.writeText("©");
  document.getElementById("copyright").innerHTML = "copied to clipboard";
});

document.getElementById('trademark').addEventListener("click", function() {
  var promise = navigator.clipboard.writeText("™");
  document.getElementById("trademark").innerHTML = "copied to clipboard";
});

document.getElementById('registered').addEventListener("click", function() {
  var promise = navigator.clipboard.writeText("®");
  document.getElementById("registered").innerHTML = "copied to clipboard";
});

}
