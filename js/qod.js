(function($) {
  $(function() {
    let lastPage = '';

    // your code goes here
    // 1: get request to grab random post and append to the DOM
    // add a click event for the "Show Me Another" btn and then run the AJAX code below

    $('#new-quote-button').on('click', function(event) {
      event.preventDefault();

      lastPage = document.URL;

      $.ajax({
        method: 'GET',
        url:
          qod_vars.rest_url +
          'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
      })
        .done(function(data) {
          const post = data[0];
          console.log(post);

          history.pushState(null, null, qod_vars.home_url + '/' + post.slug);
          // 1st value is an object which manages state
          //2nd value is the url title browser tab
          //3rd value is the url in the browser
          //$('.entry-content').html(data[0].content.rendered);
          //$('.entry-title').html(data[0].title.rendered);

          if (data[0]._qod_quote_source_url !== '') {
            $('.source').html(
              `, <a href="${data[0]._qod_quote_source_url}">${data[0]._qod_quote_source}</a>`
            );
          } else {
            $('.source').html(data[0]._qod_quote_source);
          }

          console.log(data);
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
        }); //$.ajax

      //update the page when we click the forward and the back buttons
      $(window).on('popstate', function() {
        // update the url
        window.location.replace(lastPage);
      });
    }); // end of new quote btn event
  }); // end of doc ready
})(jQuery);
