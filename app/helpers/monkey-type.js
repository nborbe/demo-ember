import { helper } from '@ember/component/helper';


// const monkeyTypes = [

//   'Old World',
//   'New World'

// ]

export function monkeyType([typeOfMonkey]){

  if(typeOfMonkey === "Old World"){

    return 'Old World Monkey'
  } else {
    return "New World Monkey"
  }



}



export default helper(monkeyType);



