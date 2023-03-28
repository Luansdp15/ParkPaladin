function mostrarform(){
        document.getElementById('rst').style.display = "none";
        document.getElementById('pl1').innerHTML = '<form class="atg"><label for="placa">Insira a placa do modelo Antigo</label><br><input type="text" maxlength="8" id="cba" placeholder=" AAA-0000" name="placa" onblur="limitar()" oninput="apaga2()"><select class="z"></form>';
    
    }
    
    
     
    
    function mostrarform2(){
      document.getElementById('rst').style.display = "none";
      document.getElementById('pl1').innerHTML = '<form class="atg"><label for="placa">Insira a placa do modelo Mercosul</label><br><input type="text" id="abc" pattern="^([A-Z]{3})-([1-9]{4})$" maxlength="7" placeholder=" AAA0A00" name="placa" onblur="limitar2()" oninput="apaga2()" required><select class="z"></form>';
    
    }
      
    
    function mmenuu() {
    const botao = document.getElementById('abmenu');
    const conteudo = document.getElementById('menu2');
    conteudo.classList.toggle("active");
    
    borrar();
    }
    
    
    function mostrarbotao(){
      document.getElementById('b1').innerHTML = '<button onclick="alerta()" class="btt">Fazer nova compra</button>';
      
      document.getElementById('resul').style.display = "block";
    }
    
    function calculo() {
  
        var categoria, hora
        
        categoria = document.getElementById('ct').value
    
        hora = document.getElementById('hr').value
    
        switch (hora) {
            case "1h":
                hora = 1;
                break;
            case "2h":
                hora = 2;
                break;
            case "3h":
                hora = 3;
                break;
        }
    
        switch (categoria) {
            case "subcompacto":
                categoria = 3.50;
                break;
            case "compacto":
                categoria = 4.00;
                break;
            case "hatch":
                categoria = 4.50;
                break;
            case "sedan":
                categoria = 5;
                break;
            case "suv":
                categoria = 6;
                break;
            case "pickup":
                categoria = 7;
                break;
        }
    
        resultado = categoria * hora
        document.querySelector("h2").innerHTML = "você vai pagar R$" + resultado + " reais"
    
        mostrarbotao();
    }
    
    
     
    
    function limitar() {
        const input = document.getElementById("cba");
  const regex = /^([A-Z]{3})-([0-9]{4})$/;
  if (!regex.test(input.value)) {
    alert("Valor inválido! Insira uma placa no formato AAA-0000. O hífen também deve ser inserido, e as letras devem ser maiusculas!");
    document.getElementById('rst').style.display = "none";
    document.getElementById('resul').style.display = "none";
    input.value = '';
  } else {
    document.getElementById('rst').style.display = "block";
  }
  mresto();
    }
    
    function limitar2() {
        const input = document.getElementById("abc");

  const regex = /^([A-Z]{3})([0-9]{1})([A-Z]{1})([0-9]{2})$/;

  if (!regex.test(input.value)) {
    alert("Valor inválido! Insira uma placa no formato AAA0A00. As letras devem ser maiusculas!");
    document.getElementById('rst').style.display = "none";
    document.getElementById('resul').style.display = "none";
    input.value = '';
  } else {
    document.getElementById('rst').style.display = "block";
  }
    }
    
    
  function borrar() {
    
  const blurToggle = document.querySelector('#abmenu');
  const conteudo = document.querySelector('#tudo');

    conteudo.classList.toggle('blur');
  }
  
  
  function alerta() {
    if (confirm("Ao fazer uma nova compra, os dados da compra atual serão apagados. Deseja continuar?")){
      
      document.getElementById('pl1').innerHTML = '';

        document.getElementById('nm_motorista').value = '';
        
        document.querySelector('h2').innerHTML = 'O seu resultado irá aparecer aqui'
        
        document.getElementById('rst').style.display = "none";
        
        document.getElementById('resul').style.display = "none";
        
        document.getElementById('modeloplaca').style.display = "none";
    }
    else {
      console.log("ação cancelada");
    }
  }
  
   function resul() {
  const bto = document.getElementById('bto');
  const conteud = document.getElementById('resul');
    conteud.classList.toggle("vo");
  }
  
 function apaga() {
   document.getElementById('rst').style.display = "none";
   
   document.getElementById('resul').style.display = "none";
   
   document.getElementById('modeloplaca').style.display = "none";
 }
 
 function apaga2() {

   document.getElementById('rst').style.display = "none";

   
   document.getElementById('resul').style.display = "none";
   
 }
 
 function coisarnome() {
   const input = document.getElementById("nm_motorista");
   const regex = /^[A-Za-z\s]{2,20}$/;
   
  if (regex.test(input.value)) {
    var ah = 2; 
    document.getElementById('modeloplaca').style.display = "block";
  } else {
    alert("Por favor, utilize apenas letras no campo nome!");
    
    document.getElementById('nm_motorista').value = '';
  }
}
