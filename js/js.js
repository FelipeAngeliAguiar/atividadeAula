//alert("TEESSTTEE")
function tabuada(){
var cont;
cont = 1;
do{
    var num = parseInt(prompt("Digite um nº "));
    if(num <= 0){
        alert("FATAL ERRO!")
    }
}while(num <= 0);
var calc;
var total = [];
for(var x = 0; x<=10; x++){
    calc = num * x
    total[x] = num + "x" + x + "=" + calc+"\n"
}
alert(total)
}
function lerNome(){
    var name = prompt("Digite seu nome: ");
    for(var x = 1; x <= 6; x++){
        alert(x+" - "+name);
    }
}
function media(){
    var name = prompt("Aluno, digite seu nome: ");
    var nota = [];
    var resultado;
    var cont = 1;
    while(cont <= 3){
    nota[cont] = parseInt(prompt("Digite sua "+cont+"ª nota: "))
    if(nota[cont]>10 || nota[cont]<0){
        alert("Número ínvalido, Tente novamente")
        cont = cont + 0
    }else{
        cont++
    }
    }
    var media = (nota[1]+nota[2]+nota[3])/3;
    if(media<=10 && media>=9){
        resultado = "A"
    }else if(media<=8.9 && media>=7){
        resultado = "B"
    }else if(media<=6.9 && media>=5){
        resultado = "C"
    }else if(media<=4.9 && media>=0){
        resultado = "D"
    }

    alert("Boletim de "+name+"\n1ª nota: "+nota[1]+"\n2ª nota: "+nota[2]+"\n3ª nota: "+nota[3]+
    "\nMédia: "+media.toFixed(1)+"\nResultado: "+resultado);
    return media;
}
function pedro(){
    var pedro = 1.5
    var paulo = 1.1
    var idade = 0;
    while(pedro>paulo){
        pedro += 0.02
        paulo += 0.03
        idade++
    }
    alert("Pedro\nIdade: "+idade+"\nAltura: "+pedro.toFixed(2)+"m\nPaulo\nIdade: "+idade+
    "\nAltura: "+paulo.toFixed(2)+"m");
}
function produto(){
    var sn = 1;
    do{
        var escolha = parseInt(prompt("Escolha um dos produtos seguindo a tabela abaixo:"+
                                     "\n1 - Leite - R$ 8,70"+
                                     "\n2 - Bolacha - R$ 10,99"+
                                     "\n3 - Biscoito - R$ 12,43"+
                                     "\n4 - Café - R$ 30,21"))
        if(escolha > 4 || escolha < 1){
            alert("Código Ínvalido")
            sn = 1
        }else{
        sn = 0
        }
    }while(sn == 1)
    do{
    var quantidade = parseInt(prompt("Digite a quantidade agora: "));
    if(quantidade <= 0){
        alert("Quantidade menor que 0, tente novamente");
        sn = 1
    }else{
        sn = 0
    }
    }while(sn == 1)
    var preco;
    var text;
    if(escolha == 1){
        preco = 8.7 * quantidade;
        text = "Leite"
    }else if(escolha == 2){
        preco = 10.99 * quantidade;
        text = "Bolacha"
    }else if(escolha == 3){
        preco = 12.43 * quantidade;
        text = "Biscoito"
    }else{
        preco = 30.21 * quantidade;
        text = "Café"
    }
    var juro = preco * 1.12;
    var desct = preco * 0.92;

    alert("Nota da Compra\nProduto : "+text+"\nQuantidade : "+quantidade+"\nPreço total: R$"+preco.toFixed(2)+
          "\nPreço c/ Juros : R$"+juro.toFixed(2)+"\nPreço c/ Desconto: R$"+desct.toFixed(2));
}

function salario(){
    var salario = [];
    for(var cont = 1; cont < 3; cont++){
        salario[cont] = parseFloat(prompt("Digite seu "+cont+"ª salário:"));
    }
    media = (salario[1] + salario[2]) / 2;
    alert("Seu 1ª salário é RS"+salario[1]+
        "\nSeu 2ª salário é R$"+salario[2]+
        "\nMédia salarial é R$"+media)
}

