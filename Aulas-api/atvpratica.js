const axios = require("axios");

async function buscarUsuariosAxios() {
  try {
    const resposta = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    resposta.data.forEach(usuario => {
      console.log(usuario.name, usuario.email);
    });
  } catch (erro) {
    console.error("Erro:", erro.message);
  }
}

buscarUsuariosAxios();