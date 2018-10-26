$(() => {
  $("#submit").on("click", event => {
    event.preventDefault();
    let userName = $("#username").val().trim();
    let password = $("#password").val().trim();

    $.get(`/api/users/${userName}`, data => {
      if (data != null && data.userAccount === userName && data.userPassword === password) {
        localStorage.setItem("userID", data.id);
        localStorage.setItem("isManager", data.isManager);
        localStorage.setItem("CompanyId", data.CompanyId);
        let userInfo = {
          userID: localStorage.getItem("userID"),
          isManager: localStorage.getItem("isManager"),
          CompanyId: localStorage.getItem("CompanyId")
        };
      } else {
        alert("ERROR YOU ARE NOT PERMITTED HERE!");
      }
    });
  });
});
