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

var arrLine=data.split(NEW_LINE);

	var text='';
	for( i=0;i<arrLine.length;i++)
	{

		if(arrLine[i]!='')
		{
			if(i==0)
			text+="<li><h4>Phim</h4></li>";
			else
			text+="<li><h4>Diễn viên</h4></li>";
			var arrRow=arrLine[i].split(SPLIT_ROW);
			for(var j=0;j<arrRow.length;j++)
			{
				text+='<li>';
				var arrMember=arrRow[j].split(SPLIT_MEMBER);
				if(i==0)
				{
				text+='<a href="'+site_path+'videos/view?id='+arrMember[0]+'"><img src="'+arrMember[1]+'" width="50px" height="50px" alt="'+arrMember[2]+'-'+site_path+'"> '+arrMember[2]+' </a>';
				}
				else
				{
				text+='<a href="'+site_path+'actor/detail?id='+arrMember[0]+'"> '+arrMember[1]+' </a>';
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

$('#search').hover(function(){$('#search_div').show()},function(){$('#search_div').hide()});

});

$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<3;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
