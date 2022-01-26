var icons_dell = document.getElementsByClassName("fa-trash-alt")
for (var i = 0;i< icons_dell.length; i++) {
    icons_dell[i].addEventListener("click",supprimer);
}
function supprimer(){
    var c = confirm ("are you sure !!");
    if(c){
        this.parentElement.parentElement.remove();
    }
}
document.getElementById("add_task").addEventListener("click",ajouter);
function ajouter(){
    var task=document.getElementById("add").textContent.trim();
    if(task!=""){
        document.getElementById("ul").innerHTML+='<li class="list-group-item"> <span contenteditable >'+ task +'</span><div class="icone"><i class="fas fa-trash-alt"></i> <i class="fas fa-user-edit"></i></div></li>'
    document.getElementById("add").textContent=" "}
    else{
        alert("task is empty");
    
    }
}
document.getElementById("ss").addEventListener("keyup",chercher)
function chercher(){
  var  cle = this.value.trim().toLowerCase();
  var tasks = document.getElementsByTagName("span")
  for (var i = 0; i < tasks.length; i++) {
     if(!tasks[i].textContent.toLocaleLowerCase().includes(cle)){
         tasks[i].parentElement.style.display="none"
     }else{
         tasks[i].parentElement.style.display="block"
     }
  }
}