const validateForm = (event) => {
  event.preventDefault();
  console.log(event);
  let x = document.forms["myForm"]["fname"].value;
  let y = document.forms["myForm"]["sname"].value;
  let postcode = document.forms["myForm"]["pcode"].value;
  let postRegex = /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;
  let postResult = postRegex.test(postcode);
  
  if (postResult == false) {
    alert("Invalid Postcode");
    return false;
  }
  else {
    console.log("Valid Postcode");
  }

  if (x == "" || y == "") {
    alert("Must be filled out");
    return false;
  }
  if (x.length < 3 || y.length < 3) {
    alert("Name must be at least 3 characters long");
    return false;
  }
  console.log("Secret Password");
  //change image on success
  document.getElementById("myImage").src = "https://st3.depositphotos.com/2766632/32422/i/450/depositphotos_324220968-stock-photo-silhouette-cheerful-people-jumping-on.jpg";
  return true;
};
