function pranesimasAngliskai() {
  let text = document.getElementById("char").value;
  //naudosiu switch() kita karta
  if (text == 'raudona') {
    document.body.style.background = "red";

  } else if (text == 'zalia') {
    document.body.style.background = "green";

  } else if (text == 'melyna') {
    document.body.style.background = "blue";

  } else {
    document.getElementById("pranesimas").innerHTML = 'nesamone cia kazkokia';
  }
}

