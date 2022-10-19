const link = document.getElementsByClassName("link");
const search = document.getElementsByClassName("text");
const submit = document.getElementsByClassName("submit");

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", () => {
        alert("Still Not Ready. Under Implementation Process")
    })

}
submit[0].addEventListener("click",() => {
    const searchValue = search[0].value;

    if(searchValue.length == 0){
       alert("Please enter something..")
    }
})
