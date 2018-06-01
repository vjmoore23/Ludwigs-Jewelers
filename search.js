function search(t)
{

if (t.length < 1)
{
document.form.eingabe.focus();
alert("You must enter something to Search for in the text field.");
return;
}
else
{
var auswahl = document.ra.r[1].checked ? 1 : 0 || document.ra.r[0].checked
? 2 : 0 || document.ra.r[2].checked ? 3 : 0 || document.ra.r[3].checked ?
4 : 0 ||document.ra.r[5].checked ? 5 : 0 ||document.ra.r[6].checked ? 
6 : 0 ||document.ra.r[7].checked ? 7 : 0 ||document.ra.r[8].checked ? 
8 : 0 ||document.ra.r[9].checked ? 9 : 0 ||document.ra.r[10].checked ?
 10 : 0 ||document.ra.r[11].checked ? 11 : 0 ||document.ra.r[12].checked ? 12 : 0 ||;
document.open("text/html");


document.writeln ('<HTML>');
document.writeln ('<HEAD>');
document.writeln ('<TITLE>Search Results</TITLE>');


document.writeln ('<script language="JavaScript1.1" src="http://www.URL.com/search.js"></script>');


document.writeln ('</HEAD>');
document.writeln ('<BODY TEXT="#000000" SIZE=3 BGCOLOR="#FFFFFF" LINK="#0000FF" VLINK="#0000FF" ALINK="#0000FF" onLoad="document.form.eingabe.focus();">');

d=new Array(); // d = keywords
h=new Array(); // h = path/filename
u=new Array(); // t = title of page
a=new Array(); // a = author
b=new Array(); // b = summary

d[0] = 'bridal,engagement,ring,wedding,bands';

h[0] = 'http://nova.umuc.edu/~ct386e14/finalweb/bridal.html';

u[0] = 'Ludwigs Jewelers- Bridal Jewelry';

a[0] = 'Vanessa Moore';

b[0] = 'Ludwigs Jewelers provides a wide variety of bridal jewelry including engagement rings and wedding band sets.';



d[1] = 'children,reed,barton,child,gift';

h[1] = 'http://nova.umuc.edu/~ct386e14/finalweb/child.html';

u[1] = 'Ludwigs Jewelers- Children Gifts';

a[1] = 'Vanessa Moore';

b[1] = 'Ludwigs Jewelers carries childrens gifts from Reed and Barton.';



d[2] = 'diamond,jewelry,ring,earring,bracelet,mounting';

h[2] = 'http://nova.umuc.edu/~ct386e14/finalweb/diamond.html';

u[2] = 'Ludwigs Jewelers- Diamond Jewelry';

a[2] = 'Vanessa Moore';

b[2] = 'Ludwigs Jewelers carries diamond jewelry set in 14k yellow or white gold mountings available in rings, earrings, and pendants.';


d[3] = 'gemstone,jewelry,ring,earring,bracelet';

h[3] = 'http://nova.umuc.edu/~ct386e14/finalweb/gemstone.html';

u[3] = 'Ludwigs Jewelers- Gemstone Jewelry';

a[3] = 'Vanessa Moore';

b[3] = 'Ludwigs Jewelers has a wide selection of gemstone jewelry and gemstone varieties.';


d[4] = 'watches,gifts,giftware,child';

h[4] = 'http://nova.umuc.edu/~ct386e14/finalweb/gifts.html';

u[4] = 'Ludwigs Jewelers- Gifts';

a[4] = 'Vanessa Moore';

b[4] = 'Ludwigs Jewelers carries a wide selection of gifts and giftware, ranging from childrens gifts to jewelry boxes.';


d[5] = 'family,ludwig,jewelers,civil,war,family,history';

h[5] = 'http://nova.umuc.edu/~ct386e14/finalweb/history.html';

u[5] = 'Ludwigs Jewelers- History';

a[5] = 'Vanessa Moore';

b[5] = 'Ludwigs Jewelers has been in business for over 150 years and survived the burning of Chambersburg during the Civil War. Ludwigs Jewelers is now owned and operated by the 3rd and 4th generations of the Ludwig family.';


d[6] = 'ludwigs,homepage,index,jewelry,gift,diamond,gemstone';

h[6] = 'http://nova.umuc.edu/~ct386e14/finalweb/index.html';

u[6] = 'Ludwigs Jewelers- Homepage';

a[6] = 'Vanessa Moore';

b[6] = 'Ludwigs Jewelers is a family owned business located in Chambersburg, Pennslyvania. Ludwig's Jewelers carries a unique selection of diamond jewelry, gemstone jewelry, bridal jewelry, watches, giftware, and so much more.';


d[7] = 'jewelry,diamond,gemstone,ring,necklace,earring,bracelet,pendant';

h[7] = 'http://nova.umuc.edu/~ct386e14/finalweb/jewelry.html';

u[7] = 'Ludwigs Jewelers- Jewelry';

a[7] = 'Vanessa Moore';

b[7] = 'Ludwigs Jewelers carries a wide selection of jewelry with diamond and gemstone mountings.';


d[8] = 'location,directions,facebook,address,phone,number,street';

h[8] = 'http://nova.umuc.edu/~ct386e14/finalweb/location.html';

u[8] = 'Ludwigs Jewelers- Location';

a[8] = 'Vanessa Moore';

b[8] = 'Ludwigs Jewelers is located at 121 South Main Street in Chambersburg, PA.';


d[9] = 'repair,solder';

h[9] = 'http://nova.umuc.edu/~ct386e14/finalweb/repair.html';

u[9] = 'Ludwigs Jewelers- Repair Services';

a[9] = 'Vanessa Moore';

b[9] = 'Ludwigs Jewelers provides repair services on almost all types of jewelry.';


d[10] = 'silver,jewelry,ring,earring,necklace,pendant';

h[10] = 'http://nova.umuc.edu/~ct386e14/finalweb/silver.html';

u[10] = 'Ludwigs Jewelers- Silver Jewelry';

a[10] = 'Vanessa Moore';

b[10] = 'Ludwigs Jewelers carries a wide selection of Silver Jewelry.';


d[11] = 'silver,jewelry,ring,earring,necklace,pendant';

h[11] = 'http://nova.umuc.edu/~ct386e14/finalweb/silver.html';

u[11] = 'Ludwigs Jewelers- Silver Jewelry';

a[11] = 'Vanessa Moore';

b[11] = 'Ludwigs Jewelers carries a wide selection of Silver Jewelry.';


d[12] = 'watch,watches,seiko,citizen,eco,drive';

h[12] = 'http://nova.umuc.edu/~ct386e14/finalweb/watches.html';

u[12] = 'Ludwigs Jewelers- Watches';

a[12] = 'Vanessa Moore';

b[12] = 'Ludwigs Jewelers carries a wide selection of watches including the brand names Citizen and Seiko.';

var i=0;
var j=0;
var k=0;
var l=0;

var start=0;
var gesetzt=0;
var laenge=0;
var zaehler=0;
var kleinst=0;
var anzahl=0;
var end=d.length+1;
var tmpwort;
z = t.toLowerCase();
liste = new Array();
liste2 = new Array();

for (i=0; i < d.length; i++)
liste[i] = i;
liste[i] = end;
tquot = new Array();
eingabe = new Array();
eingabe[0] = "";

for (i=0;z.charAt(i) == ' ' || z.charAt(i) == '+' || z.charAt(i) == '&';
i++)
;
for (; i < z.length; i++)
{
if (z.charAt(i) == ' ' || z.charAt(i) == '+' || z.charAt(i) == '&')
{
zaehler++;
for (i++;z.charAt(i) == ' ' || z.charAt(i) == '+' || z.charAt(i) == '&';
i++)
;
if (i != z.length)
eingabe[zaehler] = "";
i--;
}
else
{
eingabe[zaehler] += z.charAt(i);
}
}
zaehler=0;

for (m=0; m < eingabe.length; m++)
{
for (i=0; liste[i] != end && d[liste[i]]; i++)
{
for (l=0; l < d[liste[i]].length;)
{
for (j=0; d[liste[i]].charAt(l+j) != ',' && l+j < d[liste[i]].length; j++)
;
for (k=0; k < j+1; k++)
{
if (eingabe[m].charAt(k) && d[liste[i]].charAt(l+k).toLowerCase() == eingabe[m].charAt(k))
{
if (!gesetzt)
{
start=l+k;
gesetzt=1;
}
}
else if (!eingabe[m].charAt(k) && gesetzt)
{
if (auswahl == 1 || auswahl == 3)
{
laenge=j+l-start;
liste[zaehler] = liste[i];
if (!tquot[i])
tquot[i] = 0;
tquot[zaehler] = (m*tquot[i]+(eval (eingabe[m].length / laenge * 100))) /
(m+1);
zaehler++;
k=j+1;
l = d[liste[i]].length;
}
else
{
laenge=j+l-start;
liste2[i] = 1;
if (tquot[i])
{
if (tquot[i] < eingabe[m].length / laenge * 100)
tquot[i] = eingabe[m].length / laenge * 100;
}
else
tquot[i] = eingabe[m].length / laenge * 100;
k=j+1;
l = d[liste[i]].length;
}
}
else
{
k = j;
gesetzt = 0;
}
}
l+=j+1;
gesetzt = 0;
}
}
if (auswahl == 1 || auswahl == 3)
{
liste[zaehler] = end;
tquot[zaehler] = 0;
if (m+1 < eingabe.length)
zaehler=0;
}
}
if (auswahl == 2 || auswahl == 4)
{
for (i=0; i<d.length; i++)
{
if (liste2[i])
{
liste[zaehler] = i;
tquot[zaehler] = tquot[i];
zaehler++;
}
}
liste[zaehler] = end;
tquot[zaehler] = 0;
}
if (auswahl == 3 || auswahl == 4)
{
for (i=0; i < d.length; i++)
liste2[i] = i;
for (i=0; liste[i] != end; i++)
liste2[liste[i]] = end;
zaehler = 0;
for (i=0; i<liste2.length; i++)
{
if (liste2[i] != end)
{
liste[zaehler] = liste2[i];
tquot[zaehler] = 100;
zaehler++;
}
}
tquot[zaehler] = 0;
}

document.writeln ('<FONT SIZE=3>Search Results for <B>&quot;'+t+'&quot;</B>');
document.writeln ('<BR><BR><FONT SIZE=3>Pages Found: <B>'+zaehler+'</B></FONT>');
document.writeln ('<HR>');
document.writeln (' <OL>');
gesetzt = 0;

if (zaehler)
{

for (i=0; tquot[i]; i++)
{
for (j=i+1; tquot[j]; j++)
{
if (tquot[i] < tquot[j])
{
k = liste[j];
liste[j] = liste[i];
liste[i] = k;
k = tquot[j];
tquot[j] = tquot[i];
tquot[i] = k;
}

}
}
for (i=0; tquot[i]; i++)
{
stichwoerter = new Array();
if (auswahl == 1 || auswahl == 2)
{
zaehler = 0;
for (j=0; eingabe[j]; j++)
{
gesetzt = 1;
laenge = 0;
var zeile = d[liste[i]].toLowerCase();
if (zeile.indexOf(eingabe[j]) != -1)
{
laenge += zeile.indexOf(eingabe[j])+eingabe[j].length;
if (laenge-eingabe[j].length-1 != -1)
{
while (zeile.substring(laenge).indexOf(eingabe[j])!=-1 && zeile.charAt(laenge-eingabe[j].length-1)
!= ',' && zeile.charAt(laenge-eingabe[j].length-1))
laenge += zeile.substring(laenge).indexOf(eingabe[j])+eingabe[j].length;
if (zeile.substring(laenge).indexOf(',') == -1 && (zeile.charAt(laenge-eingabe[j].length-1)
== ',' || !zeile.charAt(laenge-eingabe[j].length-1)))
k = zeile.length;
else if (zeile.substring(laenge).indexOf(',') != -1 && (zeile.charAt(laenge-eingabe[j].length-1)
== ',' || !zeile.charAt(laenge-eingabe[j].length-1)))
k = zeile.substring(laenge).indexOf(',')+laenge;
else
gesetzt = 0;
}
else
{
if (zeile.substring(laenge).indexOf(',') != -1)
k = zeile.substring(laenge).indexOf(',') + laenge;
else
k = zeile.length;
}
}
else
gesetzt = 0;
if (gesetzt) {
if (!zaehler) tmpwort = d[liste[i]].substring(laenge-eingabe[j].length, laenge)
+ d[liste[i]].substring(laenge, k);
stichwoerter[zaehler] = '<i><u>' + d[liste[i]].substring(laenge-eingabe[j].length,
laenge) + '</i></u>' + d[liste[i]].substring(laenge, k);
}
else
stichwoerter[zaehler] = ' ';
zaehler++;
}
}
document.write ('     <LI>['+Math.round(tquot[i])+'%] <font face="Arial,Helvetica, sans-serif;"><strong>'
+ u[liste[i]] +'</strong><BR><A HREF="'+h[liste[i]]+'#'+tmpwort+'"TARGET="_Blank">'+h[liste[i]]+'</A><BR>\n'
+ '     <font size=-1><b>Author: </b><i>' +a[liste[i]]+ '</I><br>\n'
+ '     <b>Description:&nbsp;&nbsp;</b>' +b[liste[i]] + '\n');
gesetzt = 0;
if (auswahl == 1 || auswahl == 2)
{
document.write('     <br><b><i>Keywords: </i></b><font face="Courier New,Courier">');
for (j=0; j < zaehler; j++)
{
if (stichwoerter[j] != ' ' && gesetzt)
document.write(', ' + stichwoerter[j]);
else if (stichwoerter[j] != ' ')
{
document.write(stichwoerter[j]);
gesetzt = 1;
}
}
}
document.writeln ('\n     </font></font></font></li><br><br>');
}
document.writeln (' </OL>');
}
else
{
document.writeln (' </OL>');
document.writeln (' <BR><FONT SIZE=5><B>Sorry, but no results were found.</B></FONT>');
}

document.writeln ('<BR>');
document.writeln ('</TD></TR><TR><TD COLSPAN=2><HR><P ALIGN="LEFT"><FONT SIZE=5><A HREF="javascript:history.go(-1);"><B>Back to Previous Page</B></A></TD></TR></TABLE></P></BODY></HTML>');

}
document.close();
if (navigator.appName == "Netscape" && navigator.appVersion.substring(0,1)
== 3)
history.go(0);
}
function loesche()
{
document.form.reset();
document.form.eingabe.focus();
}
