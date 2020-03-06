let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function updateCountry(band, country) {
  band.country = country;
}

function capitalizeBandName(band) {
  band.name = band.name.split(' ').map(word => capitalizeWord(word)).join(' ');
}

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function removeDots(band) {
  band.name = band.name.replace('.', '');
}

function processBands(data) {
  return data.map(band => {
    updateCountry(band, 'Canada');
    capitalizeBandName(band);
    removeDots(band);
    return band;
  })
}

console.log(processBands(bands));

// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]