function idade(){
    var sn = 1;
    var resposta;
    do{
        var idade = parseInt(prompt("Digite sua idade: "));
        if(idade > 100 || idade < 0){
            alert("Idade ínvalida, tente novamente");
            sn = 1;
        }else{
            sn = 0;
        }
    }while(sn==1);
    if(idade > 18){
        resposta = "Maior de Idade"
    }else{
        resposta = "Menor de Idade"
    }
    alert("Sua idade é "+idade+"\nEntão você é "+resposta);
}
function escola(){
    var escola = parseInt(prompt("Qual é valor da mensalidade da escola: "));
    var aluno = parseInt(prompt("Digite valor da renda familiar do aluno: "));
    var valPagar;
    if(escola >= aluno){
        valPagar = escola * 0.50;
        
    }else{
        valPagar = escola
    }
    var porc = (valPagar * 100) / aluno;
    alert("Valor da mensalidade da escola : R$"+escola+
        "\nValor da renda familiar do aluno: R$"+aluno+
        "\nVocê ganhou desconto de R$"+valPagar+
        "\nVai afetar sua renda em "+porc.toFixed(2)+"%");
}
function peso(){
    var sn;
    var peso;
    var text;
    do{
    var sexo = parseInt(prompt("Selecione seu sexo: \n1 - Homem\n2 - Mulher"));
    if(sexo > 3 || sexo < 0){
        alert("Número Ínvalido")
        sn = 1
    }else{
        sn = 0
    }
    }while(sn == 1)
    do{
        var altura = parseFloat(prompt("Digite sua altura"));
        if(altura > 3 || altura < 0){
            alert("Altura Ínvalida")
            sn = 1
        }else{
            sn = 0
        }
        }while(sn == 1)
    if( sexo == 1 ){
        peso = (72.7 * altura) - 58;
        text = "Homem"
    }else{
        peso = (62.1 * altura) - 44.7
        text = "Mulher"
    }
    alert("Sexo : "+text+"\nAltura : "+altura+"m\nPeso ideal : "+peso.toFixed(2)+"Kg")
}
function quantIdade(){
    var sn = 1;
    var maior = 0;
    var menor = 0;
    var idade = [];
    var cont = 1;
    do{
    do{
        idade[cont] = parseInt(prompt(cont+" - Digite sua idade: "));
        if(idade[cont] > 100 || idade[cont] < 0){
            alert("Idade ínvalida, tente novamente");
            sn = 1;
        }else{
            sn = 0;
        }
    }while(sn==1);
    if(idade[cont] > 18){
        maior++
    }else{
        menor++
    }
    cont++
}while(cont <= 10)
    
    alert("De 10 pessoas\n"+maior+" são maior de idade\n"+menor+" são menor de idade");
}
function testeTriango(lado1,lado2,lado3){
    var resposta;
    if(lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
        resposta = "Escaleno"
    }else if(lado1 == lado2 && lado2 == lado3 && lado1 == lado3){
        resposta = "Equilátero"
    }else{
        resposta = "Isósceles"
    }
    return resposta
}

function triangulo(){
    var lado = []
    var bah;
    var sn = 1;
    do{
    for(var x = 1; x < 4; x++){
        lado[x] = parseInt(prompt("Digite o "+x+"ª lado do triângulo: "));
    }
    if((lado[1]+lado[2]) > lado[3] && (lado[2]+lado[3]) > lado[1] && (lado[3]+lado[1]) > lado[2]){
        bah = testeTriango(lado[1],lado[2],lado[3])
        sn = 0;
    }
    else{
        alert("Números ínvalidos, tente novamente")
        sn = 1;
    }
}while(sn == 1)
    alert("1ªlado: "+lado[1]+
        "\n3ªlado: "+lado[2]+
        "\n2ªlado: "+lado[3]+
        "\nEle é um : "+bah)
}
function produto2(){
    var produto = prompt("Digite o nome do Produto: ");
    var valor = parseFloat(prompt("Digite o Valor do Produto: "));
    var jurosI = parseFloat(prompt("Digite o valor de juros que será cobrado mensalmente: "));
    var meses = parseInt(prompt("E quantos meses irá pagar?"));
    var total;
    var juros = jurosI
    juros /= 100;
    juros = juros * meses;
    total = valor + (valor * juros);
    alert("Notinha\n-------------------\nProduto :"+produto+
        "\nValor: R$"+valor+
        "\nJuros Mensal: "+jurosI+"%"+
        "\nMeses a pagar: "+meses+
        "\nJuros Total: R$"+(valor * juros)+
        "\nValor total a pagar: R$"+total);
}

