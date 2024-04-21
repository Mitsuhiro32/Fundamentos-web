function changeUserName() {
    let userName = document.querySelector('#userName');
    userName.textContent = "Juan Perez";
}

function removeConnection(elementoRemover) {
    elementoRemover.closest(".card-list-item").remove();
    let elementoNumeroConexiones = document.querySelector('#requestNumber');
    let numConn = Number(elementoNumeroConexiones.textContent);
    numConn--;
    elementoNumeroConexiones.textContent = numConn;
}

function addConnection(elementoAgregar) {
    let connection = elementoAgregar.closest(".card-list-item").querySelector("span:first-child");
    let listaConexiones = document.querySelector('#myConnections');
    listaConexiones.innerHTML += `
        <li class="card-list-item start">
            ${connection.innerHTML}
        </li>`;
    elementoAgregar.closest(".card-list-item").remove();

    let elementoNumeroConexiones = document.querySelector('#requestNumber');
    let numConn = Number(elementoNumeroConexiones.textContent);
    numConn--;
    elementoNumeroConexiones.textContent = numConn;

    let elementoNumeroTotalConexiones = document.querySelector('#totalConnections');
    let numeroTotalConnection = Number(elementoNumeroTotalConexiones.textContent);
    numeroTotalConnection++;
    elementoNumeroTotalConexiones.textContent = numeroTotalConnection;
}