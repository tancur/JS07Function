// ФУНКЦИИ================

// 1.

//     let degreeFarengeit = +prompt("Введите Вашу температуру в F");

//    let getFareng= (degreeFarengeit=>{return((degreeFarengeit - 32) *(5 / 9)).toFixed(1) });


//   alert (degreeFarengeit > 79.7 && degreeFarengeit < 104 ?
//      `Ваша температура в градусах Цельсия составит ${getFareng(degreeFarengeit)} градусов` :
//    "Вы точно живы?");

// ====================================


// 2. 

// let colourRed = +prompt(`Введите значение red`);
// let colourGreen = +prompt(`Введите значение green`);
// let colourBlue = +prompt(`Введите значение blue`);

// let rgb = function(colourRed,colourGreen,colourBlue){

// let newRed = (colourRed.toString(16).slice(0, 2).length > 2 )?
//  colourRed.toString(16).slice(0, 2) :('0'+ colourRed.toString(16).slice(0, 2));

// let newGreen = (colourGreen.toString(16).slice(0, 2) > 2)? 
// colourGreen.toString(16).slice(0, 2): ('0'+ colourGreen.toString(16).slice(0, 2));


// let newBlue = colourBlue.toString(16).slice(0, 2) > 2 ?
// colourBlue.toString(16).slice(0, 2) : ('0'+colourBlue.toString(16).slice(0, 2));

//  rgbColor="#"+newRed+newGreen+newBlue;

//  return  alert( `Ваш CSS-цвет в формате #RRGGBB: ${rgbColor}  `);}
// if (
//   Number.isInteger(colourRed) &&   colourRed >= 0 &&
//   Number.isInteger(colourGreen) &&   colourGreen >= 0 &&
//   Number.isInteger(colourBlue) &&  colourBlue >= 0
// ) {rgb (colourRed,colourGreen,colourBlue);
  
// } else alert(`Попробуйте еще раз`);

// ==================================================

// 3.



// let floorAmount = +prompt("Введите количество этажей в доме");

// let apartOnTheFloor = +prompt("Введите количество квартир на этаже");

// let numOfApart = +prompt("Введите номер квартиры ");


// let otvet = function(floorAmount, apartOnTheFloor, numOfApart){
//    object={};
//    object.entrance = 1 + Math.trunc((numOfApart - 1) / (floorAmount * apartOnTheFloor));
//    object.floor = 1 + ((numOfApart - 1) % (floorAmount * apartOnTheFloor)) / apartOnTheFloor
//    return object 
//   }

//   otvet(floorAmount,apartOnTheFloor,numOfApart)


// ===================================================================================
// 4.
// let vopros = function(){

// let answer={userSurName : prompt ("Введите Вашу фамилию"),
//              userName : prompt ("Введите Ваше имя"),
//              userFatherName : prompt ("Введите Ваше отчество")
//        };


// for (let i in answer ) {answer[i]=answer[i].toLowerCase().trim();
//   answer[i] = answer[i][0].toUpperCase() + answer[i].slice(1); }
//   answer.fullName = `${answer.userSurName}   ${answer.userName}  ${answer.userFatherName}`
//   console.log (answer)};

//   vopros();
// ==========================================
// 5.

  // let a = (text)=>{alert (text.split('\\n').join('\n'))};
  // a(prompt ("Введите текст. В местах предполагаемых переносов введите \\n "));
  // =============================
  // 6. 

    
  //   
  //   let str = (number) => 
  //   alert (Number.parseInt(number) || Number.parseInt(number) === 0? number : `ERROR` );
  //    str(prompt('Введите число'));
// ===================
  //7. 

      // СТАЛО==========================

      // let a = function(login,password){  alert( login==='admin'&& password === 'qwerty' ? 'TRUE' : 

      // login==='admin'? 'Password wrong': password === 'qwerty'?'Login wrong':'error')}
        
      //    a(prompt ('Введите логин'),prompt ('ВВедите пароль'));


// 8.============================================================================




 
//    let arr = (arr1)=> {
//     let   str = "<table>";
//       for (const i of arr1){ (arr1.indexOf(i)%2 === 0) ?
//         str += "<tr>" : str += `<tr style="background-color: yellow">`;
//       for (const k of i){ 

//       str +=`<td>${k}</td>`
//     }
//     str += "</tr>"
// }
//       str+= "</table>"
    
//     console.log(str);
//     document.write(str)};

//    let arr1 = [[1,2,3,4,5,6,7],[1,2,3,4,5,6],[1,2,3,4,5,6,7,8,9]];

//    arr (arr1)

// Вариант с вводом массива через PROMPT==============

