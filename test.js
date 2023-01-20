let field = {
    1: 'X ',
    2: ' ',
    3: 'X ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' ',
  };
  // let available = Object.entries(field).filter((k,v) => k[v] === '')
  // // console.log(available)
  // const obj = { 1: "", 2: "b" , 3:""}


  // console.log(Object.values(obj).filter(v=>v!==''))
 

  let available = (Object.keys(field).filter((k) => field[k] == ' '))
  const int = available.map(a => parseInt(a))
  i = int.length
  let random = Math.floor((Math.random())* i)
  console.log(random)
  // let computer = int[random]
  // console.log(computer)
