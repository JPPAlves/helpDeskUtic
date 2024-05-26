document.addEventListener('DOMContentLoaded', function() {
    var itemImpressora = document.getElementById('itemImpressora');
    itemImpressora.addEventListener('click', function() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'vbs/exeImpressora.php', true); // Ajuste o caminho do arquivo PHP conforme necessário
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            } else {
                console.log('Erro ao executar o arquivo batch.');
            }
        };
        xhr.send();
    });
});