function cotizar() {
    const tipo = document.getElementById('tipo').value;
    const plan = document.getElementById('plan').value;

    const cotizacion = {
        tipo: tipo,
        plan: plan
    };

    fetch('URL_DEL_BACKEND', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cotizacion)
    })
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'cotizacion.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    })
    .catch(error => console.error('Error:', error));
}
