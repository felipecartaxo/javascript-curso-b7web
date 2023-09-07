const clicked = () => {
    const currentLi = document.querySelector('li'); /* Retorna o primeiro elemento com a tag 'li' e atribui-o à variável 'currentLi'  */
    
    currentLi.style.backgroundColor = '#00F'; /* Altera o CSS inline da variável 'currentLi'. Note que, no CSS, o nome da propriedade é 'background-color', mas no aqui utilizamos o padrão camelCase*/
    currentLi.style.fontSize = '50px'; /* Além de alterarmos o valor de estilizações já existentes, também é possível criarmos novas estilizações */
};