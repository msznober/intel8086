//Wyświetlenie wybranego przeniesienia
function show() {
  var firstChoice = document.getElementById("from").value;
  var secondChoice = document.getElementById("to").value;

  if (firstChoice === secondChoice) {
    document.getElementById('show').innerHTML = "Wybrano takie same rejestry.";
  } else
    document.getElementById('show').innerHTML = "MOV " + secondChoice + ", " + firstChoice;
}

//Działanie symulatora
const button = document.querySelector('.button');
button.addEventListener('click', function () {
  const firstChoice = document.querySelector('.from').value;
  const secondChoice = document.querySelector('.to').value;
  const ax = document.querySelector('.reg_ax');
  const bx = document.querySelector('.reg_bx');
  const cx = document.querySelector('.reg_cx');
  const dx = document.querySelector('.reg_dx');

  const simulator = new collection(firstChoice, secondChoice, ax, bx, cx, dx);
  simulator.mov();
});

class collection {
  constructor(firstChoice, secondChoice, ax, bx, cx, dx) {
    this.firstChoice = firstChoice;
    this.secondChoice = secondChoice;
    this.ax = ax;
    this.bx = bx;
    this.cx = cx;
    this.dx = dx;
  }

  //Pobieranie i przenoszenie danych

  mov() {
    //Pobranie z AX
    if (this.firstChoice === "AX") {
      if (this.secondChoice === "BX") {
        this.bx.value = this.ax.value;
        this.ax.value = '';
        this.cx.value = '';
        this.dx.value = '';
      }
      if (this.secondChoice === "CX") {
        this.cx.value = this.ax.value;
        this.ax.value = '';
        this.bx.value = '';
        this.dx.value = '';
      }
      if (this.secondChoice === "DX") {
        this.dx.value = this.ax.value;
        this.ax.value = '';
        this.cx.value = '';
        this.bx.value = '';
      }
    }
    //Pobranie z BX
    if (this.firstChoice === "BX") {
      if (this.secondChoice === "AX") {
        this.ax.value = this.bx.value;
        this.bx.value = '';
        this.cx.value = '';
        this.dx.value = '';
      }
      if (this.secondChoice === "CX") {
        this.cx.value = this.bx.value;
        this.bx.value = '';
        this.ax.value = '';
        this.dx.value = '';
      }
      if (this.secondChoice === "DX") {
        this.dx.value = this.bx.value;
        this.bx.value = '';
        this.cx.value = '';
        this.ax.value = '';
      }
    }
    //Pobranie z CX
    if (this.firstChoice === "CX") {
      if (this.secondChoice === "BX") {
        this.bx.value = this.cx.value;
        this.cx.value = '';
        this.ax.value = '';
        this.dx.value = '';
      }
      if (this.secondChoice === "AX") {
        this.ax.value = this.cx.value;
        this.cx.value = '';
        this.bx.value = '';
        this.dx.value = '';
      }
      if (this.secondChoice === "DX") {
        this.dx.value = this.cx.value;
        this.cx.value = '';
        this.bx.value = '';
        this.ax.value = '';
      }
    }
    //Pobranie z DX
    if (this.firstChoice === "DX") {
      if (this.secondChoice === "BX") {
        this.bx.value = this.dx.value;
        this.dx.value = '';
        this.cx.value = '';
        this.ax.value = '';
      }
      if (this.secondChoice === "CX") {
        this.cx.value = this.dx.value;
        this.dx.value = '';
        this.ax.value = '';
        this.dx.value = '';
      }
      if (this.secondChoice === "AX") {
        this.ax.value = this.dx.value;
        this.dx.value = '';
        this.cx.value = '';
        this.bx.value = '';
      }
    }
  }
}