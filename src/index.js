const log = (a) => {
  console.log(a)
}


module.exports = function check(str, bracketsConfig) {
  let stackArray = []
  let openBrArray =[]
  str = str.split("")
/*Helping Functions*/
  const settingArrays=(bC)=>{
    for(let i=0;bC.length>i;i++){
      openBrArray.push(bC[i][0])
    }
  }

  const compareOpenClose=(char,bC)=>{
    for(let i=0;bC.length>i;i++){
      if(bC[i][0]===char&&bC[i][1]===char){
        return true
      }
    }
  return false
  }
  
  const isOpenBr = (char,open)=>{
    if(open.indexOf(char)>-1){
      return true
    }else{
      return false
    }
  }
  
  const matching=(topStack,char,cfgArr)=>{
    for(let i=0;cfgArr.length>i;i++){
      if(cfgArr[i][0]===topStack&&cfgArr[i][1]===char){
       return true
      }
    }
     return false;
   }
   
/*Function WorkSpace */
  settingArrays(bracketsConfig)
  for (let i = 0; str.length > i; i++) {
    if(compareOpenClose(str[i], bracketsConfig)) {
      if(stackArray[stackArray.length-1]===str[i]){
        stackArray.pop()
      }else{
        stackArray.push(str[i])
      }
    }else{
      if(isOpenBr(str[i],openBrArray)){
        stackArray.push(str[i])
      }else{
        if(stackArray.length ===0){
          return false
        }
        if(!matching(stackArray.pop(),str[i],bracketsConfig)){
          return false
        }
      }
    }
  }
 if(stackArray.length===0){
   return true
 }else{
   return false
 }
}


