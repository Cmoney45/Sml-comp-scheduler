$(() => {
  $("#submit").on("click", event => {
    event.preventDefault();
    let userAccount = $("#username").val().trim();
    let password = $("#password").val().trim();

    $.get(`/api/users/${userAccount}`, data => {
      if (data != null && data.userAccount === userAccount && data.userPassword === password) {
        localStorage.setItem("userID", data.id)
        localStorage.setItem("isManager", data.isManager)
        localStorage.setItem("CompanyId", data.CompanyId)

        let userInfo = {
          userID: localStorage.getItem("userID"),
          isManager: localStorage.getItem("isManager"),
          CompanyId: localStorage.getItem("CompanyId")
        };

        document.location.href = `/company/${userInfo.CompanyId}/${userInfo.userID}/${userInfo.isManager}`;
      } else {
        alert("ERROR YOU ARE NOT PERMITTED HERE!");
      }
    });
  });
});
