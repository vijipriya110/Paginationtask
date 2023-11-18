var request = new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",true);
request.send();

var udata;

request.onload = function() 
{
    if(this.status == 200) 
    {
        var userdata = JSON.parse(this.responseText);
        console.log(userdata);
        udata = userdata;
        data(1);
    }
}

$("button").click(function (){
     
var a = $(this).attr("value");
console.log("value button "+ a);
data(a);
});

nn 

function data(a)
{  
    var output = "";
    for(i=((a-1)*10);i<(a*10);i++)
    {
        output +='<tr>'+
                 '<td>'+ udata[i].id + '</td>'+
                 '<td>'+ udata[i].name + '</td>'+
                 '<td>'+ udata[i].email + '</td>'+ '<br>'
                 '</tr>';
    }
    document.getElementById('user').innerHTML = output;
}