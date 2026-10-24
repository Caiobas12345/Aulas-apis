const xhr = new XMLHttpRequest();
xhr.open("GET", "https://viacep.com.br/ws/89201000/json/");
xhr.onload = function () {
  if (xhr.status === 200) {
    const dados = JSON.parse(xhr.responseText);
    console.log(dados);
  }
};
xhr.send();