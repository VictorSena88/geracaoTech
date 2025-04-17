
let nota1 = parseFloat(prompt("digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));
let media = (nota1 + nota2 + nota3) / 3;
alert(`A média é : ${media}`);
if (media >= 7) {
    alert("Aprovado");
}
else if (media >= 5) {
    alert("Recuperação");
} else {
    alert("Reprovado");
}
document.write("<h1>Resultado</h1>");
document.write("<h2>Notas</h2>");
document.write("<ul>");
document.write(`<li>Nota 1:   ${nota1} </li>`);
document.write(`<li>Nota 2:   ${nota2} </li>`);
document.write(`<li>Nota 3:   ${nota3} </li>`);
document.write("</ul>");
document.write("<h2>Média</h2>");
document.write("<p>" + media + "</p>");
document.write("<h2>Resultado</h2>");
if (media >= 7) {
    document.write("<p>Aprovado</p>");
}
else if (media >= 5) {
    document.write("<p>Recuperação</p>");
}
else {
    document.write("<p>Reprovado</p>");
}
document.write("<h2>Mensagem</h2>");
document.write("<p>Obrigado por utilizar nosso sistema de cálculo de média!</p>");