$.getJSON("http://proto328.haaga-helia.fi:8080/projekti/kyselyt/kysymyksetJSON", function( data ) {
var items = [];
$.each( data, function( key, d )  {
    
/*    	if(d.id == 0) {
		items.push("<h1>"+d.otsikko+"</h1><hr class='small'>");
	}*/
	
	if (d.tyyppi=="number") {
		items.push("<div><h4>"+d.teksti+"</h4>");
		items.push( "<input type=" + d.tyyppi + " class='form-control' id="  +d.nimi+ " placeholder='"+d.teksti+"'></div><br>");
	}
    
    if (d.tyyppi=="text") {
		items.push("<div><h4>"+d.teksti+"</h4>");
		items.push( "<input type=" + d.tyyppi + " class='form-control' id="  +d.nimi+ " placeholder='"+d.teksti+"'></div><br>");
	}

	if(d.tyyppi == "textarea") {
		items.push("<br><h4>"+d.teksti+"</h4>");
		items.push( "<textarea type=" + d.tyyppi + " rows='4' class='form-control' id="  +d.nimi+ " placeholder=''></textarea><br>");
	}

	if(d.tyyppi == "radio") {
      items.push("<br><div><h4>"+d.teksti+"</h4>");
        for (i=0;i<d.monivalinnat.length;i++) {
			items.push("<label class='radio-inline'><input type='radio' name='"+d.nimi+"' value='"+d.monivalinnat[i].id+"'>  "+d.monivalinnat[i].vaihtoehto+"</label>");
        }
		items.push("</div>");
	}
    
    if (d.tyyppi == "emoji") {
        items.push("<br><div><h4>"+d.teksti+"</h4>");
        for (i=0;i<d.monivalinnat.length;i++) {
			items.push("<label class='radio-inline'><input class='emoji' type='radio' name='"+d.nimi+"' value='"+d.monivalinnat[i].id+"'><img for='emoji"+d.monivalinnat[i].vaihtoehto+"' id=emoji"+d.monivalinnat[i].vaihtoehto+" src='img/Emoji"+d.monivalinnat[i].vaihtoehto+".png'></label>");
        }
		items.push("</div>");
    }

});
    

$( "<div>", {
"class": "form-group",
html: items.join( "" )
}).appendTo( "form" );
});