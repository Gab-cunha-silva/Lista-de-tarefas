export const inputItem =document.getElementById("input-item");
export function criaritemDaLista() {
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);
    return itemDaLista;
}