function juros(){
    var valor = parseFloat(prompt("Digite um valor: "));
    var juros = parseInt(prompt("Digite os valor dos juros que será combrado mensalmente"))
    alert("Valor a pagar R$"+valor+
        "\nCom juros de "+juros+"%"+
        "\nEm 1 ano você pagara: R$"+(valor+(valor*(juros/100))* 12)+
        "\nEm 5 ano você pagara: R$"+(valor+(valor*(juros/100))* 60)+
        "\nEm 10 ano você pagara: R$"+(valor+(valor*(juros/100))* 120))
}
function med(nome){
    var nota = [];
    var resultado;
    var cont = 1;
    while(cont <= 3){
    nota[cont] = parseInt(prompt("Digite sua "+cont+"ª nota: "))
    if(nota[cont]>10 || nota[cont]<0){
        alert("Número ínvalido, Tente novamente")
        cont = cont + 0
    }else{
        cont++
    }
    }
    var media = (nota[1]+nota[2]+nota[3])/3;
    if(media<=10 && media>=9){
        resultado = "A"
    }else if(media<=8.9 && media>=7){
        resultado = "B"
    }else if(media<=6.9 && media>=5){
        resultado = "C"
    }else if(media<=4.9 && media>=0){
        resultado = "D"
    }

    alert("Boletim de "+nome+"\n1ª nota: "+nota[1]+"\n2ª nota: "+nota[2]+"\n3ª nota: "+nota[3]+
    "\nMédia: "+media.toFixed(1)+"\nResultado: "+resultado);
    return media;
}
function notas2(){
    var name1 = prompt("Digite seu nome: ");
    var aluno1 = med(name1)
    var name2 = prompt("Digite seu nome: ");
    var aluno2 = med(name2)
    if(aluno1 > aluno2){
        alert("Então o "+name1+"("+aluno1.toFixed(2)+") foi melhor que o "+name2+"("+aluno2.toFixed(2)+")")
    }else{
        alert("Então o "+name2+"("+aluno2.toFixed(2)+") foi melhor que o "+name1+"("+aluno1.toFixed(2)+")")
    }
}
//Testando se o arquivo externo está funcionando: Teste e depois comente o alert

//Função para Somar:
function somar(){
	//Declarando as variáveis:
	var valor1;
	var valor2;
	var resultado;
	//Atribui valores: ENTRADA DE DADOS
	valor1 = window.prompt('Digite um número: ');
	valor2 = window.prompt('Digite outro número: ');
	//Processamento - cálculo:
	//1º Transformando em número parseInt()   parseFloat() - float ou double
	valor1 = parseFloat(valor1);
	valor2 = parseFloat(valor2)
	//2º Calculamos:
	resultado =  valor1 + valor2;
	//Mostrando dados na tela: SAÍDA DE DADOS
	alert(resultado);
}
//Função para Subtrair:
function subtrair(){
	//Declarando as variáveis:
	var valor1;
	var valor2;
	var resultado;
	//Atribui valores: ENTRADA DE DADOS
	valor1 = window.prompt('Digite um número: ');
	valor2 = window.prompt('Digite outro número: ');
	//Processamento - cálculo:
	//1º Transformando em número parseInt()   parseFloat() - float ou double
	valor1 = parseInt(valor1);
	valor2 = parseInt(valor2)
	//2º Calculamos:
	resultado =  valor1 - valor2;
	//Mostrando dados na tela: SAÍDA DE DADOS
	alert("Subtração: "+resultado);
}
//Função para multiplicar:
function multiplicar(){
	//Declarando as variáveis:
	var valor1;
	var valor2;
	var resultado;
	//Atribui valores: ENTRADA DE DADOS
	valor1 = window.prompt('Digite um número: ');
	valor2 = window.prompt('Digite outro número: ');
	//Processamento - cálculo:
	//parseInt()   parseFloat() - float ou double
	resultado = parseInt(valor1) * parseInt(valor2);
	//Mostrando dados na tela: SAÍDA DE DADOS
	alert(valor1+ " multiplicado por "+valor2+ " resulta em " +resultado);
}
//Função para dividir:
function dividir(){
	//Declarando as variáveis:
	var valor1;
	var valor2;
	var resultado;
	//Atribui valores: ENTRADA DE DADOS
	valor1 = window.prompt('Digite um número: ');
	valor2 = window.prompt('Digite outro número: ');
	//Processamento - cálculo:
	//parseInt()   parseFloat() - float ou double
	resultado = parseInt(valor1) / parseInt(valor2);
	//Mostrando dados na tela: SAÍDA DE DADOS
	alert(valor1+ " / "+valor2+ " = " +resultado);
}
//Função para ver Resto da divisão:
function verificarResto(){
	//Declarando as variáveis:
	var valor1;
	var valor2;
	var resultado;
	//Atribui valores: ENTRADA DE DADOS
	valor1 = window.prompt('Digite um número: ');
	valor2 = window.prompt('Digite outro número: ');
	//Processamento - cálculo:
	//parseInt()   parseFloat() - float ou double
	resultado = parseInt(valor1) % parseInt(valor2);
	//Mostrando dados na tela: SAÍDA DE DADOS
	alert("O resto da divisão do nº " +valor1+ " pelo nº "+valor2+ " resulta em " +resultado);
}

