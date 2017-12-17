/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi and displaySearchData functions. When you're done, this app should allow a user to search for a specific dog breed, and display a random image of that dog breed. You should make requests to this API: https://dog.ceo/dog-api/ . Also make any necessary adjustments to make this app accessible. */


function getDataFromApi(searchTerm, callback) {
    let URL = `https://dog.ceo/api/breed/${searchTerm}/images`;
    console.log(callback);
    $.getJSON(URL,callback);
    console.log(URL);
  }
  
  function displaySearchData(data) {
    console.log(data,'data');
    $(".js-search-results").html(`<img src="${data.message[0]}"></img>`);
  }
  
  function watchSubmit() {
    $('.js-search-form').submit(event => {
      event.preventDefault();
      let queryTarget = $(event.currentTarget).find('.js-query');
      let query = queryTarget.val();
      // clear out the input
      queryTarget.val("");
      getDataFromApi(query, displaySearchData);
    });
  }
  
  $(watchSubmit);