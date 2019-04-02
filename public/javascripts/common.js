function roundUp(num,roundto)
{
    y= (num % roundto ==0) ? num : num-num%roundto +roundto;
    return y;
  }

function roundDown(num,roundto)
{
    y= (num % roundto ==0) ? num : num-num%roundto;
    return y;
}


function Lowerclosest(array,num)
{
  var i;
  let asd = null;
  for(i=0;i in array;i++){
      if ((num-array[i])>0) {
          asd=array[i];
          break;
      }
  }
  return asd;
}

function Upperclosest(array1,num1)
{
  var i;
  let asd = null;
  for(i=0;i in array1;i++){
      if ((num1-array1[i])<0) {
          asd=array1[i];
          break;
      }
  }
  return asd;
}

function fillTable(diff,pad0,len,width,ht,paddia,padwt)
{
    rangeTable.push({
        "Difference" : diff,
        "Pad0" : pad0,
        "length": len,
        "width": width,
        "height": ht,
        "paddia": paddia,
        "wt":padwt
    });
}

function FillMattProp(Material,Yieldstrength,YoungModulus,density)
{
    MattProp.push({
        "Matt" : Material,
        "Yeild" : Yieldstrength,
        "Young": YoungModulus,
        "Density": density,
    });
}


function MinNumber(number1,number2)
{
    if (number1>number2) {
        minn=number2;
    } else {
        minn=number1;
    }
    return minn;
}

function MaxNumber(number3,number4)
{
    if (number3>number4) {
        minn1=number3;
    } else {
        minn1=number4;
    }
    return minn1;
}

function findValue(array2,dev,array3){
    let abc = _.findIndex(array2, (item1)=>{ return item1==dev; });
    let index = array3[abc];
    return index;
}

function FindMattProp(MattProp,CompMatt)
{
 let item1 = MattProp.map(o => Object.values(o));
    for (let i = 0; i < item1.length; i++) 
    {
        if (CompMatt==item1[i][0]) 
        {
            var YieldStrength =item1[i][1];
            var Youngodulus =item1[i][2];
            var Density =item1[i][3];  
        }
    }
    return[YieldStrength,Youngodulus,Density];
}