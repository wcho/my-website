var e=document.getElementById("auth"),f=document.getElementById("createAcc"),g=document.getElementById("lText"),k=document.getElementById("username"),l=document.getElementById("password"),p,q,r,t=!1,u=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;document.getElementById("forgotPass").onclick=function(){v("Asta e! \ud83e\udd37‍♂️")};f.onclick=function(){if(t)w();else{var b=document.createElement("input");x(b,{"class":"login",id:"repeatPassword",autocomplete:"new-password",maxlength:"100",placeholder:"Repetă parola",required:"",tabindex:"3",type:"password"});var d=document.createElement("input");x(d,{"class":"login",id:"email",autocomplete:"email",maxlength:"254",name:"email",placeholder:"E-mail",required:"",tabindex:"4",type:"email",spellcheck:"false"});var a=document.createElement("label");x(a,{"class":"checkbox-label",id:"chkLabel",tabindex:"5"});a.textContent="Accept termenii și condițiile";var c=document.createElement("input");x(c,{id:"chkBox",name:"chkBox",required:"",type:"checkbox"});var n=document.getElementById("submitB");e.insertBefore(b,n);e.insertBefore(d,n);e.insertBefore(a,n);a.insertAdjacentElement("afterbegin",c);x(l,{autocomplete:"new-password"});x(e,{action:"createUser"});g.textContent="Creare cont";f.textContent="Ai cont? Loghează-te!";r=document.getElementById("chkLabel");p=document.getElementById("repeatPassword");p.onkeyup=function(){"login lGreen"==l.className?p.className=l.value==p.value?"login lGreen":"login lRed":p.className="login"};q=document.getElementById("email");q.onkeyup=function(){u.test(q.value)?q.className="login lGreen":q.className=0!=q.value.length?"login lRed":"login"};q.onblur=function(){"login lGreen"==q.className&&y("/emailExists",{email:q.value},function(m){"true"==m&&(q.className="login lRed")})};q.onkeydown=function(m){32!=m.which&&">"!=m.key&&"<"!=m.key||m.preventDefault()};t=!0;k.onblur()}};k.onkeyup=function(){k.className=6<=k.value.length&&40>=k.value.length?"login lGreen":0!=k.value.length?"login lRed":"login"};k.onblur=function(){k.value=k.value.replace(/[\s<>]/g,"");if(t)"login lGreen"==k.className&&y("/usernameExists",{username:k.value},function(b){"true"==b&&(k.className="login lRed")});else k.onkeyup()};k.onkeydown=function(b){32!=b.which&&">"!=b.key&&"<"!=b.key||b.preventDefault()};l.onkeyup=function(){if(8<=l.value.length&&100>=l.value.length&&1==z()){if(l.className="login lGreen",t)p.onkeyup(null)}else if(0!=l.value.length)l.className="login lRed";else if(l.className="login",t)p.onkeyup(null)};e.addEventListener("submit",function(b){if("login lGreen"==k.className)if("login lGreen"==l.className)t?"login lGreen"==p.className?"login lGreen"==q.className?y("/createUser",{username:k.value,password:l.value,email:q.value,policy:document.getElementById("chkBox").checked},function(){w();e.reset();k.className="login";l.className="login";v("Cont creat cu succes!")}):u.test(q.value)?v("Adresa e-mail există deja!",2):v("Adresa e-mail nu este validă!",2):p.value!=l.value&&v("Parolele trebuie să fie identice!",2):y("/loginUser",{username:k.value,password:l.value},function(c){switch(c){case "USER_DISABLED":v("Contul este dezactivat! Verifică adresa de e-mail înregistrată pentru activarea contului.",3);break;case "USER_PASSWORD_NOT_FOUND":v("Numele de utilizator sau parola sunt incorecte!",2);break;default:document.body.innerHTML=c,setTimeout(function(){window.location.href="/"},3E3)}});else if(8<=l.value.length&&100>=l.value.length){var d=z(),a="Parola trebuie să conțină cel puțin:\n";d[0]||(a+="- un caracter minuscul\n");d[1]||(a+="- un caracter majuscul\n");d[2]||(a+="- o cifră\n");d[3]||(a+="- un caracter special\n");v(a,2)}else v("Parola trebuie să conțină minimum 8 caractere!",2);else 6<=k.value.length&&40>=k.value.length?t&&v("Numele de utilizator există deja!",2):v("Numele de utilizator trebuie să conțină minimum 6 caractere!",2);b.preventDefault()});function z(){for(var b=l.value,d=!1,a=!1,c=!1,n=!1,m=0;m<b.length;m++){var h=b.charAt(m);if(d&&a&&c&&n)return!0;!d&&"A"<=h&&"Z">=h?d=!0:!a&&"a"<=h&&"z">=h?a=!0:!c&&"0"<=h&&"9">=h?c=!0:!n&&("A">h||"Z"<h)&&("a">h||"z"<h)&&("0">h||"9"<h)&&(n=!0)}return d&&a&&c&&n?!0:[d,a,c,n]}function w(){g.parentNode.removeChild(p);g.parentNode.removeChild(q);g.parentNode.removeChild(r);t=!1;x(l,{autocomplete:"current-password"});x(e,{action:"loginUser"});g.textContent="Login";f.textContent="Nu ai cont? Creează unul!";k.onblur()};