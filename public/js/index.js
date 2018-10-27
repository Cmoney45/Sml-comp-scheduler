$(() => {
  let userInfo = {
    userID: localStorage.getItem("userID"),
    isManager: localStorage.getItem("isManager"),
    CompanyId: localStorage.getItem("CompanyId")
  };

  $("#main-home-link").on("click", () => {
    document.location.href = `/${userInfo.CompanyId}/${userInfo.userID}/${userInfo.isManager}`;
  });

  $("#main-scheduler-link").on("click", () => {
    document.location.href = `/${userInfo.CompanyId}/${userInfo.userID}/${userInfo.isManager}/scheduler`;
  });
});
