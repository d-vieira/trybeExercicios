function changeMainTitle() {
  let titleChange = document.querySelector('#header-container');
  titleChange.className = 'colorSmoothGreen';
}
changeMainTitle();

function changeSubTitleLeftSide() {
  let subtls = document.querySelectorAll('.emergency-tasks h3')
  for (let key in subtls) {
  subtls[key].className = 'colorBrightPink';
  }
}
changeSubTitleLeftSide();

function changeSubTitleRightSide() {
  let subtls2 = document.querySelectorAll('.no-emergency-tasks h3')
  for (let key in subtls2) {
  subtls2[key].className = 'colorBlack';
  }
}
changeSubTitleRightSide();

function changeFooter() {
  let footer = document.querySelector('#footer-container');
  footer.className = 'colorDarkGreen';
}
changeFooter();

function changeSubTitleLeftSideBg() {
  let subtlsBg = document.querySelector('.emergency-tasks')
  subtlsBg.className = 'emergency-tasks colorSmoothPink';
}
changeSubTitleLeftSideBg();
  
function changeSubTitleRightSideBg() {
  let subtlsBg2 = document.querySelector('.no-emergency-tasks')
  subtlsBg2.className = 'no-emergency-tasks colorSmoothYellow';
}
changeSubTitleRightSideBg();