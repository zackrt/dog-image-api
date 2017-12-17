$(".submit").click((e) => {
  e.preventDefault();
  let searchTerm = $(".text").val();
  $.ajax({
  url: `https://jobs.github.com/positions.json?q=${searchTerm}`
}).done(function(data) {
  $('.results').html(`${data}`);
  })
});