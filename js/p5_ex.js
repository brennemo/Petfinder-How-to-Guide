function requestJSONP(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function getKitty(data) {
    var response = data.petfinder.pet; 
    
    var image = new Image();
    image.src = response.media.photos.photo[3].$t;
    image.setAttribute('class', 'img-responsive');
    image.setAttribute('alt', response.name.$t);
    
    document.getElementById('image').appendChild(image);
    
    document.getElementById('name').textContent = response.name.$t;
    document.getElementById('age').textContent = response.age.$t;
    document.getElementById('sex').textContent = response.sex.$t;  
    
    for(var i = 0; i < response.breeds.breed.length; i++){
        var newItem = document.createElement("li");
        var textNode = document.createTextNode(response.breeds.breed[i].$t);
        newItem.appendChild(textNode);
        document.getElementById('breedlist').appendChild(newItem);
    }
    
    document.getElementById('city').textContent = response.contact.city.$t + ', ' + response.contact.state.$t;      
}
    
var url = baseURL + 'pet.get?format=json&key=' + key + '&id=35023361&callback=getKitty';
requestJSONP(url);   
