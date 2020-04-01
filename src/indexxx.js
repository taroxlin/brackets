module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('')
  let cfg = bracketsConfig
  let open = []
  let close= []
  let stack=[]
  for(let i = 0;cfg.length>i;i++){
    open.push(cfg[i][0])
    close.push(cfg[i][1])
  }


  for(let i=0;strArr.length>i;i++){
    if(checkSameOpCl(strArr[i],close,open)){
      if(stack[stack.length-1]===strArr[i]){
        stack.pop()
      }else{
        stack.push(strArr[i])
      }
    }else{
      if(checkOpenOrClose(strArr[i],open)){
        stack.push(strArr[i])
      }else{
        if(stack.length ===0){
          return false
        }
        var topStack = stack.pop()
        if(!match(topStack,strArr[i],cfg)){
          return false
        }
      }
    }
  }
  if(stack.length===0){return true}else{return false}
}




function checkSameOpCl(char,closeArr,openArr){
  console.log(`CHAR:${char} cLARR:${closeArr} opArr:${openArr}`)
  if(closeArr.indexOf(char)>-1&&openArr.indexOf(char)>-1)
  {
    console.log(true)
    return true
  }else{
    console.log(false)
    return false
  }
}



function checkOpenOrClose(char,openArr){
  if(openArr.indexOf(char)>-1)
  {return true}else{return false}
}

function match(topStack,char,cfgArr){
 for(let i=0;cfgArr.length>i;i++){
   if(cfgArr[i][0]===topStack&&cfgArr[i][1]===char){
    return true
   }
 }
  return false;
}