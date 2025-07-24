const triangleCalculate = document.getElementById('triangle');

triangleCalculate.addEventListener('click', function () {
  // console.log('Triangle button clicked');
  const b = document.getElementById('triangle-b').value;
  const h = document.getElementById('triangle-h').value;
  const area = 0.5 * b * h;
  // console.log('Triangle Area:', area);

  const li = document.createElement("li");
  li.innerHTML = `
  <div class="text-[13px] flex justify-between items-center p-1">
    <span>triangle</span>
    <span>${area}cm<sup>2</sup></span>
    <button class="btn btn-xs btn-primary">Convert to m<sup>2</sup></button>
  </div>
`;

  if (b > 0 || h > 0) {
    document.getElementById('aria-list').appendChild(li)
  }


  // clear input fields
  document.getElementById('triangle-b').value = '';
  document.getElementById('triangle-h').value = '';
})