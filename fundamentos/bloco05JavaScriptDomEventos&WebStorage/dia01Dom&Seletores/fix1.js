function paragraphColor() {
  const paragraph = document.getElementById("paragraph");
  paragraph.style.color = "red";
}
paragraphColor();

function changeTitle() {
  let title = document.getElementById('page-title');
  title.innerText = 'Pulp Fiction';
}
changeTitle();

function changeSecondParagraph() {
  let secondParagraph = document.getElementById('second-paragraph');
  secondParagraph.innerText = "The best movie i've ever watched";
  secondParagraph.style.color = 'blue';
  secondParagraph.style.fontSize = '30px';
}
changeSecondParagraph();

function changeSubtitle() {
  let subtitleContent = document.getElementById('subtitle');
  subtitleContent.innerText = "100% Sure";
  subtitleContent.style.color = 'purple';
  subtitleContent.style.fontSize = '20px';
}
changeSubtitle();

function changeParagraphByClass() {
  let paragraphs = document.getElementsByClassName('paragraphClass');
  paragraphs[0].style.color = 'green';
  paragraphs[0].innerText = "Is"
  paragraphs[0].style.fontSize = '25px';
}
changeParagraphByClass();

function changeSubtitleByTagName() {
  let subtitleTag = document.getElementsByTagName('h4');
  subtitleTag[0].style.color = 'yellow';
}
changeSubtitleByTagName();