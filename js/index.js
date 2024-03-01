const tab = document.querySelectorAll(".tab");

const toggleTab = (el) => {
    const tabButtons = el.querySelectorAll('.btn-tab');
    const tabContent = el.querySelectorAll('.tab-content');
    tabButtons[0].classList.add('active');
    tabContent[0].classList.add('active');
    const removeTab = (el) => {
  for (const i of el) {
    i.classList.remove('active');
  }
    };

    const openTab = (index) => {
        removeTab(tabButtons);
        removeTab(tabContent);
        tabButtons[index].classList.add('active');
        tabContent[index].classList.add('active');
    };

    tabButtons.forEach((el, i) => {
      el.addEventListener('click', () => {
        openTab(i);
      });
    });
  }

[...tab].forEach((el) => toggleTab(el));
