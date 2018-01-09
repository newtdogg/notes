postnote = function () {
  input = document.getElementById('noteText');
  document.getElementById('noteDisplay').innerHTML += ("<li>" + input.value + "</li>");
  input.value =  "";
}