(function($) {
  // your code goes here
  // 1: get request to grab random post and append to the DOM
  // add a click event for the "Show Me Another" btn and then run the AJAX code below
  $('body').append('hello world');

  $('#new-quote-button').on('click', function() {
    $.ajax({
      method: 'GET',
      url:
        qod_vars.rest_url +
        '/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    })
      .done(function(data) {
        $('.entry-content').text(data[0].content.rendered);
        $('.entry-title').text(data[0].title.rendered);
        // same for source

        //   .done(function(data) {
        //       $('.entry-content').text(data[].content.rendered);
      })

      // check if source URL is empty
      //   if( sourceURL is empty ) {
      //       display just the source, no a tag
      //   } else {
      //       display the a tag with the source url and source
      //   }
      // console.log(data); // append the quote to the DOM
      //   })
      .fail(function(error) {
        console.log('an error occurred', error);
      });
  });
})(jQuery);
