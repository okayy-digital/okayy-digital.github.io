
var xhReq = new XMLHttpRequest();
xhReq.open("GET", '/json/stories.json', false);
xhReq.send(null);
var menuData = JSON.parse(xhReq.responseText);

var state = {
    'querySet': menuData,

    'page': 1,
    'rows': 3,

    'window': 5,

  }

  buildMenu()

  function pagination(querySet, page, rows){

    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows

    var trimmedData = querySet.slice(trimStart, trimEnd)

    var pages = Math.round(querySet.length / rows);

    return {
      'querySet': trimmedData,
      'pages': pages,
    }
  }

  function pageButtons(pages) {
    var container = document.getElementById('stories-nav');
    container.innerHTML = '';

    var maxLeft = (state.page - Math.floor(state.window / 2))

    if(state.page != 1){
      container.innerHTML += `<button class="btn-arrows prev"></span>`;
    }
    else{
      container.innerHTML += `<span style="width:30px"></span>`;
    }

    for (var page = 1; page <= pages; page ++) {
      if(page == state.page){
        container.innerHTML += `<button value="${page}" class="active page-btn">${page}</button>`;
      }
      else{
        container.innerHTML += `<button value="${page}" class="page-btn">${page}</button>`;
      }
      if (page != pages){
        container.innerHTML += `<span>&#9900;</span>`;
      }
    }
    if(state.page != pages){
      container.innerHTML += `<button class="btn-arrows next"></span>`;
    }
    else{
      container.innerHTML += `<span style="width:30px"></span>`;
    }

    $('.page-btn').on('click', function(){

      $('#story-container').empty();
      $(this).addClass('active');

      state.page = $(this).val();

      buildMenu();

    })

    $('.next').on('click', function(){

      $('#story-container').empty();

      state.page ++;

      buildMenu();

    })

    $('.prev').on('click', function(){

      $('#story-container').empty();

      state.page --;

      buildMenu();

    })

  }

function buildMenu() {
  var menu = $('#story-container');

  var data = pagination(state.querySet, state.page, state.rows);

  var menuList = data.querySet;

  for (var i = 1 in menuList) {
    var row = `<a href="${menuList[i].url}">
                  <img src="${menuList[i].image}" alt="${menuList[i].alt}" />
                  <h3>${menuList[i].title}</h3>
                </a>`
    menu.append(row);
  }
  pageButtons(data.pages);
}
