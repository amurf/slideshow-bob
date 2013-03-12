var config = {
    'slideshow_id': 'slideshow-bob',
    'items_to_display': 4,
};


create_button('right-button', '>');
create_button('left-button', '<');

var lazy_loader = document.body.getElementsByClassName('lazy-load');
for ( var x = 0; x < lazy_loader.length; x++ ) {
  if ( x < config.items_to_display ) {
      lazy_loader[x].style.display='inline'; 
      continue;
  } else {
      //lazy_loader[x].src = 'lazy-loaded';
  }
}

function create_element( element_type, element_id, element_text ) {
    var element = document.createElement(element_type);
    element.id          = element_id;
    element.textContent = element_text;
    return element;
}

function create_button( id, text ) {
    var button = create_element('button', id, text);
    append_slideshow( button );
}

function append_slideshow( element ) {
    document.getElementById(config.slideshow_id).appendChild( element );
}
