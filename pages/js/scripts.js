initSelect2();
multiselect();

function initSelect2() {
  $('.select2').select2({
    placeholder: 'Select an option',
  });
}

function  multiselect () {
  $('#select').multiselect({
    includeSelectAllOption: true,
    nonSelectedText: "Selecionar",
    selectAllText: "Todos",
    allSelectedText: "Todos seleccionados",
    nSelectedText: "seleccionados",
    templates: {
      ul: '<div class="mdivtiselect-container dropdown-menu px-1"></ul>',
      li:'<li class="checkList"><a tabindex="0"><div class="checkbox check-primary"><label for=""></label></div></a></li>',
    },
  });
  checkboxMultiSelect()
};

function checkboxMultiSelect() {
  $('.mdivtiselect-container div.checkbox').each(function (index) {
    var id = 'multiselect-' + index,
      $input = $(this).find('input');
    // Associate the label and the input
    $(this).find('label').attr('for', id);
    $input.attr('id', id);
    // Remove the input from the label wrapper
    $input.detach();
    // Place the input back in before the label
    $input.prependTo($(this));
    $(this).click(function (e) {
      // Prevents the click from bubbling up and hiding the dropdown
      e.stopPropagation();
    });
  });
}