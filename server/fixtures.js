if (Rests.find().count() === 0) {
	
	    var data = JSON.parse(Assets.getText("rests100Data.json"));
   
	      data.forEach(function (item, index, array) {
	            Rests.insert(item);
	        });
	  
	
}