//    let arr = (arr1)=> {
//     let   str = "<table>";
//       for (const i of arr1){ (arr1.indexOf(i)%2 === 0) ?
//         str += "<tr>" : str += `<tr style="background-color: yellow">`;
//       for (const k of i){ 

//       str +=`<td>${k}</td>`
//     }
//     str += "</tr>"
// }
//       str+= "</table>"
    
//     console.log(str);
//     document.write(str)};
// делаем ввод элементов подмассивов через запятую, разделяя массивы пробелами,
// потом делим на части по пробелу и еще раз разделяем запятыми между подмассивами)
//    let arr1 = prompt("vvedi massivi").split(' ').map(elem=>elem.split(','))

//    arr (arr1);
// ================================================
// 9. 
  // let func = (phrase) => {
    
  //   let arr = phrase.split(' ');
    
  //   let word = ["оно","того","это"];
  // let result = arr.filter(elem =>!word.includes(elem)); 
  // console.log(result===true? arr.join(' '):`Попрошу не выражаться`);}

  // let phrase = prompt 
  // ('Введите строку из  слов, разделяя их пробелами,не употребляя слова : "оно","того","это" ');

  // func(phrase);

// ====================================
// 10.

// let arr = ()=> {let arr1 = prompt("vvedi massivi").split(' ').map(elem=>elem.split(','))
//       let   str = "<table>";
//         for (const i of arr1){ (arr1.indexOf(i)%2 === 0) ?
//           str += "<tr>" : str += `<tr style="background-color: yellow">`;
//         for (const k of i){ 
  
//         str +=`<td>${k}</td>`
//       }
//       str += "</tr>"
//   }
//         str+= "</table>"
      
//       console.log(str);
//       document.write(str)};
  
     
  
//      arr ( );
// ==========================================================================
// 11 

// let askPersons =()=>( [
//   {
//       name: prompt('Введите имя'),
//       fatherName: prompt('Введите отчество'),
//       surname: prompt('Введите фамилию'),
//       sex: prompt('Введите пол')
//   },
//   {
//       name: prompt('Введите имя'),
//       fatherName: prompt('Введите отчество'),
//       surname: prompt('Введите фамилию'),
//       age: prompt('Введите возраст')
//   },
//   {
//       name: prompt('Введите имя'),
//       fatherName: prompt('Введите отчество'),
//       surname: prompt('Введите фамилию'),
//       married: prompt('Введите семейное положение')
//   },
// ]);

// let persons = askPersons();
// function tabl (persons) {
  
//   let arrOfKey=[];
//   let arrOfUniqKey=[];
   
//   for (let i of persons) 
//   arrOfKey.push(Object.keys(i));
   
//   for (let key of arrOfKey){ for (let key1 of key) {
  
    
//    if(!arrOfUniqKey.includes(key1)) arrOfUniqKey.push(key1) }}
   
//   let header = "<tr>";
//   arrOfUniqKey.forEach(value=>{header+="<th>"+value+"</th>"});
//   header+="</tr>";
//    console.log(header);
  
   
  
//   let row =" ";
  
   
//   for (let i of persons) {
//      row +="<tr>" 
//   for (let k of arrOfUniqKey) {  
  
//     row +=`<td>${typeof i[k] === 'undefined' ? '-' : i[k]}</td>`}
  
//     row += "</tr>"}
     
    
     
  
//     let result = "<table>"  + header + row + "</table>";
//     console.log(result)
  
//    document.write(result); }

//    tabl (persons)


// =========================================


// 12. 
// var persons = [
//   {name: "Іван", age: 17},
//   {name: "Марія", age: 35},
//   {name: "Олексій", age: 73},
//   {name: "Яків", age: 12},
// ]

// let sortOfKey=(key) => {
//   return (a, b) => a[key] > b[key] ? 1 : -1;
// }

// persons.sort(sortOfKey("name"))
// ==========================================================






// let persons = [
//   {name: "Іван", age: 17},
//   {name: "Марія", age: 35},
//   {name: "Олексій", age: 73},
//   {name: "Яків", age: 12},
// ]
// let ko = (obj, key, vopros = 'true') =>{
//   return( vopros==='true'||vopros==='undefined'?
// obj.sort((a, b) => a[key] > b[key] ? 1 : -1) : obj.sort((a, b) => a[key] > b[key] ? -1 : 1) )
//  }

// ko(persons, "name", 'false')





// ==============================================

// 

// const persons = [
//     {
//         name: 'Марія',
//         fatherName: 'Пантелеевна',
//         surname: 'Глухая',
//         sex: 'female'
//     },
//     {
//         name: 'Феодосий',
//         fatherName: 'Петрович',
//         surname: 'Косой',
//         age: 15
//     },
//     {
//         name: 'Петро',
//         fatherName: 'Семенович',
//         surname: 'Слепой',
//         married: true
//     },
//   ]

