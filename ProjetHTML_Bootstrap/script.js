function afficher_cacher(id)
{
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
        document.getElementById('small_'+id).innerHTML='Cacher le formulaire';
    }
    else
    {
        document.getElementById(id).style.visibility="hidden";
        document.getElementById('small_'+id).innerHTML='Afficher le formulaire';
    }
    return true;
}