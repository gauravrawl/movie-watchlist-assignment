 //prevent overflow of title text
 export const setShortTitle = (title, exceedLength) => {
    if (title?.length > Number(exceedLength)) {
      return title?.slice(0, Number(exceedLength)) + "...";
    }
    return title
  };

//Show face according to movie rating
  export const ratingFace = (rating) => {
    if (Number(rating) > 5)  {
      return '😊'
    }
    else{
        return "☹️"
    }
  };