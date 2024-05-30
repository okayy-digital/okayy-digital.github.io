
  const imgsPerBrick = 6;
  let lower = 0;
  const brickContainer = document.querySelector('#bricks-go-here');
  const initialBrick = document.querySelector('#initial-brick');
  
  const IOOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  
  let observer = new IntersectionObserver(([entry] = entries) => {
    if (entry.isIntersecting) {
      addNewBlock();
    }
  }, IOOptions);

  function randomPercent() {
    return Math.floor(Math.random() * 100);
  }
  
  function randomImage() {
    return Math.floor(Math.random() * images.length);
  }

function populateImages(el) {
  for(let i = 0; i < images.length; i++) {
    lower += 10;
    randTop = randomPercent() + lower;
    let randNum = Math.floor(Math.random() * 11);
    let img = document.createElement("img");
    img.src = images[i];
    img.className = "brick__image rellax";
    img.setAttribute("data-rellax-speed", randNum);
    img.style.top = randTop + "%";
    img.style.left = `${randomPercent()}%`;
    el.appendChild(img)
  }
}

function addNewBlock() {
  const brick = document.createElement("div")
  brick.className = "brick";
  populateImages(brick)
  brickContainer.appendChild(brick);
}

populateImages(initialBrick);

  