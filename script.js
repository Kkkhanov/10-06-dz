let but1 = document.getElementById('but-1');
let out1 = document.getElementById('out-1');
let out2 = document.getElementById('out-2');
let out3 = document.getElementById('out-3');
let but2 = document.getElementById('but-2');
let out4 = document.getElementById('out-4');
let table1 = document.getElementById('table-1');
let table2 = document.getElementById('table-2');
let table3 = document.getElementById('table-3');

const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
  );

  const arr = generateArray(20, 9);  
  out1.textContent = arr;

but1.addEventListener('click', ()=>{
    let s = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == 5){
        s++
      }
    }
    let str = arr.toString();
    let newStr = str.replaceAll('5', '0');
    out2.textContent = newStr;
    out3.textContent = 'Замененных элементов: ' + s;
})

const generateArray2 = (length, max) => (
  [...new Array(length)]
    .map(() => Math.round(Math.random() * max+10))
);
const arr2 = generateArray2(100, 90);
console.log(arr2);

but2.addEventListener('click', function(){
  const filtered = arr2.filter(el => el%5 != 0 && el%11 != 0);
  

  const unique = filtered.filter((element, index) => {
    return filtered.indexOf(element) === index;
  })
  console.log(unique)

  let len = Math.floor(unique.length/3);
  const mas1 = unique.splice(0, len);
  console.log(mas1);
  
  let len2 = mas1.length;
  const mas2 = unique.splice(len- len2, len);
  console.log(mas2);
  
  const mas3 = unique.splice(len-len2);
  console.log(mas3);

  let str1 = '<tr><td></td></tr>';
  let str2 = '<tr><td></td></tr>';
  let str3 = '<tr><td></td></tr>';

  mas1.forEach(el => {
    str1 += '<tr><td>'+ el +'</td></tr>';
  });
  mas2.forEach(el => {
    str2 += '<tr><td>'+ el +'</td></tr>';
  });
  mas3.forEach(el => {
    str3 += '<tr><td>'+ el +'</td></tr>';
  });

  table1.innerHTML = str1;
  table2.innerHTML = str2;
  table3.innerHTML = str3;
});

