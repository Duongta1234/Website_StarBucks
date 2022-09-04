const buttob_sign_in = document.getElementById('buttob_sign_in');
buttob_sign_in.addEventListener('click',function(){
  let emails = document.getElementById('emails');
let passwords = document.getElementById('passwords')
let thongbao1 = document.getElementById('thongbao1');
let thongbao2 = document.getElementById('thongbao2');
if(emails.value===''){
thongbao1.innerHTML='KO dc de trong email';
thongbao1.style.color='red';

thongbao1.style.fontSize='20px';
thongbao1.style.marginLeft='10px';
thongbao1.style.marginTop='10px';
emails.style.border='2px solid red';

}else{
  emails.style.border='1.5px solid grey';
  thongbao1.innerHTML=''
}
if(passwords.value===''){
  thongbao2.innerHTML='Ko dc de trong password';
  thongbao2.style.color='red';
  thongbao2.style.fontSize='20px';
  thongbao2.style.marginLeft='10px';
  thongbao2.style.marginTop='10px';
  passwords.style.border='2px solid red';
  }else{
    thongbao2.innerHTML=''
    passwords.style.border='1.5px solid grey';
  }
  let regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!regex_email.test(emails.value)){
    thongbao1.style.color='red';
thongbao1.style.fontSize='20px';
thongbao1.style.marginLeft='10px';
thongbao1.style.marginTop='10px';
emails.style.border='2px solid red';
    thongbao1.innerHTML='Sai dinh dang email'
  }else{
    thongbao1.innerHTML=''
    emails.style.border='1.5px solid grey';
  }
      let regex_passw=  /^[A-Za-z]\w{7,14}$/;
      if(!regex_passw.test(passwords.value)){
        thongbao2.style.color='red';
    thongbao2.style.fontSize='20px';
    thongbao2.style.marginLeft='10px';
    thongbao2.style.marginTop='10px';
    passwords.style.border='2px solid red';
        thongbao2.innerHTML='Mat khau sai'
      }else{
        thongbao2.innerHTML=''

        passwords.style.border='1.5px solid grey';
      }
})
const check_box = document.getElementById('check_box');
check_box.addEventListener('click',function(){

  if(check_box.click){
     
     
  }else{
    
  }
})