var value1,value2;

function send(){
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    console.log("value 1 is "+value1+" Value 2 is "+ value2);
    var form = document.getElementById("login");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);

}
