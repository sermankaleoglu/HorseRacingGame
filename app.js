var tahmin=null;
var bakiyem=null;
var bahis=null;
function bakiye()
{
    bakiyem = parseInt(prompt("Ne kadar bakiye yüklemek istersiniz?"));
    document.getElementById("bakiye").innerHTML="Bakiyeniz: " +bakiyem+" TL" ;
}
function bahisTutarı()
{
    bahis=parseInt(prompt("Bahis tutarınız nedir?"));
    document.getElementById("bahis").innerHTML="Bahis Tutarı: " +bahis+" TL";
}
function predict()
{
    tahmin = parseInt(prompt("1 ile 5 arasında bir tahmin girin: "));
}
function startGame() //Yarışı başlatmak için kullanılan fonksiyondur.
{
    if (tahmin == null || bakiyem==null) 
    { // Tahmin girilmediyse uyarı mesajı verilir.
        alert("Önce bir bakiye ve tahmin girin!");
        return;
    }
    else
    {
        var atlar = document.getElementsByClassName("img");//sayfadaki tüm img sınıfına ait at resimleri alınır.
        for (var i = 0; i < atlar.length; i++) 
        {
          hareketEttir(atlar[i]);//hareketEttir() fonksiyonu ile atlar hareket ettirilir.
        }
    }
}
function hareketEttir(atResmi)//Bu fonksiyon bir at resmini hareket ettirmek için kullanılır. Fonksiyona hareket ettirilecek olan atResmi parametresi verilir.
{
    var hiz = Math.floor(Math.random() * 10)+1;//Atın hızı rastgele bir sayı olarak belirlenir.
    var pozisyon = 0;//Başlangıç pozisyonu 0 olarak belirlenir.
    var bitisCizgisi =1390;//Bitiş noktası div uzunluğuna göre ayarlanır.
    var hareket = setInterval(function()  //setInterval atın belirtilen hızda hareket etmesini sağlar.Her 50 milisaniyede bir bu kod çalışıcaktır.
        {
            pozisyon += hiz;//pozisyon eğişkeni atın konumu ile güncellenir.
            atResmi.style.left = pozisyon + "px";//Atın yeni konumu sayfada gösterilir.
            atSırası();
            document.getElementById("sıralamaSonucu").innerHTML=ondekiAt.id+" ÖNDE";
            if (pozisyon >= bitisCizgisi) //Eğer at bitiş çizgisine ulaşırsa clearInterval() fonksiyonu ile hareket durdurulur.
            {
                clearInterval(hareket);
                kontrolEt(atResmi);//hareket durdurulduktan sonra kontrolEt() fonksiyonu çağrılır.
                setTimeout()    
            }
        }, 50);
}
var birinciAt=null;//birinciAt değişkeni henüz belirlenmediği için nul olarak atanır.
function kontrolEt(atResmi)
{
    if(!birinciAt)//Eğer birinci at değişkeni henüz tanımlanmamış yani null ise koşul içine girer.
    {
        birinciAt = atResmi;//Bitiş çizgisine ilk ulaşan atResmi birinci olarak kabul edilir.
        if(birinciAt.id == tahmin)
        {
            bakiyem=bakiyem+bahis;
            alert(birinciAt.id + " birinci oldu!"+'\n'+"DOĞRU TAHMİN"+'\n'+"Yeni Bakiyeniz: "+bakiyem+" TL");  
        }
        else
        {
            bakiyem=bakiyem-bahis;
            alert(birinciAt.id + " birinci oldu!"+'\n'+"YANLIŞ TAHMİN!"+'\n'+"Yeni Bakiyeniz: "+bakiyem+" TL");//html'de at resmine verdiğimiz id ile hangi atın birinci olduğunu alert ile gösteririz.
        }
    }
}
var ondekiAt=null;
function atSırası()
{
    if((At1.offsetLeft>At2.offsetLeft)&&(At1.offsetLeft>At3.offsetLeft)&&(At1.offsetLeft>At4.offsetLeft)&&(At1.offsetLeft>At5.offsetLeft))
    {
        ondekiAt=At1;
    }
    else if((At2.offsetLeft>At1.offsetLeft)&&(At2.offsetLeft>At3.offsetLeft)&&(At2.offsetLeft>At4.offsetLeft)&&(At2.offsetLeft>At5.offsetLeft))
    {
        ondekiAt=At2;
    }
    else if((At3.offsetLeft>At1.offsetLeft)&&(At3.offsetLeft>At2.offsetLeft)&&(At3.offsetLeft>At4.offsetLeft)&&(At3.offsetLeft>At5.offsetLeft))
    {
        ondekiAt=At3;
    }
    else if((At4.offsetLeft>At1.offsetLeft)&&(aAt4.offsetLeft>At2.offsetLeft)&&(At4.offsetLeft>At3.offsetLeft)&&(At4.offsetLeft>At5.offsetLeft))
    {
        ondekiAt=At4;
    }
    else if((At5.offsetLeft>At1.offsetLeft)&&(Aat5.offsetLeft>At2.offsetLeft)&&(At5.offsetLeft>At3.offsetLeft)&&(At5.offsetLeft>At4.offsetLeft))
    {
        ondekiAt=At5;
    }
    return ondekiAt;
}
