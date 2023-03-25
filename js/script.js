function Click(){
    alert("Функция не доступна, сайт в  разработке!")
}

var  body = document.getElementById('body')

function Check(){
    var checkBox = document.getElementById("check")
    if (checkBox.checked == true){
        body.style.backgroundColor = '#2e2e2ed8'
        
   }else{
        body.style.backgroundColor = ''
   }
}