const canIVote = (number) => {
    if (number >= 18){
      return true;
    } else {
      return false;
    }
  }
  
  console.log(canIVote(17));
  