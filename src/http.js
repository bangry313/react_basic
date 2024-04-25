const httpRequest = function(url){
  return fetch(url).then(response => response.json());
}

export default httpRequest;