/* ================ATIVIDADES: =========================*/
//Exemplo do exercício 01:
function exercicio1(){
	//Declarando as variáveis:
	var nomeProduto;
	var quantidade;
	var valor;
	var valorPagar;
	var valorComJuros;
	//Atribui valores: ENTRADA DE DADOS
	nomeProduto = window.prompt('Digite o nome do produto: ');
	quantidade = window.prompt('Digite a quantidade: ');
	valor = window.prompt('Digite o valor unitário: ');
	//Processamento - cálculo:
	//1º Transformando em número parseInt()   parseFloat() - float ou double
	quantidade = parseInt(quantidade);
	valor = parseFloat(valor)
	//2º Calculamos:
	valorPagar = quantidade * valor
	valorComJuros = valorPagar * 1.12;
	//Mostrando dados na tela: SAÍDA DE DADOS
	alert("RESPOSTAS: \nProduto: "+nomeProduto+
			"\nQuantidade: "+quantidade+ 
			"\nValor: R$ "+valor+
			"\nValor à pagar: R$ " +valorPagar+
			"\nValor com 12% de juros: R$ " +valorComJuros);
}
function exercicio2(){
    var nome = window.prompt("Digite seu nome:");
    var anoN = window.parseInt(prompt("Digite ano que você nasceu:"));
    var anoA = new Date();
    var idade = anoA.getFullYear() - anoN;
    alert("Sua idade é "+idade);
}
function exercicio3(){
    var nome = window.prompt("Digite seu nome:");
    var salario = window.parseFloat(prompt("Digite seu salário:"));
    var aumento = salario * 1.08;
    alert(nome+" seu salário é de R$"+salario+" e com 8% de aumento fica com R$"+aumento);
}
function exercicio4(){
    var raio = parseFloat(window.prompt("Digite um raio de um círculo"));
    var area = Math.PI * Math.pow(raio, 2);
    var perimetro = 2 * Math.PI * area;
    alert("Seu circulo com o raio de "+raio+" m\nTem area igual a "+area+" m\ne Tem perimetro igual a "+perimetro);
}
function exercicio5(){
    var nome = window.prompt("Digite seu nome: ");
    var nota1 = window.parseFloat(prompt("Digite sua primeira nota: "));
    var nota2 = window.parseFloat(prompt("Digite sua segunda nota:"));
    var media = (nota1+nota2)/2;
    if(media >=6 ){
        alert("Nome: "+nome+
        "\nPrimeira Nota : "+nota1+
        "\nSegunda Nota : "+nota2+
        "\nMédia : "+media+
        "\nVocê foi Aprovado")
    }else{
        alert("Nome: "+nome+
        "\nPrimeira Nota : "+nota1+
        "\nSegunda Nota : "+nota2+
        "\nMédia : "+media+
        "\nVocê foi Reprovado");
    }
}
function imc(){
	var nome = window.prompt("Digite seu nome: ");
	var altura = window.parseFloat(prompt("Digite sua altura: "));
	var peso = window.parseFloat(prompt("Digite seu peso em Kg: "));
    var imc = Math.round(peso / Math.pow(altura,2));
	var resposta
	
	if(imc <= 17){
		resposta = "Muito Abaixo do Peso Ideal";
	}else if(imc >= 17 && imc <= 18.49){
		resposta= "Abaixo do Peso";
	}else if(imc >= 18.5 && imc <= 24.99){
		resposta= "Peso Normal";
	}else if(imc >= 25 && imc <= 29.99){
		resposta="Acima do Peso";
	}else if(imc >= 30 && imc <= 34.99){
		resposta="Obesidade Grau 1";
	}else if(imc >= 35 && imc <= 39.99){
	    resposta= "Obesidade Grau 2";
	}else{
		resposta= "Obesidade Grau 3 (mórbida)";
	}
	alert(nome+" seu IMC é de "+imc+" e o resultado "+resposta);
}
function exemplo1(){
	var numero = parseInt(prompt("Digite um número:"))
	if((numero%2) == 1){
		resposta = "Ímpar";
	}else{
		resposta ="Par";
	}
	alert("O nº "+numero+" é " +resposta+".");
}
function exemplo2(){
	var produto = parseInt(prompt("Escolha um dos produtos abaixo: "+
								  "\n1-Bala -------- R$ 0,20"+
								  "\n2-Bombom ------ R$ 1,20"+
								  "\n3-Bis --------- R$ 2,99"+
								  "\n4-Bolacha ----- R$ 3,20"));
	var quantidade = parseInt(prompt("Digite a quantidade: "));
	var total;
	var texto;
	switch(produto){
		case 1:
			total = quantidade * 0.20;
			texto = "Bala";
		break;
		case 2:
			total = quantidade * 1.20;
			texto = "Bom-Bom";
		break;
		case 3:
			total = quantidade * 2.99;
			texto = "Bis";
		break;
		default:
			total = quantidade * 3.20;
			texto = "Bolacha"
	}		
	alert("Produto: "+texto+"\nQuantidade: "+quantidade+"\nValor total: "+total);
}
function exemplo3(){
	do{
		var idade = prompt("Digite sua idade: ");
		if(idade<0){
			alert("ERRO!"+
			"\nIdade ínvalida");
		}
	}while(idade<0)
	var resposta;
	if(idade<=10){
		resposta = "Criança";
	}else if(idade>=11 && idade<=13){
		resposta = "Pré-adolescente";
	}else if(idade>=14 && idade<=17){
		resposta = "Adolescente";
	}else if(idade>=18 && idade<=64){
		resposta = "Adulto";
	}else{
		resposta = "Idoso";
	}
	alert("Sua idade é "+idade+
		"\nFaixa Etária: "+resposta);
}
function condicional1(){
	var salario = parseFloat(prompt("Digite seu salário: "));
	var gratificacao = salario * 0.05;
	var imposto = salario * 0.07;
	var final = salario + gratificacao - imposto;
	alert("Seu sálario base é R$" +salario+
	"\nA Gratificação é R$" +Math.round(gratificacao)+
	"\nO Imposto é R$" +Math.round(imposto)+
	"\nSalário Final é R$"+Math.round(final));
}
function condicional2(){
	var nome = prompt("Digite seu nome: ")
	var nota = [];
	var peso = [];
	for(var x = 1; x <=2; x++){
		var n = parseInt(prompt("Digite sua "+x+"º nota:"))
		nota.push(n);
		n = parseInt(prompt("Digite o peso da "+x+"º nota: "));
		peso.push(n);
	}
	var media = (nota[0] * peso[0] + nota[1] * peso[1])/(peso[0]+peso[1]);
	if(media >= 7){
		var resposta = "Aprovado"
	}else
	 	resposta = "Reprovado"
	alert(nome+
		"\n1° nota "+nota[0]+" com peso "+peso[0]+
		"\n2° nota "+nota[1]+" com peso "+peso[1]+
		"\nSua média ponderada seria "+media+
		"\nE você foi "+resposta)
}
function condicional3(){
	var codigo = parseInt(prompt("Escolha um dos códigos abaixo: "+
								"\n1    GNV                         R$2,10"+
								"\n2    Etanol                      R$2,98"+
								"\n3    Gasolina Comum     R$4,00"+
								"\n4    Gasolina Aditivada   R$4,40"))
	var quantidade = parseInt(prompt("Digite a quantidade que você gostaria: "));
	var total;
	var produto;
	switch(codigo){
		case 1:
		total = 2.10 * quantidade;
		produto = "GNV"
		break;
		case 2:
		total = 2.98 * quantidade;
		produto = "Etanol"
		break;
		case 1:
		total = 4.00 * quantidade;
		produto = "Gasolina Comum"
		break;
		default:
			total = 4.40 * quantidado
			produto = "Gasolina Aditivada"
	}
	alert("Cliente você escolheu a opção "+produto+
		"\nE desejou "+quantidade+" L"+
		"\nE o total ficou R$"+total)
}
function condicional4(){

	var nome = prompt("Digite seu nome: ");
do{
	var altura = parseFloat(prompt("Digite sua altura: "));
	if(altura <=0.54 || altura >= 2.50){
		alert("Altura ínvalida, Tente novamente")
	}else{

	}
}while(altura <=0.54 || altura >= 2.50);
do{
	var peso = parseFloat(prompt("Digite seu peso em Kg: "));
	if(peso <=0 || peso >= 700){
		alert("Peso ínvalida, Tente novamente")
	}else{
		
	}
}while(peso <=0 || peso >= 700);
    var imc = Math.round(peso / Math.pow(altura,2));
	var resposta
	
	if(imc <= 17){
		resposta = "Muito Abaixo do Peso Ideal";
	}else if(imc >= 17 && imc <= 18.49){
		resposta= "Abaixo do Peso";
	}else if(imc >= 18.5 && imc <= 24.99){
		resposta= "Peso Normal";
	}else if(imc >= 25 && imc <= 29.99){
		resposta="Acima do Peso";
	}else if(imc >= 30 && imc <= 34.99){
		resposta="Obesidade Grau 1";
	}else if(imc >= 35 && imc <= 39.99){
	    resposta= "Obesidade Grau 2";
	}else{
		resposta= "Obesidade Grau 3 (mórbida)";
	}
	alert(nome+
		"\nSua altura é de "+altura+" m"+
		"\nSeu peso é de "+peso+" Kg"+
		"\nSeu IMC é de "+imc+" e o resultado é "+resposta);
}
function calcIMC(peso, altura){
	var imc = Math.round(peso / Math.pow(altura,2));
	return imc;
}
function respostaIMC(imc){
	if(imc <= 17){
		resposta = "Muito Abaixo do Peso Ideal";
	}else if(imc >= 17 && imc <= 18.49){
		resposta= "Abaixo do Peso";
	}else if(imc >= 18.5 && imc <= 24.99){
		resposta= "Peso Normal";
	}else if(imc >= 25 && imc <= 29.99){
		resposta="Acima do Peso";
	}else if(imc >= 30 && imc <= 34.99){
		resposta="Obesidade Grau 1";
	}else if(imc >= 35 && imc <= 39.99){
	    resposta= "Obesidade Grau 2";
	}else{
		resposta= "Obesidade Grau 3 (mórbida)";
	}
	return resposta;
}
function condicional5(){
	var nome = prompt("Digite seu nome: ");
	var salario = parseFloat(prompt("Digite seu sálario: "));
	var total;
	var aumento;
	if(salario <= 1500){
		aumento = salario * 0.15;
		total = salario + aumento;
	}else if(salario >=1501 && salario <= 3000){
		aumento = salario * 0.10;
		total = salario + aumento;
	}else if(salario >=3001 && salario <= 4500){
		aumento = salario * 0.08;
		total = salario + aumento;
	}else if(salario >=4501 && salario <= 5800){
		aumento = salario * 0.05;
		total = salario + aumento;
	}else{
		aumento = salario * 0;
		total = salario + aumento;
	}
	alert(nome+
		"\nSeu sálario é de R$"+salario+
		"\nE recebeu um aumento de R$"+Math.round(aumento)+
		"\nE ficou com um total de R$"+Math.round(total)+" de salário")
}
function condicional6(){
	var n = parseInt(prompt("Digite um número que eu irei dizer qual mês ele equivale: "))
	var mes
	switch(n){
		case 1:
			mes = "Janeiro";
		break;
		case 2:
			mes = "Fevereiro";
		break;
		case 3:
			mes = "Março";
		break;
		case 4:
			mes = "Abril";
		break;
		case 5:
			mes = "Maio";
		break;
		case 6:
			mes = "Junho";
		break;
		case 7:
			mes = "Julho";
		break;
		case 8:
			mes = "Agosto";
		break;
		case 9:
			mes = "Setembro";
		break;
		case 10:
			mes = "Outubro";
		break;
		case 11:
			mes = "Novembro";
		break;
		case 12:
			mes = "Dezembro";
		break;
		default:
			mes = "Ínvalido"
	}
	alert("Seu número foi : "+n+
		"\nE equivale ao mês de "+mes);
}
function testarTrabalho(){
    
	var nome = prompt("Digite seu nome: ");
	var altura = parseFloat(prompt("Digite sua altura: "));
	var peso = parseFloat(prompt("Digite seu peso: "));
	do{
	var diaN = parseInt(prompt("Digite seu dia de nascimento: "));
	var mesN = parseInt(prompt("Digite seu mês de nascimento: "));
	var anoN = parseInt(prompt("Digite seu ano de nascimento: "));
	var signo;
	var idade;
	var estacao;
	var estacaoA;
	var dataAtual = new Date();
    var diaA = dataAtual.getDate();
    var mesA = dataAtual.getMonth() + 1;
    var anoA = dataAtual.getFullYear();
	var imc = calcIMC(peso, altura);
	var resposta = respostaIMC(imc);
	if (mesA < mesN || (mesN == mesA && diaA < diaN)) {
	  idade = anoA - anoN - 1;
	} else {
	  idade = anoA - anoN;
	}
  
	if (
	  (mesN == 3 && diaN >= 21 && diaN <= 31) ||
	  (mesN == 4 && diaN >= 1 && diaN <= 19)
	) {
	  signo = "Áries";
	} else if (
	  (mesN == 4 && diaN >= 20 && diaN <= 30) ||
	  (mesN == 5 && diaN >= 1 && diaN <= 20)
	) {
	  signo = "Touro";
	} else if (
	  (mesN == 5 && diaN >= 21 && diaN <= 31) ||
	  (mesN == 6 && diaN >= 1 && diaN <= 20)
	) {
	  signo = "Gêmeos";
	} else if (
	  (mesN == 6 && diaN >= 21 && diaN <= 30) ||
	  (mesN == 7 && diaN >= 1 && diaN <= 22)
	) {
	  signo = "Câncer";
	} else if (
	  (mesN == 7 && diaN >= 23 && diaN <= 31) ||
	  (mesN == 8 && diaN >= 1 && diaN <= 22)
	) {
	  signo = "Leão";
	} else if (
	  (mesN == 8 && diaN >= 23 && diaN <= 31) ||
	  (mesN == 9 && diaN >= 1 && diaN <= 22)
	) {
	  signo = "Virgem";
	} else if (
	  (mesN == 9 && diaN >= 23 && diaN <= 30) ||
	  (mesN == 10 && diaN >= 1 && diaN <= 22)
	) {
	  signo = "Libra";
	} else if (
	  (mesN == 10 && diaN >= 23 && diaN <= 31) ||
	  (mesN == 11 && diaN >= 1 && diaN <= 21)
	) {
	  signo = "Escorpião";
	} else if (
	  (mesN == 11 && diaN >= 22 && diaN <= 30) ||
	  (mesN == 12 && diaN >= 1 && diaN <= 20)
	) {
	  signo = "Sagitário";
	} else if (
	  (mesN == 12 && diaN >= 21 && diaN <= 31) ||
	  (mesN == 1 && diaN >= 1 && diaN <= 19)
	) {
	  signo = "Capricórnio";
	} else if (
	  (mesN == 1 && diaN >= 20 && diaN <= 31) ||
	  (mesN == 2 && diaN >= 1 && diaN <= 17)
	) {
	  signo = "Aquário";
	} else {
	  signo = "Peixes";
	}
  
	if (
	  mesN == 12 && diaN >= 21 && diaN <= 31 ||
	  mesN == 1 && diaN >= 1 && diaN <= 31 ||
	  mesN == 2 && diaN >= 1 && diaN <= 29 ||
	  mesN == 3 && diaN >= 1 && diaN <= 20
	) {
	  estacao = "o Verão!";
	} else if (
	  mesN == 3 && diaN >= 20 && diaN <= 31 ||
	  mesN == 4 && diaN >= 1 && diaN <= 30 ||
	  mesN == 5 && diaN >= 1 && diaN <= 31 ||
	  mesN == 6 && diaN >= 1 && diaN <= 20
	) {
	  estacao = "o Outono!";
	} else if (
	  mesN == 6 && diaN >= 21 && diaN <= 30 ||
	  mesN == 7 && diaN >= 1 && diaN <= 31 ||
	  mesN == 8 && diaN >= 1 && diaN <= 31 ||
	  mesN == 9 && diaN >= 1 && diaN <= 22
	) {
	  estacao = "o Inverno!";
	} else {
	  estacao = "a Primavera!";
	}
    if (
		mesA == 12 && diaA >= 21 && diaA <= 31 ||
		mesA == 1 && diaA >= 1 && diaA <= 31 ||
		mesA == 2 && diaA >= 1 && diaA <= 29 ||
		mesA == 3 && diaA >= 1 && diaA <= 20
	  ) {
		estacaoA = "o Verão!";
	  } else if (
		mesA == 3 && diaA >= 20 && diaA <= 31 ||
		mesA == 4 && diaA >= 1 && diaA <= 30 ||
		mesA == 5 && diaA >= 1 && diaA <= 31 ||
		mesA == 6 && diaA >= 1 && diaA <= 20
	  ) {
		estacaoA = "o Outono!";
	  } else if (
		mesA == 6 && diaA >= 21 && diaA <= 30 ||
		mesA == 7 && diaA >= 1 && diaA <= 31 ||
		mesA == 8 && diaA >= 1 && diaA <= 31 ||
		mesA == 9 && diaA >= 1 && diaA <= 22
	  ) {
		estacaoA = "o Inverno!";
	  } else {
		estacaoA = "a Primavera!";
	  }
	if (mesN < 1 || mesN > 12) {
	  alert("ERRO! Este mês não existe.");
	} else if (diaN < 1 || diaN > 31) {
	  alert("ERRO! Este dia não existe.");
	} else if (anoN > anoA || anoN < 0) {
	  alert("ERRO! Este ano não existe.");
	} else if ((mesN == 4 || mesN == 6 || mesN == 9 || mesN == 11) && diaN == 31) {
	  alert("ERRO! Este mês não possui 31 dias.");
	} else if (diaN == 29 && mesN == 2 && anoN % 4 != 0) {
	  alert("ERRO! Este ano não é bissexto.");
	} else if (mesN == 2 && diaN > 29) {
	  alert("ERRO! Este dia é inválido para este mês.");
	} else if ((diaN > diaA && anoN >= anoA) || (mesN > mesA && anoN >= anoA)) {
	  alert("ERRO! Esta data é inválida.");
	} else if (idade > 150) {
	  alert("ERRO! Impossível ter mais que 150 anos.");
	} else {
	  alert("\n -Nome: " + nome +
	  		"\n -Data de Nascimento: " + diaN + "/" + mesN + "/" + anoN+
	  "\n -Data Atual: " + diaA + "/" + mesA + "/" + anoA+
	  "\n -Você tem " + idade + " anos;"+
	  "\n -Você é do signo de " + signo + ";"+
	  "\n -Você nasceu durante " + estacao+
	  "\n -A Estação que estamos é a "+ estacaoA+
	  "\n -Seu IMC é de "+imc+
	  "\n -E o resultado final é "+resposta);
	}
  
	if (diaN == diaA && mesN == mesA && anoN < anoA) {
	  alert("\nParabéns! Hoje é o seu aniversário.");
	}
  
	if (diaN == diaA && mesN == mesA && anoN == anoA) {
	  alert("\nParabéns! Bem-vindo à vida!");
	}
} while (
	mesN < 1 || mesN > 12 ||
	diaN < 1 || diaN > 31 ||
	anoN > anoA || anoN < 0 ||
	(mesN == 4 || mesN == 6 || mesN == 9 || mesN == 11) && diaN == 31 ||
	diaN == 29 && mesN == 2 && anoN % 4 != 0 ||
	mesN == 2 && diaN > 29 ||
	(diaN > diaA && anoN >= anoA) || (mesN > mesA && anoN >= anoA) ||
	idade > 150
  );
  }

  function atecem(){
      var idade = parseInt(prompt("Digite quantos anos você tem: "));
      var dataAtual = new Date();
      var anoA = dataAtual.getFullYear();
      for (var x = idade; x<101; x++){
        alert("Em "+anoA+" você terá "+idade+" anos");
        anoA++
        idade++
      }
  }


  function corrida(){
    var pista = parseFloat(prompt("Digite o tamanho da pista: "));
    var carro1 = parseFloat(prompt("Qual a velocidade desse carro em Kmh: "));
    var vel1 = carro1
    var carro2 = parseFloat(prompt("Qual a velocidade desse carro em Kmh: "));
    var vel2 = carro2
    var tempo = 0;
    do{
        if(carro1 > carro2){
            alert("1ª lugar Carro 1 :"+carro1.toFixed(2)+"Km\n2ª lugar Carro 2 : "+carro2.toFixed(2)+"km"+
            "\n------------------\nTempo : "+tempo+"h\nFalta para acabar a corrida: "+(carro1 - pista)+"Km");
        }else{
            alert("1ª lugar Carro 2 :"+carro2.toFixed(2)+"Km\n2ª lugar Carro 1 : "+carro1.toFixed(2)+"Km"+
            "\n------------------\nTempo : "+tempo+"h\nFalta para acabar a corrida: "+(carro2 - pista)+"Km");
        }
        carro1 += vel1
        carro2 += vel2
        tempo++
    }while(carro1 < pista && carro2 < pista);
    if(carro1==carro2){
        alert("Deu empate")
    }else if(carro2>carro1){
        alert("Carro 2 ganhou a corrida em 1º lugar")
    }else{
        alert("Carro 1 ganhou a corrida em 1º lugar")
    }
  }