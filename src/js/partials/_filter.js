const filterBox = document.querySelectorAll(".job-card__tags-content");
const filterModal = document.querySelector(".filter-modal");
const clearFilters = document.querySelector(".filter-modal__control-clear");
const filterText = document.querySelector(".filters-content__data");
const filterModalBox = document.querySelector(".filter-modal__box");
var filterModalBoxAll = document.querySelectorAll(".filter-modal__box");
const jobCards = document.querySelectorAll(".job-card");
const filterWrapper = document.querySelector(".filter-wrapper");
const filtersContent = document.querySelector(".filters-content");
var removeFilterButton = document.querySelectorAll(".filters-content__control");
var filterList = [];

filterBox.forEach((element) => {
  element.addEventListener("click", () => {
    filterModal.classList.remove("hide");
    addFilterToModal(element.innerHTML);
    filterSelection();
  });
});

const addFilterToModal = (text) => {
  if (!filterList.includes(text)) {
    filterList.push(text);
    if (filterList.length === 1) {
      filterText.innerHTML = text;
      filterModalBox.classList.remove("hide");
    } else {
      var cloneFilterBox = filterModalBox.cloneNode(true);
      cloneFilterBox.children[0].children[0].innerHTML = text;
      filterWrapper.appendChild(cloneFilterBox);
    }
  }

  removeFilterButton = document.querySelectorAll(".filters-content__control");

  removeFilterButton.forEach((element) => {
    element.addEventListener("click", () => {
      var parent = element.closest(".filter-modal__box");
      parent.classList.add("hide");
      unFilterSelection(parent.children[0].children[0].innerHTML);
      if (filterList.length === 0) filterModal.classList.add("hide");
    });
  });
};

function filterSelection() {
  for (i = 0; i < jobCards.length; i++) {
    jobCards[i].classList.add("hide");

    if (
      filterList.every((v) => Array.from(jobCards[i].classList).includes(v))
    ) {
      jobCards[i].classList.remove("hide");
    }
  }
}

clearFilters.addEventListener("click", () => {
  filterModal.classList.add("hide");
  filterList = [];
  filterModalBoxAll = document.querySelectorAll(".filter-modal__box");
  filterModalBoxAll.forEach((box) => box.classList.add("hide"));
  jobCards.forEach((card) => {
    card.classList.remove("hide");
  });
});

function unFilterSelection(text) {
  for (i = 0; i < jobCards.length; i++) {
    if (Array.from(jobCards[i].classList).includes(text)) {
      var index = filterList.indexOf(text);
      if (index !== -1) filterList.splice(index, 1);
      filterSelection();
    }
  }
}
