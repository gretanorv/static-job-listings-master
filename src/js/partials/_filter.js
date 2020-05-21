const filterBox = document.querySelectorAll(".job-card__tags-content");
const filterModal = document.querySelector(".filter-modal");
const clearFilters = document.querySelector(".filter-modal__control-clear");
const filterText = document.querySelector(".filters-content__data");
const removeFilterButton = document.querySelector(".filters-content__control");
const removeFilter = document.querySelector(".filter-modal__box");
const jobCards = document.querySelectorAll(".job-card");
var filterList = [];

filterBox.forEach((element) => {
  element.addEventListener("click", () => {
    filterModal.classList.remove("hide");
    addFilterToModal(element.innerHTML);
    //call function to push to list
    addToFilterList(element);
    filterSelection(element.innerHTML);
  });

  removeFilterButton.addEventListener("click", () => {
    // removeFilter.classList.add("hide");
    unFilterSelection(element.innerHTML);
  });
});

clearFilters.addEventListener("click", () => {
  filterModal.classList.add("hide");
  filterSelection("all");
});

const addFilterToModal = (text) => {
  filterText.innerHTML = text;
};

// removeFilterButton.addEventListener("click", () => {
//   // removeFilter.classList.add("hide");
//   filterSelection(element.innerHTML);
// });

const addToFilterList = (item) => {
  console.log(filterList);
  if (!filterList.includes(item)) {
    filterList.push(item.innerHTML);
  }
};

//
function filterSelection(c) {
  //padaryti kad i filterList detu ir tada is jo forEach praleistu zemiau esanti koda
  if (c == "all") c = "";
  for (i = 0; i < jobCards.length; i++) {
    jobCards[i].classList.add("hide");
    if (jobCards[i].className.indexOf(c) > -1)
      jobCards[i].classList.remove("hide");
  }
}

function unFilterSelection(c) {
  for (i = 0; i < jobCards.length; i++) {
    jobCards[i].classList.remove("hide");
  }
}
