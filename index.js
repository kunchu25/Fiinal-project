function displayFlag() {
    var selectedFlag = document.getElementById("flags").value;
    var flagImage = document.getElementById("flagImage");
    

    if (selectedFlag === "usa") {
      flagImage.src = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png";
    } else if (selectedFlag === "uk") {
      flagImage.src = "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png";
    } else if (selectedFlag === "georgia") {
      flagImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1920px-Flag_of_Georgia.svg.png";
    } else if (selectedFlag === "colombia") {
      flagImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1920px-Flag_of_Colombia.svg.png";
    } else if (selectedFlag === "india") {
      flagImage.src = "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1920px-Flag_of_India.svg.png";
    } else if (selectedFlag === "china") {
      flagImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1920px-Flag_of_the_People%27s_Republic_of_China.svg.png";
    } else if (selectedFlag === "korea") {
      flagImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1920px-Flag_of_South_Korea.svg.png";
    } else if (selectedFlag === "thailand") {
      flagImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1920px-Flag_of_Thailand.svg.png";
    } else if (selectedFlag === "indonesia") {
      flagImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1920px-Flag_of_Indonesia.svg.png";
    } else if (selectedFlag === "mexico") {
      flagImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1920px-Flag_of_Mexico.svg.png";
    } else if (selectedFlag === "spain") {
      flagImage.src = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1920px-Flag_of_Spain.svg.png";
    } else if (selectedFlag === "italy") {
      flagImage.src = "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1920px-Flag_of_Italy.svg.png";
    }
    
    if (selectedFlag !== "default") {
      flagImage.style.display = "inline"; 
    } else {
      flagImage.style.display = "none"; 
    }
  }