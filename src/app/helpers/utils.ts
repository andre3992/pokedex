export const rearrangeId = (id:number) => {
    const numberStr = id.toString();
    if (numberStr.length < 4) {
      const zerosToAdd = 4 - numberStr.length;
      return '0'.repeat(zerosToAdd) + numberStr;
    } else {
      return numberStr;
    }
  }