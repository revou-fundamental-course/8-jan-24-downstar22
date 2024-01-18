function luas(){
    var btn1 = document.getElementById("luas1");
    var btn2 = document.getElementById("keliling1");
    var btn3 = document.getElementById("default");
    var btn4 = document.getElementById("luas2");
    var btn5 = document.getElementById("keliling2");

    btn2.classList.remove("form-active");
    btn1.classList.add("form-active");
    btn3.classList.add("display-none");
    btn4.classList.add("form-active");
    btn5.classList.remove("form-active");
}
function keliling(){
    var btn1 = document.getElementById("luas1");
    var btn2 = document.getElementById("keliling1");
    var btn3 = document.getElementById("default");
    var btn4 = document.getElementById("keliling2");
    var btn5 = document.getElementById("luas2");

    btn1.classList.remove("form-active");
    btn2.classList.add("form-active");
    btn3.classList.add("display-none");
    btn4.classList.add("form-active");
    btn5.classList.remove("form-active");
}
function calc_luas(){
    var angka = document.getElementById("num-calc").value;
    if(angka != ""){
        var validate = document.getElementById("validate_luas");
        validate.classList.remove("rum-active");
        var hasil = angka * angka;
        document.getElementById("rumus-show").value ="L = " + angka + " x " + angka;
        document.getElementById("rumus-result").value ="L = " + hasil;
    }
    else{
        var validate = document.getElementById("validate_luas");
        validate.classList.add("rum-active");
        validate.value="Field Masih Kosong!";
        document.getElementById("num-calc").value = '';
        document.getElementById("rumus-show").value ='';
        document.getElementById("rumus-result").value ='';
    }
   
}
function calc_keliling(){
    var angka = document.getElementById("num-calck").value;
    if(angka != ""){
        var validate = document.getElementById("validate_keliling");
        validate.classList.remove("rum-active");
        var hasil = 4 * angka;
        document.getElementById("rumus-show2").value ="Kll = " + 4 + " x " + angka;
        document.getElementById("rumus-result2").value ="Kll = " + hasil;
    }
    else{
        var validate = document.getElementById("validate_keliling");
        validate.classList.add("rum-active");
        validate.value="Field Masih Kosong!";
        document.getElementById("num-calck").value = '';
        document.getElementById("rumus-show2").value ='';
        document.getElementById("rumus-result2").value ='';
    }
}
    
function reset_luas(){
    document.getElementById("num-calc").value = '';
    document.getElementById("rumus-show").value ='';
    document.getElementById("rumus-result").value ='';
}
function reset_keliling(){
    document.getElementById("num-calck").value = '';
    document.getElementById("rumus-show2").value ='';
    document.getElementById("rumus-result2").value ='';
}
