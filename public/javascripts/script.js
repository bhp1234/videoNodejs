function showCategory(id){
$('#cate'+id).show();
}

function hideCategory(id){
$("#cate"+id).hide();
}

$(document).ready( function(){
$("#searchBox").keyup(function(){
var val=$(this).val();

$.post(site_path+"searching",{value:val},function(data){
alert(data);
var arrLine=data.split(NEW_LINE);
	var text='';
	for( i=0;i<arrLine.length;i++)
	{
		if(arrLine[i]!='')
		{
			if(i==0)
			text+="<li><h4>Sản phẩm</h4></li>";
			else
			text+="<li><h4>Loại sản phẩm</h4></li>";
			var arrRow=arrLine[i].split(SPLIT_ROW);
			for(var j=0;j<arrRow.length;j++)
			{
				text+='<li>';
				var arrMember=arrRow[j].split(SPLIT_MEMBER);
				if(i==0)
				{
				text+='<a href="'+site_path+'product/detail?ProID='+arrMember[0]+'"><img src="'+site_path+'public/products/small/'+arrMember[1]+'" width="50px" height="50px" alt="'+arrMember[2]+'-'+DNS+'"> '+arrMember[2]+' </a>';
				}
				else
				{
				text+='<a href="'+site_path+'product/view?KindId='+arrMember[0]+'"> '+arrMember[1]+' </a>';
				}
				text+='</li>';
			}
		}
	}
	$('#search_result').html(text);
	if(text!='')
	{
	$('#search_div').css("border","1px solid black");
	}
	else
	$('#search_div').css("border","");
	});
	
});
});
