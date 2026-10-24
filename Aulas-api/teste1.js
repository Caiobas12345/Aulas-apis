    fetch("https://viacep.com.br/ws/89201000/json/")
    .then((resposta) => resposta.json())
    .then((dados) => console.log(dados))
    .catch((erro) => console.error("Erro na requisição:", erro));