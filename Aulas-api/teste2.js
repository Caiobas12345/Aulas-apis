    async function buscarCep(cep) {
        try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }
        const dados = await resposta.json();
        console.log(dados);
        } catch (erro) {
        console.error("Não foi possível buscar o CEP:", erro);
        }
    }