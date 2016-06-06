var keywordlist =  chrome.storage.sync.get("keywords");
//var myMap = new Map();
if(keywordlist == null)
	{
		keywordlist = new Set();
	}
function getKeywordList()
{
	return keywordlist;
}
function updateKeywordList(text)
{

	console.log("Hello"+text);

	var arr = text.match(/\S+/g);

	for(var i=0;i<arr.length;i++)
	{
		keywordlist.add(arr[i].toLowerCase());
    	
	}
	chrome.storage.sync.set("keywords",keywordlist);


}
