class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvar(){
        let produto = this.lerDados();

        if(this.validaCampos(produto)) {
            this.adicionar(produto);
        }

        this.listaTabela(); 
        this.excluir();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for(let i = 0; 0 < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell(); 
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();
            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nome;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].valor;
            td_id.classList.add('center');
            let imgDelet = document.createElement('img');
            imgDelet.src = "delet.png";
            imgDelet.setAttribute("onclick","produto.deletar("+this.arrayProdutos[i].id +")")
            td_acoes.appendChild(imgDelet);
        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados() {
        let produto = {}
        produto.id = this.id;
        produto.nome = document.getElementById('nome').value;
        produto.nomeProduto = document.getElementById('email').value;
        produto.valor = document.getElementById('valor').value;
        return produto;
    }

    validaCampos(produto) {
        let msg = '';
        if(produto.nome == '') {
            msg += '>>>>>> --- OPS, DIGITE SEU NOME! --- <<<<<< \n\n';
        }

        if(produto.nomeProduto == '') {
            msg += '>>>>>> --- OPS, DIGITE SEU E-MAIL! --- <<<<<< \n\n';
        }

        if(produto.valor == '') {
            msg += '>>>>>> --- OPS, DIGITE SUA SENHA! --- <<<<<< \n\n';
        }

        if(msg != '') {
            alert(msg);
            return false
        } 
        return true;
    }

    excluir() {
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('valor').value = '';
    }

    deletar(id) {
        let tbody = document.getElementById('tbody');
        for(let i = 0; 1 < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
    }
}
var produto = new Produto()