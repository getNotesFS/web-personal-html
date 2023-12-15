// searchWorker.js
onmessage = function(e) {
    const { contenido, query } = e.data;
    const regex = new RegExp(query.toLowerCase(), 'gi');
    let match;
    let resultados = [];
    while ((match = regex.exec(contenido)) !== null) {
        // ... lógica para agregar el fragmento al resultado ...
        resultados.push(/* resultado */);
    }
    postMessage(resultados);
};
