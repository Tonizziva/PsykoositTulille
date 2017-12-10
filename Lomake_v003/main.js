$.getJSON( "Kymysykset.json", function( data ) {
var items = [];
$.each( data, function( key, d )  {
	if(d.id == 0) {
		items.push("<h1>"+d.otsikko+"</h1><hr class='small'>");
	}
    
    if (d.type=="number") {
		items.push("<div><h4>"+d.kysymysteksti+"</h4>");
		items.push( "<input type=" + d.type + " class='form-control' id="  +d.name+ " ></div><br>");
	}
	
	if (d.type=="text") {
		items.push("<div><h4>"+d.kysymysteksti+"</h4>");
		items.push( "<input type=" + d.type + " class='form-control' id="  +d.name+ " placeholder="+d.esimerkki+"></div><br>");
	}

	if(d.type == "textarea") {
		items.push("<br><h4>"+d.kysymysteksti+"</h4>");
		items.push( "<textarea type=" + d.type + " rows='4' class='form-control' id="  +d.name+ " placeholder='"+d.esimerkki+"'></textarea><br>");
	}

	if(d.type == "radio") {
      items.push("<br><div><h4>"+d.kysymysteksti+"</h4>");
        for (i=0;i<d.value.length;i++) {
			items.push("<label class='radio-inline'><input type='radio' name='"+d.name+"' value='"+d.value[i]+"'>  "+d.value[i]+"</label>");
        }
		items.push("</div>");
	}
    
    if (d.type == "emoji") {
        /*items.push("<br><label class=''><h4>"+d.kysymysteksti+"</h4>");
        for (i=0;i<d.value.length;i++) {
			items.push("<img id=emoji"+d.value[i]+" src='img/Emoji"+d.value[i]+".png'>");
        }
		items.push("</label>");*/
        
        items.push("<br><div><h4>"+d.kysymysteksti+"</h4>");
        for (i=0;i<d.value.length;i++) {
			items.push("<label class='radio-inline'><input class='emoji' type='radio' name='"+d.name+"' value='"+d.value[i]+"'><img for='emoji"+d.value[i]+"' id=emoji"+d.value[i]+" src='img/Emoji"+d.value[i]+".png'></label>");
        }
		items.push("</div>");
    }

});
    

$( "<div>", {
"class": "form-group",
html: items.join( "" )
}).appendTo( "form" );
});

