"use strict";
const sons = {
  A: "boom.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "kick.wav",
  G: "openhat.wav",
  H: "ride.wav",
  J: "snare.wav",
  K: "tink.wav",
  L: "tom.wav",
};

const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};
const exibir = (sons) => Object.keys(sons).forEach(criarDiv);
//object.keys(sons)->pegar as chaves de cada objeto e cria um array com todos
//forEach -> varre todos os elementos de um array
const tocarSom = (letra) => {
  const audio = new Audio(`sounds/${sons[letra]}`);
  audio.play();
};
//coloca o efeito do CSS
const adicionarEfeito = (letra) => {
  document.getElementById(letra).classList.toggle("active");
};
//remove o efeito do CSS
//transitionend -> aguarda o efeito de transição acabar para executar a função
const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removeActive = () => div.classList.remove("active");
  div.addEventListener("transitionend", removeActive);
};
//pega o evento de seleção da letra
//hasOwnProperty(letra)-> verifica se o clique no container foi em uma letra ou não
const ativarDiv = (evento) => {
  let letra = "";
  if (evento.type == "click") {
    letra = evento.target.id;
  } else {
    letra = evento.key.toUpperCase();
  }
  const letraPermitida = sons.hasOwnProperty(letra);
  if (letraPermitida) {
    adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra);
  } else {
    alert("Selecione somente as letras permitadas!!!!");
  }
};

exibir(sons);

window.addEventListener("keyup", ativarDiv);
document.getElementById("container").addEventListener("click", ativarDiv);
