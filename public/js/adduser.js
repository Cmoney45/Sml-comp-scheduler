$(() => {
  const makeAvailability = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let checkNum = 1;
    const submit = $("<input type='submit' value='Submit'>");

    days.forEach(day => {
      let num = checkNum.toString();
      const addDiv = $("<div class='custom-control custom-checkbox'>");
      const addInput = $(
        "<input type='checkbox' class='custom-control-input' id=''>"
      );
      const addLable = $("<label class='custom-control-label' for=''>").text(day);
      addInput.attr({ id: `customCheck${num}` });
      addLable.attr({ for: `customCheck${num}` });
      addDiv.append(addInput);
      addDiv.append(addLable);
      $("#userToAdd").append(addDiv);
      checkNum++;
    });
    $("#userToAdd").append(submit);
  };
  makeAvailability();

  //-----Add User functions---------------
  $(document).on("submit", event => {
    event.preventDefault();
    let newUser = {
      userAccount: "account",
      userPassword: $("#passWord")
        .val()
        .trim(),
      userFirstName: $("#firstName")
        .val()
        .trim(),
      userLastName: $("#lastName")
        .val()
        .trim(),
      managerID: 5,
      isManager: $("#customCheck8").is(":checked"),
      sundayAvailable: $("#customCheck1").is(":checked"),
      mondayAvailable: $("#customCheck2").is(":checked"),
      tuesdayAvailable: $("#customCheck3").is(":checked"),
      wednesdayAvailable: $("#customCheck4").is(":checked"),
      thursdayAvailable: $("#customCheck5").is(":checked"),
      fridayAvailable: $("#customCheck6").is(":checked"),
      saturdayAvailable: $("#customCheck7").is(":checked")
    };
    console.log(newUser);
    submitNewUser(newUser);
  });

  const submitNewUser = newUser => {
    $.post("/api/users", newUser, () => {
      location.reload();
    });
  };
});
