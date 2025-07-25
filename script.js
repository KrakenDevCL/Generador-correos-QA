let tituloFinal = '';
let cuerpoParte1 = '';

document.getElementById('emailForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const modulo = document.getElementById('modulo').value.trim();
    const contexto = document.getElementById('contexto').value;
    const modelosRaw = document.getElementById('modelo').value.trim();
    const version = document.getElementById('version').value.trim();

    const modelosArray = modelosRaw
        .split(',')
        .map(m => m.trim())
        .filter(m => m.length > 0);

    const modelosTexto = modelosArray.join(' - ');
    const fraseTaurus =
        modelosArray.length === 1
            ? `del <strong>Taurus ${modelosTexto}</strong>`
            : `de los <strong>Taurus ${modelosTexto}</strong>`;

    tituloFinal = `Entrega Módulo ${modulo} - Taurus ${modelosTexto} (v${version}) a QA`;

    cuerpoParte1 = `Estimados,<br><br>
Junto con saludarles, les informo que se ha realizado la entrega del módulo de <strong>${modulo}</strong> para ${contexto.toLowerCase()} ${fraseTaurus} al equipo de Control de Calidad (QA). A continuación, los detalles relevantes:<br><br>
<strong>Versión:</strong> ${version}<br><br>
IMAGEN ADJUNTA<br><br>
<strong>Repositorio:</strong> SVN DESARROLLO (ya respaldada)<br><br>
IMAGEN ADJUNTA<br><br>
Quedo atento a cualquier consulta que puedan tener durante el proceso de revisión por parte de QA.<br><br>
Saludos,`;

    document.getElementById('correoTitulo').textContent = tituloFinal;
    document.getElementById('correoCuerpo').innerHTML = cuerpoParte1;

    document.getElementById('resultado').classList.remove('d-none');
});
