document.body.style.textAlign= 'center';

const h1=document.createElement('h1');
document.body.append(h1);
h1.innerText= 'Uppgift 1';


const h3=document.createElement('h3');
document.body.append(h3);
h3.innerText= 'Här är min första uppgift som är gjort med JavaScript!';



const numberArray = 
['Rad 1', 'Rad 2', 'Rad 3' , 'Rad 4' , 'Rad 5']


for( let i=0; i<numberArray.length; i++){
    let p = document.createElement('p');
    document.body.append(p);
    p.innerText = numberArray[i];
    p.style.backgroundColor= `hsl(${105+(i*25)}, 70%, 80%)`;
    p.style.margin= 'auto';
    p.style.width=  ' 600px';
    p.style.border = `${4*i}px solid white`;
    p.style.fontSize =`${10+(i*7)}px`; 
    p.style.color= '#5161FF';
    p.style.fontWeight= 'bold';
  
}

let ul=document.createElement('ul');
document.body.append(ul);

// Denhär for-loopen har inte en Array. Detta är mest för att jag ska öva och visa på att jag kan lösa uppgiften på olika sätt.
for(i=0; i<10; i++){
    let firstLi=document.createElement('li');
    ul.appendChild(firstLi);
    firstLi.innerText= `${i}`;
    firstLi.style=' margin:auto; border-left:solid 7px #999bdb; border-right:solid 7px #999bdb; width:30px; font-size:10px; position:relative; top:41px; left:-170px; padding-top:1px;  text-align:left; list-style-type:none';

    if(i===4){
        firstLi.style.backgroundColor= `hsl(238,48%,73%)`;
        firstLi.style.color= 'white';
    }

    else if(i===0){
        firstLi.style.borderTop='7px solid #999bdb';
        firstLi.style.backgroundColor= 'black';
        firstLi.style.color= 'white';
    }

    else if(i===9){
        firstLi.style.borderBottom='solid 7px #999bdb';
    }

    else if(i % 2 === 0){
        firstLi.style.backgroundColor= 'black';
        firstLi.style.color= 'white';
       
        } 

    else{
        firstLi.style.backgroundColor= 'white';
    }

    ul.appendChild(firstLi);
}

let numberNumber2= 
['9' , '8' , '7' , '6' , '5' , '4' , '3' , '2' , '1' , '0'];

for(i=0; i<numberNumber2.length; i++){
    let secondLi=document.createElement('li');
    ul.appendChild(secondLi);
    secondLi.innerText= `${numberNumber2[i]}`;
    secondLi.style= 'margin:auto; border-left:solid 7px #999bdb; border-right:solid 7px #999bdb; width:30px; font-size:10px; position:relative; top:-101px; right:18px; padding-top:1px;  list-style-type:none';
    console.log(i);
    if(i===1){
        secondLi.style.backgroundColor= `hsl(238,48%,73%)`;
        secondLi.style.color= 'white';
    }

    else if(i===0){
        secondLi.style.borderTop='solid 7px #999bdb';

    }

    else if(i===9){
        secondLi.style.borderBottom='solid 7px #999bdb';
        secondLi.style.backgroundColor= 'black';
        secondLi.style.color= 'white';
    }
    else if(i % 2 === 1){
    secondLi.style.backgroundColor= 'black';
    secondLi.style.color= 'white';
   
    } 

    else{
        secondLi.style.backgroundColor= 'white';
    }
}

let numberText= 
['ett' , 'två' , 'tre' , 'fyra' , ' fem' , 'sex' , 'sju' , 'åtta' , 'nio' , 'tio'];

for(i=0; i<numberText.length; i++){
    let thirdLi=document.createElement('li');
    ul.appendChild(thirdLi);
    thirdLi.innerText= `${numberText[i]}`;
    thirdLi.style='margin:auto;  border-left:solid 7px #999bdb; border-right:solid 7px #999bdb; width:30px; font-size:10px;  position:relative;  top:-243px; left:135px; padding-top:1px; text-align:right; list-style-type: none';
    
    if(i===5){
        thirdLi.style.backgroundColor= `hsl(238,48%,73%)`;
    }

    else if(i===0){
        thirdLi.style.borderTop='solid 7px #999bdb';
        thirdLi.style.backgroundColor= 'black';
        thirdLi.style.color= 'white';
    }

    else if(i===9){
        thirdLi.style.borderBottom='solid 7px #999bdb';
    }

    else if(i % 2 === 0){
    thirdLi.style.backgroundColor= 'black';
    thirdLi.style.color= 'white';
    } 

    else{
        thirdLi.style.backgroundColor= 'white';
    }


}

ul.style = " margin:auto; display:flex; width:557px; height:230px; flex-direction:column; border:solid 1px grey";



