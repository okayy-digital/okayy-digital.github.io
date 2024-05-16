const images = [
    'https://fastly.picsum.photos/id/369/200/300.jpg?hmac=ZM5SPtUsEjxc4HjsZXj3DAHeKWSaZV6r8sJMGiLYIJ8',
   'https://fastly.picsum.photos/id/146/500/300.jpg?hmac=fNhZnoVQ9JUxqt1xwhtat-R6yyuQ6FZI-OAOSP2FD2g',
    'https://fastly.picsum.photos/id/545/400/400.jpg?hmac=h_D-RM9NcBTbzGWyh8Mmc9oSyS5AAo3tvZ2wyJ8dZjM',
    'https://fastly.picsum.photos/id/572/100/100.jpg?hmac=pOy12AwNPkQAPCBPUuSyQdAp_02BGYWt9HNhfVWrL64',
    'https://fastly.picsum.photos/id/284/200/200.jpg?hmac=_el2jO-f8UzHfdcTCAXQOD8XX2N6jqVZHwvC23Xm8p8',
    'https://fastly.picsum.photos/id/867/100/400.jpg?hmac=S7Mvf3GlWJWCrz-O4XYdyWu1Btp1fhAaZhs8WXgFqgQ',
    'https://fastly.picsum.photos/id/104/600/150.jpg?hmac=uyuls5-ZCSvAEF0wsnv6NIRNIRs2PQqfG91BsSHHhYc',
    'https://fastly.picsum.photos/id/693/900/300.jpg?hmac=sISlrRxwJcGiJDiW5e98Y_UarweVh_iF7Cp9bkt5T8E',
    'https://fastly.picsum.photos/id/34/300/700.jpg?hmac=dLUPRgnxmj0tjZAu4RimalTqustlcoAmuSvneucVA6E',
    'https://fastly.picsum.photos/id/579/400/400.jpg?hmac=afss23-IpaMI-YR22YEIWvH1cA5rTYCiNeM4LxUTEH0',
    'https://fastly.picsum.photos/id/163/400/400.jpg?hmac=vbC0b6xvbaN842dzKg0CicQHDcBu13meSCQeHh-aJrs',
    'https://fastly.picsum.photos/id/1055/300/500.jpg?hmac=SVcT4IDCf6G2MCEMdGgYRjcmbEijRZR5uV1cE2wz6Mw',
    'https://fastly.picsum.photos/id/569/400/300.jpg?hmac=QqbIvczIhgiwu7Ru6Q_2mO6ixbYWccWW6RJHYvrqHmo',
    'https://fastly.picsum.photos/id/885/300/300.jpg?hmac=3v2uaRLGKuJNiC9guRsxM4u2oykSNIvv87E95JfH9GU',
    'https://fastly.picsum.photos/id/884/400/100.jpg?hmac=PmJ5uS8XKLt2zTB7M5UZXNcSd3YrRIvB5A78fvFS0-Y',
    'https://fastly.picsum.photos/id/353/346/998.jpg?hmac=tDOnVAszDB2OJKxgtLHeal2XHaJEIW6_YppouXb8PbI',
    'https://fastly.picsum.photos/id/397/500/500.jpg?hmac=qCZJ2Xh1e_NCCb1NYJzOZGUybzBP9fCBxD2R25IVKnw',
    'https://fastly.picsum.photos/id/162/300/300.jpg?hmac=YYwB3vsUblmGV6TR8Jrt46RA6O7v3rhcMTT3iUFC7LQ',
    'https://fastly.picsum.photos/id/498/300/300.jpg?hmac=fOb4nBU8ScEq2lIGOiQyElvnNke8Gw_j_ZYGEZi4LMA',
    'https://fastly.picsum.photos/id/537/400/400.jpg?hmac=bCntgMiADe8kYOcpIGTKEXLb-97BDD6rQqWnXF6qDZU',
  ]
  
  const imgsPerBrick = 6;
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
    for(let i = 0; i < imgsPerBrick; i++) {
        let starScrollMin = 2;
        let starScrollMax = 8;
        var starScrollSpeed = -Math.abs((Math.floor(Math.random() * (starScrollMax - starScrollMin + 1)) + starScrollMin) / 10);
        yScrollPos = window.scrollY;
        let img = document.createElement("img")
        img.src = images[randomImage()]
        img.className = "brick__image"
        img.style.top = `${randomPercent()}%`;
        img.style.left = `${randomPercent()}%`;
        img.style.transform = "translate3d(" + 0 + "px, " + yScrollPos * starScrollSpeed + "px, 0)";
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
  
  observer.observe(document.querySelector("#trigger"));