var e=document.getElementById("auth"),f=document.getElementById("createAcc"),g=document.getElementById("lText"),k=document.getElementById("username"),l=document.getElementById("password"),p,q,r,t=!1,u=/^[a-zA-Z\d][a-zA-Z\d!?$^&*._-]{5,39}$/,v=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;document.getElementById("forgotPass").onclick=function(){x("Asta e! \ud83e\udd37‍♂️")};f.onclick=function(){if(t)y();else{var c=document.createElement("input");z(c,{"class":"login",id:"repeatPassword",autocomplete:"new-password",maxlength:"100",placeholder:"Repetă parola",required:"",tabindex:"3",type:"password"});var d=document.createElement("input");z(d,{"class":"login",id:"email",autocomplete:"email",maxlength:"254",name:"email",placeholder:"E-mail",required:"",tabindex:"4",type:"email",spellcheck:"false"});var a=document.createElement("label");z(a,{"class":"checkbox-label",id:"chkLabel",tabindex:"5"});a.textContent="Accept termenii și condițiile";var b=document.createElement("input");z(b,{id:"chkBox",name:"chkBox",required:"",type:"checkbox"});var n=document.getElementById("submitB");e.insertBefore(c,n);e.insertBefore(d,n);e.insertBefore(a,n);a.insertAdjacentElement("afterbegin",b);z(l,{autocomplete:"new-password"});z(e,{action:"createUser"});g.textContent="Creare cont";f.textContent="Ai cont? Loghează-te!";r=document.getElementById("chkLabel");p=document.getElementById("repeatPassword");p.onkeyup=function(){"login lGreen"==l.className?p.className=l.value==p.value?"login lGreen":"login lRed":p.className="login"};q=document.getElementById("email");q.onkeyup=function(){v.test(q.value)?q.className="login lGreen":q.className=0!=q.value.length?"login lRed":"login"};q.onblur=function(){"login lGreen"==q.className&&A("/emailExists",{email:q.value},function(m){"true"==m&&(q.className="login lRed")})};q.onkeydown=function(m){32==m.which&&m.preventDefault()};t=!0;k.onblur()}};k.onkeyup=function(){u.test(k.value)?k.className="login lGreen":k.className=0!=k.value.length?"login lRed":"login"};k.onblur=function(){if(t)"login lGreen"==k.className&&A("/usernameExists",{username:k.value},function(c){"true"==c&&(k.className="login lRed")});else k.onkeyup()};k.onkeydown=function(c){32==c.which&&c.preventDefault()};l.onkeyup=function(){if(1==B()){if(l.className="login lGreen",t)p.onkeyup(null)}else if(0!=l.value.length)l.className="login lRed";else if(l.className="login",t)p.onkeyup(null)};e.addEventListener("submit",function(c){if("login lGreen"==k.className)if("login lGreen"==l.className)t?"login lGreen"==p.className?"login lGreen"==q.className?A("/createUser",{username:k.value,password:l.value,email:q.value,policy:document.getElementById("chkBox").checked},function(){y();e.reset();k.className="login";l.className="login";x("Cont creat cu succes!")}):v.test(q.value)?x("Adresa e-mail există deja!",2):x("Adresa e-mail nu este validă!",2):p.value!=l.value&&x("Parolele trebuie să fie identice!",2):A("/loginUser",{username:k.value,password:l.value},function(b){switch(b){case "USER_DISABLED":x("Contul este dezactivat! Verifică adresa de e-mail înregistrată pentru activarea contului.",3);break;case "USER_PASSWORD_NOT_FOUND":x("Numele de utilizator sau parola sunt incorecte!",2);break;default:document.body.innerHTML=b,setTimeout(function(){window.location.href="/"},3E3)}});else{var d=B();if(d[0]){var a="Parola trebuie să conțină cel puțin:\n";d[1]||(a+="- un caracter majuscul\n");d[2]||(a+="- un caracter minuscul\n");d[3]||(a+="- o cifră\n");d[4]||(a+="- un caracter special\n");x(a,2)}else x("Parola trebuie să conțină minim 8 caractere!",2)}else u.test(k.value)?t&&x("Numele de utilizator există deja!",2):x("Numele de utilizator trebuie să conțină minim 6 caractere și să înceapă cu un caracter alfanumeric. Simbolurile acceptate sunt: !?$^&*._-",2);c.preventDefault()});function B(){var c=l.value,d=!1,a=!1,b=!1,n=!1,m=!1;if(8<=c.length){d=!0;for(var w=0;w<c.length;w++){var h=c.charAt(w);if(a&&b&&n&&m&&d)return!0;!a&&"A"<=h&&"Z">=h?a=!0:!b&&"a"<=h&&"z">=h?b=!0:!n&&"0"<=h&&"9">=h?n=!0:!m&&("A">h||"Z"<h)&&("a">h||"z"<h)&&("0">h||"9"<h)&&(m=!0)}}return a&&b&&n&&m&&d?!0:[d,a,b,n,m]}function y(){g.parentNode.removeChild(p);g.parentNode.removeChild(q);g.parentNode.removeChild(r);t=!1;z(l,{autocomplete:"current-password"});z(e,{action:"loginUser"});g.textContent="Login";f.textContent="Nu ai cont? Creează unul!";k.onblur()};