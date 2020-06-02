const filterBox = document.querySelectorAll(".job-card__tags-content");
const filterModal = document.querySelector(".filter-modal");
const clearFilters = document.querySelector(".filter-modal__control-clear");
const filterText = document.querySelector(".filters-content__data");
const filterModalBox = document.querySelector(".filter-modal__box");
const filterModalBoxAll = document.querySelectorAll(".filter-modal__box");
const jobCards = document.querySelectorAll(".job-card");
const filterWrapper = document.querySelector(".filter-wrapper");
const filtersContent = document.querySelector(".filters-content");
var removeFilterButton = document.querySelectorAll(".filters-content__control");
var filterList = [];

filterBox.forEach((element) => {
  element.addEventListener("click", () => {
    filterModal.classList.remove("hide");
    addToFilterList(element);
    addFilterToModal(element.innerHTML);
    filterSelection();
  });
});

clearFilters.addEventListener("click", () => {
  filterModal.classList.add("hide");
  jobCards.forEach((card) => {
    card.classList.remove("hide");
  });
});

const addFilterToModal = (text) => {
  if (filterList.length === 1) {
    filterText.innerHTML = text;
  } else {
    var cloneFilterBox = filterModalBox.cloneNode(true);
    cloneFilterBox.children[0].children[0].innerHTML = text;
    filterWrapper.appendChild(cloneFilterBox);
  }
  var removeFilterButton = document.querySelectorAll(
    ".filters-content__control"
  );
  console.log(removeFilterButton);

  removeFilterButton.forEach((element) => {
    element.addEventListener("click", () => {
      element.closest(".filter-modal__box").classList.add("hide");
    });
  });
};

// removeFilterButton.addEventListener("click", () => {
//   // filterModalBox.classList.add("hide");
//   filterSelection(element.innerHTML);
// });

const addToFilterList = (item) => {
  if (!filterList.includes(item)) {
    filterList.push(item.innerHTML);
  }
};

//
function filterSelection() {
  for (i = 0; i < jobCards.length; i++) {
    jobCards[i].classList.add("hide");

    filterList.every((filter) => {
      if (
        filterList.every((v) => Array.from(jobCards[i].classList).includes(v))
      ) {
        jobCards[i].classList.remove("hide");
      }
    });
  }
}

function unFilterSelection(element) {
  console.log(element);
  for (i = 0; i < jobCards.length; i++) {
    jobCards[i].classList.remove("hide");
  }
}
