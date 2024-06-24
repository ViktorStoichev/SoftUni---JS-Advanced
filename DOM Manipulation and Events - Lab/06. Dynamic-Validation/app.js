function validate() {
  const emailElement = document.querySelector("#email");

  emailElement.addEventListener("change", function () {
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    const validEmail = pattern.test(emailElement.value);
    if (!validEmail) {
      emailElement.classList.add("error");
    } else {
      emailElement.classList.remove("error");
    }
  });
}
