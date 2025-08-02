let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passbox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");

//Showing Input Slider Value
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener("input", ()=>{
    sliderValue.textContent=inputSlider.value;
});

//Generating Password
genBtn.addEventListener('click',()=>{
    passbox.value = generatePassword();
})

 let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let lowerChars = "abcdefghijklmnopqrstuvwxyz";
 let allNumber = "0123456789";
 let allsymbols = "~!@#$%^&*()_+`-={}|[]\\:\";'<>?,./";


//Function to generate password
function generatePassword() {
    let genpassword="";
    let allChars = "";
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumber : "";
    allChars += symbols.checked ? allsymbols : "";
    let i=1;
    while(i<=inputSlider.value){
        genpassword += allChars.charAt(Math.floor(Math.random()* allChars.length));
        i++;
    }
        return genpassword;
        
}

copyIcon.addEventListener("click", ()=>{
    if(passbox.value!='' || passbox.value.length >=8){
    navigator.clipboard.writeText(passbox.value)
    copyIcon.innerText="check";
    copyIcon.title = "Copied";

    setTimeout(() => {
        copyIcon.title = "";
        copyIcon.innerHTML="content_copy";
        },3000)
    }
})