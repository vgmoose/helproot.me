var devices = {
	"angler"	: "Huawei Nexus 6P",
	"thunderc"	: "LG Optimus M",
	"sholes"	: "Motorola Droid",
	"scorpion_mini"	: "Motorola Droid Razr M",
	"toro"		: "Samsung Galaxy Nexus (LTE)",
	"p4wifi"	: "Samsung Galaxy Tab 10.1 (Wifi)",
	"klte"		: "Samsung Galaxy S5"
}

function makeTable()
{
	var table = "<table>";
	var datalist = "";
	
	for (var key in devices)
	{
		table += "<tr><td>";
		datalist += "<option value=\"";
		
		table += "<a href=\"http://helproot.me/"+key+"\">" + key + "</a>";
		datalist += key;
		
		table += "</td><td>";
		datalist += "\">";
		
		table += devices[key];
		datalist += devices[key];
		
		table += "</td></tr>";
		datalist += "</option>";
	}
	
	table += "</table>";
		
	document.getElementById("tableview").innerHTML = table;
//	document.getElementById("phones").innerHTML = datalist;
	document.getElementById("dname").focus();
}

function go()
{
	location.href = document.getElementById("dname").value;
}
