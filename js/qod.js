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
          $('.entry-content').html(post.content.rendered);
          $('.entry-title').html(post.title.rendered);

          if (post._qod_quote_source_url !== '') {
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

    $('#quote-submission-form').on('submit', function(event) {
      event.preventDefault();

      $.ajax({
        method: 'post',
        url: qod_vars.rest_url + 'wp/v2/posts',
        data: {
          // comment_status: 'closed'
          title: $('#quote-author').val(), // get the title value from the form input .val()
          content: $('#quote-content').val(), // try to get the following
          _qod_quote_source: $('#quote-source').val(), // content
          _qod_quote_source_url: $('#quote-source-url').val() // quote source
          // quote source url
          // post status to pending
        },
        beforeSend: function(xhr) {
          xhr.setRequestHeader('X-WP-Nonce', qod_vars.wpapi_nonce);
        }
      })
        .done(function(response) {
          console.log(response);
          //$('#quote-submission-form').slideUp();
          $('#quote-submission-form').slideUp();
          $('.site-content').append('Thank you for submitting a new quote');
          // append a message that says thank for submitting  new quote
        })
        .fail(function(error) {
          console.log(error);
          alert('Something Went Wrong');
          // todo append an error message to the dom for the user
        }); //$.ajax
    });
  }); // end of doc ready
})(jQuery);
