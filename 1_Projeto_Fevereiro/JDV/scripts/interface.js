/* Aqui na interface, sera trabalhado a logica de reacao a partir da interacao do usario com o game.
1- Nesta fase inicial, e preciso garantir que o documento htlm seja carregado, ou seja, 
as paginas e aquivos precisam ser vinculadas para garantir a correta comunicacao entre os codigos e comandos.
*/

/*O metodo JavaScript addEventListener() permite configurar funcoes a serem chamadas quando um evento 
especifico acontece,exemplo: quando um usuario clica em um botao. */

/* A funcao do .querySelectorAll vai retornar um objeto Nodelist representando todos os elementos dos
documentos que correspondem ao valor que foi especificado, neste caso "squares", onde a interacao vai ocorrer.*/


document.addEventListener('DOMContentLoaded', ()=> {

    let squares =  document.querySelectorAll(".square");
   
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
    
})
 
function handleClick(event) {
   
   /* o target do evento e o elemento que sofreu a acao*/
    let square = event.target;
    let postion = square.id;
    let symbol = board[postion];
    postion == "reiniciar" ? reiniciaJogo():postion;
    if (handleMove(postion)) {
    
        setTimeout(() => {
            window.alert("O Jogo Acabou! Parabens! " + playerTime + ", voce venceu a partida!");

        },10);
    };
    updateSquares (postion);

}

function updateSquares(postion){
    let square = document.getElementById (postion.toString())
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'>" `;

}


