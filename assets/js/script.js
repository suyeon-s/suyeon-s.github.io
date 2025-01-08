'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// 모달 열기 및 닫기 기능
document.querySelectorAll('[data-modal]').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = item.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block'; // 모달 열기
  });
});

// 닫기 버튼 클릭 시 모달 닫기
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const modal = btn.closest('.modal');
    modal.style.display = 'none'; // 모달 닫기
  });
});

// 모달 외부 클릭 시 모달 닫기
window.addEventListener('click', function(e) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});


function showResearch() {
  document.getElementById('researchSection').style.display = 'block';
  document.getElementById('extracurricularSection').style.display = 'none';
}

function showExtracurricular() {
  document.getElementById('researchSection').style.display = 'none';
  document.getElementById('extracurricularSection').style.display = 'block';
}





  // 필터 버튼 클릭 시 필터링 동작
  document.querySelectorAll('[data-filter-btn]').forEach(button => {
    button.addEventListener('click', () => {
      // 모든 버튼에서 'active' 클래스 제거
      document.querySelectorAll('[data-filter-btn]').forEach(btn => btn.classList.remove('active'));
      // 클릭한 버튼에 'active' 클래스 추가
      button.classList.add('active');

      // 선택된 필터 값 가져오기
      const filterValue = button.textContent.trim().toLowerCase();

      // 모든 타임라인 항목을 가져와서 필터링
      document.querySelectorAll('.timeline-item').forEach(item => {
        const itemCategory = item.getAttribute('data-category').toLowerCase();

        // 'All'을 선택한 경우 모든 항목 표시, 그렇지 않으면 해당 카테고리만 표시
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block'; // 항목 보이기
        } else {
          item.style.display = 'none'; // 항목 숨기기
        }
      });
    });
  });

  
const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  // 버튼 클릭 이벤트 추가
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
  
      // 버튼 스타일 업데이트
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      // 프로젝트 아이템 필터링
      projectItems.forEach(item => {
        const itemCategory = item.dataset.category;
  
        // 'all'일 경우 모두 보이기
        if (category === 'all' || itemCategory === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });


  


  const listStyleChangeStartY = 373
  const listStyleChangeEndY = 1585

  const listItems = document.querySelectorAll('.list-item')

  const division = (listStyleChangeEndY - listStyleChangeStartY) / listItems.length

  const videoPlayBack = 500

  const videoElement = document.getElementById('video')
  const videoSection = document.getElementById("video-section")

  const fixedWrapper = document.getElementById("fixed-wrapper")

  const fixedDescription = document.getElementById("fixed-description")

  function centerElement(elementId, video) {
    const element = document.getElementById(elementId);
    const parent = element.parentElement;
    

    if (window.scrollY > parent.offsetTop - ((document.documentElement.clientHeight - element.offsetHeight) / 2)) {
      element.style.position = "fixed";
      element.style.top = "50%"
      element.style.left = "50%"
      element.style.transform = "translate(-50%, -50%)"

      if (video) video.currentTime = (window.scrollY - videoSection.offsetTop) / videoPlayBack
    } else {
      element.style.position = "relative"
      element.style.top = "initial"
      element.style.left = "initial"
      element.style.transform = "initial"
    }
  }
  

  
  videoElement.addEventListener("loadedmetadata", () => {
    document.getElementById("video-section").style.height = videoElement.duration * videoPlayBack + "px";
  })

  const fixedDescriptionAppearTiming = 3470
  const fixedDescriptionAppearEnds = 3800

  window.addEventListener("scroll", () => {
    if (document.getElementById("on")) document.getElementById("on").removeAttribute("id")

    centerElement("fixed-wrapper", videoElement)

    if (window.scrollY > videoSection.offsetTop + videoSection.offsetHeight - (fixedWrapper.offsetHeight + (document.documentElement.clientHeight - fixedWrapper.offsetHeight) / 2)) {
      fixedWrapper.style.position = "relative"
      fixedWrapper.style.top = "initial"
      fixedWrapper.style.left = "initial"
      fixedWrapper.style.transform = `translateY(${videoSection.offsetHeight - fixedWrapper.offsetHeight}px)`
    }

    if (window.scrollY > fixedDescriptionAppearTiming && window.scrollY < fixedDescriptionAppearEnds) {
      fixedDescription.style.transform = `translateY(${fixedDescriptionAppearEnds - window.scrollY}px)`
      fixedDescription.style.opacity = (window.scrollY - fixedDescriptionAppearTiming) / 300
    } else if (window.scrollY > fixedDescriptionAppearEnds) {
      fixedDescription.style.transform = `translateY(0px)`
      fixedDescription.style.opacity = 1
    } else {
      fixedDescription.style.transform = `translateY(100px)`
      fixedDescription.style.opacity = 0
    }
  })


  videoElement.addEventListener("ended", function() {
    console.log("Video has ended");
    window.scrollTo(0, 0); // 비디오가 끝나면 페이지를 맨 위로 스크롤
  });
  