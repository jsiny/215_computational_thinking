let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}


function capitalizedSentence(sentence) {
  return sentence.split(' ').map(word => capitalizeWord(word)).join(' ');
}

function removeDots(sentence) {
  return sentence.replace(/\./g, '');
}

function processBands(bands) {
  return bands.map(band => {
    let capitalizedName = capitalizedSentence(band.name);
    let newBandName = removeDots(capitalizedName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    };
  });
}

console.log(processBands(bands));

// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]