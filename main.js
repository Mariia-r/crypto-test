function selectionCurrency (from, to) {
    $('select[name="fromCurrency"] option[value='+from+']').prop('selected', true);
    $('select[name="toCurrency"] option[value='+to+']').prop('selected', true);
};
