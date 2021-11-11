const formulario = document.querySelector("#formulario");
const reset = document.querySelector('.resetForm');

reset.addEventListener('click', (e) => {
    formulario.reset();
})

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(formulario);

    const entries = [...formData.entries()];

    const datos = {};

    entries.forEach((dato) => {
        const key = dato[0];
        const value = dato[1];
        if (datos.hasOwnProperty(key)) {
            datos[key] += ` + ${value}`;
        }else {
            datos[key] = value;
        }
    });
    
    const {afectacion, agenda, banda, dupla, metros, observacion, reinstalar, tecnico, trabajo, ot } = datos;

    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth();
    const horaActual = fechaActual.getHours();
    const minutoActual = fechaActual.getMinutes();

    const nota = `${diaActual}.${mesActual} ${horaActual}:${minutoActual} AGENDA ONLINE ${afectacion}: ${tecnico} SOLIC REINSTA ${reinstalar} + ${metros}MTS POR ${trabajo} ${dupla? dupla + ' ' : ''}${observacion ? observacion : ''}.OT: ${ot} AGENDA: ${agenda} BH: ${banda}`;

    await navigator.clipboard.writeText(nota);
});



