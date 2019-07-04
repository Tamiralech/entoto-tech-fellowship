var people={
    username: "Tamiralech",
    password: "1234",
    // Email:"tamyihu38@gmail.com",
    // phone:"0938223267"
};
function login()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // var Email=document.getElementById("Email").value;
    // var phone=document.getElementById("phone").value;

    if(username == people.username && password == people.password){
        window.open('./home.html')
    }
    else{
        alert("Check your password")
    }
}