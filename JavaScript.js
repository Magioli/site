function validar_senha(){
	var senha = document.getElementById('senha1').value;
	var senha_nova = document.getElementById('senha2').value;
	var mensagem = "mensagemoriginal";
	if(senha == senha_nova){
		mensagem = "senhas batem";
	}else{
		mensagem = "senha nao batem";
	}
	alert(mensagem);
	//document.getElementById('resultado').color = "r";
	//document.write(mensagem);
}

function receber_nome(){
	var nome = prompt("qual o seu nome?");
	document.write(nome);
}