const plus = document.querySelector(".plus"),
 minus = document.querySelector(".minus"),
 num = document.querySelector(".num");
let a =1;
    plus.addEventListener("click", ()=>{
    a++;
    a = (a<10 ) ? "0" + a : a;
    num.innerText = a;
    console.log(a);
    });
    minus.addEventListener("click", ()=>{
    if(a > 1){
    a--;
    a = (a < 10 ) ? "0" + a : a;
    num.innerText = a;
    }
 });

 let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
      password.type = "text";
      eyeicon.src = "open-eye.png";
    }else{
      password.type = "password";
      eyeicon.src = "close-eye.png";
    }
};
//  function Search
let filterarray = [];
    let galleryarray = [
        {
            id: 4,
            name : "Shoes",
            src : "./img shoes/download-1.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            id: 1,
            name : "iphone",
            src : "./img shoes/images-2.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            id: 2,
            name : "samsung",
            src : "./img shoes/images-1.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            id: 3,
            name : "vivo",
            src : "./img shoes/download.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        
    ]
    showgallery(galleryarray);
    function showgallery(currarray){
        document.getElementById("card").innerText = "";
        for(var i=0;i<currarray.length;i++){
            document.getElementById("card").innerHTML += `
            <div class="col-md-4 mt-3">
            <div class="card p-3 ps-5 pe-5">
                <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
                <img src="${currarray[i].src}" width="100%" height="320px"/>
                <p class="mt-2">${currarray[i].desc}</p>
                <button class="btn btn-primary w-100 mx-auto">More</button>
            </div>
            </div>
            `
        }
    }

    document.getElementById("myinput").addEventListener("keyup",function(){
        let text = document.getElementById("myinput").value;

        filterarray = galleryarray.filter(function(a){
            if(a.name.includes(text)){
                return a.name;
            }
        });
        if(this.value ==""){
            showgallery(galleryarray);
        }else{
            if(filterarray == ""){
                document.getElementById("para" ).style.display='block';
                document.getElementById("card").innerHTML = "";
            }else{
                showgallery(filterarray);
                document.getElementById("para").style.display ='none';
            }
        }


    });
 

