
let number = 0;
let data = []; // ajax.jsonから取得したデータを格納するための変数を追加
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {

	const request = new XMLHttpRequest();

	request.onreadystatechange = function()
	{
		if (request.readyState == 4)
		{
        	if(request.status == 200)
			{
			
				data = request.response;
	   		}
    	}
    }
    
	request.open("GET", "ajax.json");
	request.responseType = "json";
	request.send(null);

}
	
function changeVideo()
{
 		if(data.length == 0)
		{
			data = getData();
		}
    button.addEventListener('click', e => {
	  
		  
		  titleArea.innerHTML = data[number].title;
		  contentArea.innerHTML = data[number].content;
		  videoArea.setAttribute("src", data[number].url);
		  number == 2 ? number = 0 : number++;

    })
}
window.onload = changeVideo;