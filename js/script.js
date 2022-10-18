/*
Abbiamo un array di alimenti.
Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
Consegna:
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati). */

let container = document.querySelector('.container-for');

let title = document.createElement('h1')

title.classList.add('title')

title.innerHTML=`Lista della spesa`;

container.prepend(title)


let alimenti= ['pane','acqua','carne','yogurt','succhi','merendine','carta igenica','patatine'];

for(let i = 0; i< alimenti.length; i++ ){

let li = document.createElement('li')

let lista = document.querySelector('.lista')

li.append(alimenti[i])

lista.append(li)

}

// ----------------------

let subT = document.querySelector('.container-while');

let p = document.createElement('p')

p.append('Per mio figlio devo comprare un sacco di frutta')

subT.prepend(p)

let spesa= ['anguria','melone','pesche','uva','arancie','banane'];

let c = 0;

while(c < spesa.length){
  
  let liW = document.createElement('li')
  
  let listaW = document.querySelector('.list-while')
  
  liW.append(spesa[c])

  listaW.append(liW)

 c++
}


