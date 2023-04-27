// const categories = document.querySelectorAll(".course__category");
// const buttonsNew = categories[0].querySelectorAll("button");
// const buttonsHot = categories[1].querySelectorAll("button");

// const courses = document.querySelectorAll(".courses");
// const newCourses = [...courses].slice(0, 3);
// const hotCourses = [...courses].slice(3);

// const removeActivatedButton = (buttons) =>
//   buttons.forEach((button) =>
//     button.classList.remove("course__category--active")
//   );

// const hideAllCourses = (allCourses) =>
//   allCourses.forEach((courses) => courses.classList.add("courses--hidden"));

// const addActivatedButton = (e) =>
//   e.target.classList.add("course__category--active");

// const changeCategory = (
//   e,
//   buttons,
//   courses,
//   indexOfSelectedCategoryOfCourses
// ) => {
//   removeActivatedButton(buttons);
//   hideAllCourses(courses);

//   addActivatedButton(e);
//   courses[indexOfSelectedCategoryOfCourses].classList.remove("courses--hidden");
// };

// buttonsNew.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const indexOfSelectedCategoryOfCourses = [...buttonsNew].indexOf(e.target);
//     changeCategory(e, buttonsNew, newCourses, indexOfSelectedCategoryOfCourses);
//   });
// });

// buttonsHot.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const indexOfSelectedCategoryOfCourses = [...buttonsHot].indexOf(e.target);
//     changeCategory(e, buttonsHot, hotCourses, indexOfSelectedCategoryOfCourses);
//   });
// });

const footerLanguagesButton = document.querySelector(
  ".footer_languages_button"
);

const footerLanguagesSelector = document.querySelector(
  ".footer_languages_selector"
);

footerLanguagesButton.addEventListener("click", () => {
  footerLanguagesSelector.classList.toggle("footer_languages_selector--show");
});

window.addEventListener("click", (e) => {
  if (
    !e.target.closest(".footer_languages_button") &&
    !e.target.closest(".footer_languages_selector_button")
  ) {
    footerLanguagesSelector.classList.remove("footer_languages_selector--show");
  }
});
