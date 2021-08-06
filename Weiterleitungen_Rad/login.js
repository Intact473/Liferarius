function validate()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    
    if(email =="Patrick" && password == "t-34")
        {
            alert("Sie wurden erfolgreich eingeloggt");
            window.location.href ="C:\\Users\\STP1NU\\Documents\\Projekte\\Liferarius\\Weiterleitungen_Rad\\Login\\Lieferliste.html";
        }
        else
        if(email =="Marius" && password =="pussyschlitzer187")
        {
            alert("Sie wurden erfolgreich eingeloggt");
            window.location.href ="C:\\Users\\STP1NU\\Documents\\Projekte\\Liferarius\\Weiterleitungen_Rad\\Login\\Lieferliste.html";
        }
        else
        if(email =="Roman" && password =="PatrickMariusRoman")
        {
            alert("Sie wurden erfolgreich eingeloggt");
            window.location.href ="C:\\Users\\STP1NU\\Documents\\Projekte\\Liferarius\\Weiterleitungen_Rad\\Login\\Lieferliste.html";
        }
            else
            {
                alert("Ups, da hat etwas anscheind nicht geklappt!")
            }
}