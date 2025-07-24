const triangleCalculate = document.getElementById('triangle');
const rectangleCalculate = document.getElementById('rectangle');
const parallelogramCalculate = document.getElementById('parallelogram');
const rhombusCalculate = document.getElementById('rhombus');

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

rectangleCalculate.addEventListener('click', function () {
  // console.log('Rectangle button clicked');
  const l = document.getElementById('rectangle-l').value;
  const w = document.getElementById('rectangle-w').value;
  const area = l * w;
  // console.log('Rectangle Area:', area);

  const li = document.createElement("li");
  li.innerHTML = `
  <div class="text-[13px] flex justify-between items-center p-1">
    <span>rectangle</span>
    <span>${area}cm<sup>2</sup></span>
    <button class="btn btn-xs btn-primary">Convert to m<sup>2</sup></button>
  </div>
`;

  if (l > 0 || w > 0) {
    document.getElementById('aria-list').appendChild(li)
  }

  // clear input fields
  document.getElementById('rectangle-l').value = '';
  document.getElementById('rectangle-w').value = '';
})

parallelogramCalculate.addEventListener('click', function () {
  // console.log('Parallelogram button clicked');
  const b = document.getElementById('parallelogram-b').value;
  const h = document.getElementById('parallelogram-h').value;
  const area = b * h;
  // console.log('Parallelogram Area:', area);

  const li = document.createElement("li");
  li.innerHTML = `
  <div class="text-[13px] flex justify-between items-center p-1">
    <span>parallelogram</span>
    <span>${area}cm<sup>2</sup></span>
    <button class="btn btn-xs btn-primary">Convert to m<sup>2</sup></button>
  </div>
`;

  if (b > 0 || h > 0) {
    document.getElementById('aria-list').appendChild(li)
  }

  // clear input fields
  document.getElementById('parallelogram-b').value = '';
  document.getElementById('parallelogram-h').value = '';
})

rhombusCalculate.addEventListener('click', function () {
  // console.log('Rhombus button clicked');
  const d1 = document.getElementById('rhombus-d1').value;
  const d2 = document.getElementById('rhombus-d2').value;
  const area = 0.5 * (d1 * d2);
  // console.log('Rhombus Area:', area);

  const li = document.createElement("li");
  li.innerHTML = `
  <div class="text-[13px] flex justify-between items-center p-1">
    <span>rhombus</span>
    <span>${area}cm<sup>2</sup></span>
    <button class="btn btn-xs btn-primary">Convert to m<sup>2</sup></button>
  </div>
`;

  if (d1 > 0 || d2 > 0) {
    document.getElementById('aria-list').appendChild(li)
  }

  // clear input fields
  document.getElementById('rhombus-d1').value = '';
  document.getElementById('rhombus-d2').value = '';
})