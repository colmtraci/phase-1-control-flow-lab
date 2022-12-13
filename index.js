function scuberGreetingForFeet(rideDist){
  // Write your code here!
  if (rideDist <= 400){
    return 'This one is on me!'
  } else if (rideDist > 400 && rideDist <= 2000){
    return 'That will be twenty bucks.'
  } else if (rideDist > 2000 && rideDist <= 2500){
    return 'I will gladly take your thirty bucks.'
  } else if (rideDist >= 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city == 'NYC'){
    return 'Ok, sounds good.'
  } else if (city != 'NYC'){
    return 'No go.'
  }
}

function switchOnCharmFromTip(gen){
  // Write your code here!
  switch (true){
    case gen == 'generous':
      return 'Thank you so much.';
    case gen == 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