//   let tableSort = (obj, key, vopros = 'true') =>{
//       let k1 = ( vopros==='true'||vopros==='undefined'?
//     obj.sort((a, b) => a[key] > b[key] ? 1 : -1) : obj.sort((a, b) => a[key] > b[key] ? -1 : 1) );

//     let arrOfKey=[];
//     let arrOfUniqKey=[];
    
//     for (let i of k1) 
//     arrOfKey.push(Object.keys(i));
    
//     for (let key of arrOfKey){ for (let key1 of key) {
    
      
//      if(!arrOfUniqKey.includes(key1)) arrOfUniqKey.push(key1) }}
    
//     let header = "<tr>";
//     arrOfUniqKey.forEach(value=>{header+="<th>"+value+"</th>"});
//     header+="</tr>";
//      console.log(header);
//      let row =" ";

     
//      for (let i of k1) {
//         row +="<tr>" 
//      for (let k of arrOfUniqKey) {  
     
//        row +=`<td>${typeof i[k] === 'undefined' ? 'не определен' : i[k]}</td>`}
     
//        row += "</tr>"}
             
            
//        let result = "<table>"  + header + row + "</table>";
//        console.log(result)
     
//       document.write(result); 

//      }
    
//     tableSort(persons, "surname", 'true')


// ========================================
// 

// let firstValue = +prompt("Введите значение 1");
// let secondValue = +prompt("Введите значение 2");
// alert(`Результат ${Math.round(firstValue / secondValue)}`);

// =================





{/* <input type='number' id="firstNumber" />
<input type='number' id="secondNumber" />
<div id="divisionResult">
    Как понять домашку если ты не гений?
</div>
<script>
    const calcResult = () => {
divisionResult.innerHTML = `Результат священного действа ${Math.round(firstNumber.value / secondNumber.value)}`;

        console.log(firstNumber.value, secondNumber.value, divisionResult.innerHTML)
        // divisionResult.innerHTML = "Текст у <code>div</code> змінено за допомогою <strong>Javascript </strong><br/>" + Math.random()
    }
    
    firstNumber.oninput = secondNumber.oninput = calcResult
</script> */}
// =============================



// function electricBill(currentMonthElectricValue,LastMonthElectricValue) {
//   const LOW_CONSUMPTION_PRISE_PER_KWT = 0.96; //Стоимость 1 кВт при потреблении менее чем 100кВт запериод
//   const HIGH__CONSUMPTION_PRISE_PER_KWT = 1.46; //Стоимость 1 кВт при потреблении более чем 100кВт за период  
//   let diff = currentMonthElectricValue - LastMonthElectricValue; //Потребленное количество килоВатт
//   alert(diff < 100?
//      `Сумма к оплате ${(diff * LOW_CONSUMPTION_PRISE_PER_KWT).toFixed(2)} грн.`: 
//      `Сумма к оплате ${(diff * HIGH__CONSUMPTION_PRISE_PER_KWT).toFixed(2)} грн.`
//   )
// }
// electricBill(+prompt("Введите текущие показания счетчика:"),+prompt("Введите предыдущие показания  счетчика"))
// ========================



{/* <label>Введите текущие показания счетчика</label>
<input type='number' id="currentMonthElectricValue" value="100"/> 
<br>

<label> Введите предыдущие показания  счетчика </label>
   <input type='number' id="lastMonthElectricValue" value="50" />


  <div id="divisionResult">
    Сумма к оплате:
  </div>
  <script>
      const calcResult = () => {
        const LOW_CONSUMPTION_PRISE_PER_KWT = 0.96; 
        const HIGH__CONSUMPTION_PRISE_PER_KWT = 1.46; 
        let diff = currentMonthElectricValue.value - lastMonthElectricValue.value;
        
       diff < 100?  divisionResult.innerHTML = `Сумма к оплате ${(diff * LOW_CONSUMPTION_PRISE_PER_KWT).toFixed(2)} грн.`: 
       divisionResult.innerHTML =`Сумма к оплате ${(diff * HIGH__CONSUMPTION_PRISE_PER_KWT).toFixed(2)} грн.` ;
  
        console.log(currentMonthElectricValue.value, lastMonthElectricValue.value, divisionResult.innerHTML)
          
      }
      
      currentMonthElectricValue.oninput = lastMonthElectricValue.oninput = calcResult
     
  </script>


  <script src="./dz.js"></script> 
</body>
</html> */}





















