function selectionCurrency (from, to) {
    $('div[id="selectFromCurrency"] input[class="dd-selected-value"]').prop('value', from);
    $('div[id="selectFromCurrency"] a[class="dd-selected"] img').prop('src', './img/'+from+'.png');
    $('div[id="selectToCurrency"] input[class="dd-selected-value"]').prop('value', to);
    $('div[id="selectToCurrency"] a[class="dd-selected"] img').prop('src', './img/'+to+'.png');

    let text = (direction) => {
      if (direction === 'Card') {
        return "Visa/MasterCard UAH";
      } else {
        return direction;
      }
    }

    $('div[id="selectFromCurrency"] a[class="dd-selected"] label').html(text(from));
    $('div[id="selectToCurrency"] a[class="dd-selected"] label').html(text(to));
};


$(document).ready(function(){
  $('#selectToCurrency').ddslick({
    width: "100%",
    imagePosition: "left",
    heightOption: "30px",
});
});

$(document).ready(function(){
  $('#selectFromCurrency').ddslick({
    width: "100%",
    imagePosition: "left",
    heightOption: "30px",
  });
});
