var xhReq = new XMLHttpRequest();
xhReq.open("GET", '/json/posts.json', false);
xhReq.send(null);
var postMenuData = JSON.parse(xhReq.responseText);

var postState = {
    'querySet': postMenuData,

    'page': 1,
    'rows': 3,

    'window': 5,

  }

  buildPostMenu()

  function paginate(querySet, page, rows){

    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows

    var trimmedData = querySet.slice(trimStart, trimEnd)

    var pages = Math.round(querySet.length / rows);

    return {
      'querySet': trimmedData,
      'pages': pages,
    }
  }

  function postPageButtons(pages) {
    var container = document.getElementById('posts-nav');
    container.innerHTML = '';

    var maxLeft = (postState.page - Math.floor(postState.window / 2))

    if(postState.page != 1){
      container.innerHTML += `<button class="btn-arrows post-prev"></span>`;
    }
    else{
      container.innerHTML += `<span style="width:30px"></span>`;
    }

    for (var page = 1; page <= pages; page ++) {
      if(page == postState.page){
        container.innerHTML += `<button value="${page}" class="active post-page-btn">${page}</button>`;
      }
      else{
        container.innerHTML += `<button value="${page}" class="post-page-btn">${page}</button>`;
      }
      if (page != pages){
        container.innerHTML += `<span>&#9900;</span>`;
      }
    }
    if(postState.page != pages){
      container.innerHTML += `<button class="btn-arrows post-next"></span>`;
    }
    else{
      container.innerHTML += `<span style="width:30px"></span>`;
    }

    $('.post-page-btn').on('click', function(){

      $('#post-container').empty();
      $(this).addClass('active');

      postState.page = $(this).val();

      buildPostMenu();

    })

    $('.post-next').on('click', function(){

      $('#post-container').empty();

      postState.page ++;

      buildPostMenu();

    })

    $('.post-prev').on('click', function(){

      $('#post-container').empty();

      postState.page --;

      buildPostMenu();

    })

  }

function buildPostMenu() {
  var menu = $('#post-container');

  var data = paginate(postState.querySet, postState.page, postState.rows);

  var menuList = data.querySet;

  for (var i = 1 in menuList) {
    var row = `<a href="${menuList[i].url}">
                  ${menuList[i].title}
                  <span>*</span>
                </a>`
    menu.append(row);
  }
  postPageButtons(data.pages);
}