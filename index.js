const sendchatbtn= document.querySelector(".chat-input span");
const chatinput= document.querySelector(".chat-input textarea");

let usermessage;

const handlechat=()=>
{
    usermessage=chatinput.value.trim();
    console.log(usermessage);
}
sendchatbtn.addEventListener('click', handlechat);