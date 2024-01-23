const frmContatos = document.getElementById('frmContatos');
const arrContato = [];
const arrTelefone = [];
let tblLinhas = '';
let cor = true;

frmContatos.addEventListener('submit', function(e){
    e.preventDefault();
    
    let contato = document.getElementById('txtContato').value.toUpperCase();
    let ddd = document.getElementById('txtDDD').value;
    let fone = document.getElementById('txtFone').value;
    let linha = '';
    
    if (cor){
        linha += `<tr>`;
        linha += `<td>${contato}</td><td>(${ddd}) ${fone.length < 9 ? fone.substr(0,4)+"-"+fone.substr(4,4) : fone.substr(0,5)+"-"+fone.substr(5,4)}</td><td width="35px"><a href="tel:+55${ddd}${fone}" title="Ligar para ${contato}"><img src="img/tel.png" alt="Icone Telefone"></a></td><td width="35px"><a href="https://wa.me/55${ddd}${fone}" title="Chamar ${contato} no WhatsApp"><img src="img/whats.png" alt="Icone WhatsApp"></a></td>`;
        cor = false;
    }else{
        linha += `<tr>`;
        linha += `<td class="corFundo">${contato}</td><td class="corFundo">(${ddd}) ${fone.length < 9 ? fone.substr(0,4)+"-"+fone.substr(4,4) : fone.substr(0,5)+"-"+fone.substr(5,4)}</td><td class="corFundo" width="35px"><a href="tel:+55${ddd}${fone}" title="Ligar para ${contato}"><img src="img/tel.png" alt="Icone Telefone"></a></td><td class="corFundo" width="35px"><a href="https://wa.me/55${ddd}${fone}" title="Chamar ${contato} no WhatsApp"><img src="img/whats.png" alt="Icone WhatsApp"></a></td>`;
        cor = true;
    }

    linha += `</tr>`;
    
    if (arrTelefone.includes(ddd+fone)){ alert('O Número de telefone já cadastrado!!!'); }
    else{
        tblLinhas += linha; 
        addContato(tblLinhas);

        arrContato.push(contato);
        arrTelefone.push(ddd+fone);
    }
    document.getElementById('txtContato').value = '';
    document.getElementById('txtDDD').value = '';
    document.getElementById('txtFone').value = '';
})

function addContato(strContato){
    document.getElementById('dados').innerHTML = strContato;
}
