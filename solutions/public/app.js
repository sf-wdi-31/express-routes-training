$(document).ready(function(){
  console.log('hi');
  $('#new-artwork-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: '/artworks',
      method: 'POST',
      data: $('#new-artwork-form').serialize(),
      success: handleNewArtworkSuccess,
      error: handleNewArtworkError
    });
  });

  function handleNewArtworkSuccess(newArtworkResponse){
    console.log(newArtworkResponse);
  }

  function handleNewArtworkError(jqXHR, status, error){
    console.log('error:', error);
  }
});
