

//function for creating continent
  function createContinent(name, id) {
      return {
      name: name,
      id: id,
};
}
/**
* Helper function for creating country
**/
function createCountry(name, id, continent) {
return {
  name: name,
  id: id,
  continent: continent,
};
}

/**
* Removes all options but the first value in a given select
* and than selects the only remaining option
**/
function removeOptions(select) {
while (select.options.length > 1) {                
  select.remove(1);
}

select.value = "";
}

/**
* Adds given options to a given select
**/
function addOptions(select, options) {
console.log(select, options)
options.forEach(function(option) {
  select.options.add(new Option(option.name, option.id));
});
}

/**
* Select elements references
**/
var continentSelect = document.getElementById('continent-select');
var countrySelect = document.getElementById('country-select');

/**
* Available Continents
**/
var continent = [
createContinent('Asia', 'asia'),
createContinent('Europe', 'europe'),
];

/**
* Available models
**/
var country = [
createCountry('India', 'India', 'asia'),
createCountry('Afghanistan', 'Afghanistan', 'asia'),
createCountry('Italy', 'Italy', 'europe'),
createCountry('England', 'England', 'europe'),
];


//Updates country
function updateCountry() {
  alert("country");
var selectedContinent = continentSelect.value;
var options = country.filter(function(country) {
  return country.continent === selectedContinent;
});

removeOptions(countrySelect);
addOptions(countrySelect, options);
}

alert("alert 3");


//Adds options to continent select
addOptions(continentSelect, continent);