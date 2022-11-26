function getInfo(){
    let fname = document.getElementById("fname").value;
    if(fname===""){
        fname="N/A"
    }
   localStorage.setItem("fname", fname);
    let lname = document.getElementById("lname").value;
    localStorage.setItem("lname", lname);
    let title = document.getElementById("title").value;
    if(title===""){
        title="N/A"
    }
   localStorage.setItem("title", title);
   let email = document.getElementById("email").value;
   localStorage.setItem("email", email);
   let phone = document.getElementById("phone").value;
   if(phone===""){
    phone="N/N"
   }
   localStorage.setItem("phone", phone);
   let bname = document.getElementById("bname").value;
   localStorage.setItem("bname", bname);
   let description = document.getElementById("description1").value;
   if(description===""){
    description="N/A"
   }
   localStorage.setItem("description", description);

//    -------CHECK RADIO BUTTON MEMBERSHIP--------
   if(document.getElementById('np').checked) {   
    localStorage.setItem("membership", document.getElementById("np").value);   
}   
else if(document.getElementById('bronze').checked) {   
    localStorage.setItem("membership", document.getElementById("bronze").value);     
}   
else if(document.getElementById('silver').checked) {   
    localStorage.setItem("membership", document.getElementById("silver").value);     
}   
else if(document.getElementById('gold').checked) {   
    localStorage.setItem("membership", document.getElementById("gold").value);       
}  
else {   
    localStorage.setItem("membership", "not selected")   
}   
   }
   
   document.getElementById("joinFname").innerHTML = (window.localStorage.getItem("fname"));
   document.getElementById("joinLname").innerHTML = (window.localStorage.getItem("lname"));
   document.getElementById("joinTitle").innerHTML = (window.localStorage.getItem("title"));
   document.getElementById("joinEmail").innerHTML = (window.localStorage.getItem("email"));
   document.getElementById("joinPhone").innerHTML = (window.localStorage.getItem("phone"));
   document.getElementById("joinBname").innerHTML = (window.localStorage.getItem("bname"));
   document.getElementById("joinMlevel").innerHTML = (window.localStorage.getItem("membership"));
   document.getElementById("joinDescription").innerHTML = (window.localStorage.getItem("description"));
   
   document.getElementById("joinTime").innerHTML = new Date().toDateString() + ", " + new Date().getHours() + ":" + 
   new Date().getMinutes();