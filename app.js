function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById
        ("campo-pesquisa").value;

    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags ="";


    if (!campoPesquisa) {
        section.innerHTML = "Campo está vazio"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (dado.titulo.includes(campoPesquisa) || dado.descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
        <div class="item-resultado">
         <h2>
             <a href="#" target="_blank">${dado.titulo}</a>
         </h2>
             <p class="descricao-meta">${dado.descrição}</p>
             <a href=${dado.link} target="_blank">Saiba mais</a>
             </div> 
             `;
        }

    }

    if (!resultados) {
        resultados = "Nada foi encontrado"

    }

        section.innerHTML = resultados

}



