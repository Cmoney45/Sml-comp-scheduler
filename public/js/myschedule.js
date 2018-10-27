$(() => {
  $.ajax({
    url: `api/scheduler/${localStorage.getItem(userID)}`,
    type: "GET"
  }).then(data => {
    console.log(data);
  });
});
