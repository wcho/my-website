var e=document.getElementById("auth"),f=document.getElementById("createAcc"),g=document.getElementById("lText"),k=document.getElementById("username"),l=document.getElementById("password"),m,n,p=!1,r=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;document.getElementById("forgotPass").onclick=function(){t("Asta e! \ud83e\udd37‍♂️")};f.onclick=function(){if(p)u();else{var d=document.createElement("input");w(d,{"class":"login",id:"repeatPassword",autocomplete:"new-password",maxlength:"100",placeholder:"Repetă parola",required:"",tabindex:"3",type:"password"});var b=document.createElement("input");w(b,{"class":"login",id:"email",autocomplete:"email",maxlength:"254",name:"email",placeholder:"E-mail",required:"",tabindex:"4",type:"email",spellcheck:"false"});w(l,{autocomplete:"new-password"});w(e,{action:"createUser"});e.insertBefore(d,document.getElementById("submitB"));e.insertBefore(b,document.getElementById("submitB"));p=!0;m=document.getElementById("repeatPassword");m.onkeyup=function(){"login lGreen"==l.className?m.className=l.value==m.value?"login lGreen":"login lRed":m.className="login"};n=document.getElementById("email");n.onkeyup=function(){r.test(n.value)?n.className="login lGreen":n.className=0!=n.value.length?"login lRed":"login"};n.onblur=function(){"login lGreen"==n.className&&x("/emailExists",{email:n.value},function(a){"true"==a&&(n.className="login lRed")})};g.textContent="Creare cont";f.textContent="Ai cont? Loghează-te!";k.onblur()}};k.onkeyup=function(){k.className=6<=k.value.length&&40>=k.value.length?"login lGreen":0!=k.value.length?"login lRed":"login"};k.onblur=function(){if(p)"login lGreen"==k.className&&x("/usernameExists",{username:k.value},function(d){"true"==d&&(k.className="login lRed")});else k.onkeyup()};l.onkeyup=function(){if(8<=l.value.length&&100>=l.value.length&&1==y()){if(l.className="login lGreen",p)m.onkeyup(null)}else if(0!=l.value.length)l.className="login lRed";else if(l.className="login",p)m.onkeyup(null)};e.addEventListener("submit",function(d){if("login lGreen"==k.className)if("login lGreen"==l.className)p?"login lGreen"==m.className?"login lGreen"==n.className?x("/createUser",{username:k.value,password:l.value,email:n.value},function(){u();e.reset();k.className="login";l.className="login";t("Cont creat cu succes!")}):r.test(n.value)?t("Adresa e-mail există deja!",2):t("Adresa e-mail nu este validă!",2):m.value!=l.value&&t("Parolele trebuie să fie identice!",2):x("/loginUser",{username:k.value,password:l.value},function(c){switch(c){case "USER_DISABLED":t("Contul este dezactivat! Verifică adresa de e-mail înregistrată pentru activarea contului.",3);break;case "USER_PASSWORD_NOT_FOUND":t("Numele de utilizator sau parola sunt incorecte!",2);break;default:document.body.innerHTML=c,setTimeout(function(){window.location.href="/"},3E3)}});else if(8<=l.value.length&&100>=l.value.length){var b=y(),a="Parola trebuie să conțină cel puțin:\n";b[0]||(a+="- un caracter minuscul\n");b[1]||(a+="- un caracter majuscul\n");b[2]||(a+="- o cifră\n");b[3]||(a+="- un caracter special\n");t(a,2)}else t("Parola trebuie să conțină minimum 8 caractere!",2);else 6<=k.value.length&&40>=k.value.length?p&&t("Numele de utilizator există deja!",2):t("Numele de utilizator trebuie să conțină minimum 6 caractere!",2);d.preventDefault()});function y(){for(var d=l.value,b=!1,a=!1,c=!1,q=!1,v=0;v<d.length;v++){var h=d.charAt(v);if(b&&a&&c&&q)return!0;!b&&"A"<=h&&"Z">=h?b=!0:!a&&"a"<=h&&"z">=h?a=!0:!c&&"0"<=h&&"9">=h?c=!0:!q&&("A">h||"Z"<h)&&("a">h||"z"<h)&&("0">h||"9"<h)&&(q=!0)}return b&&a&&c&&q?!0:[b,a,c,q]}function u(){g.parentNode.removeChild(m);g.parentNode.removeChild(n);p=!1;w(l,{autocomplete:"current-password"});w(e,{action:"loginUser"});g.textContent="Login";f.textContent="Nu ai cont? Creează unul!";k.onblur()};