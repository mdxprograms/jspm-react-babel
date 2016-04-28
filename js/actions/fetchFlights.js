let url = '/js/data/flight_data.json';
let data = fetch(url).then(function(response){
  console.log(response.json());
});

// export default data;
