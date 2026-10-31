// 데모 웹: 미리 넣은 예제를 고르는 막대입니다(이슈 #141). 네트워크를 쓰지 않습니다.
(function () {
  var D = window.SEMIRANG_DEMO;
  if (!D) return;
  var page = document.title.indexOf('비교') >= 0 || /compare\.html$/.test(location.pathname) ? 'compare' : 'viewer';
  var list = D[page] || [];
  function open(g) {
    var files = g.files.map(function (f) {
      return { path: f.path, name: f.name, file: new File([f.text], f.name, { type: f.type }) };
    });
    window.dispatchEvent(new CustomEvent('semirang:open', { detail: files }));
    Array.prototype.forEach.call(document.querySelectorAll('.demo-bar button'), function (b) {
      b.setAttribute('aria-pressed', b.textContent === g.name ? 'true' : 'false');
    });
  }
  function bar() {
    var el = document.createElement('div');
    el.className = 'demo-bar';
    el.setAttribute('role', 'toolbar');
    el.setAttribute('aria-label', '예제 고르기');
    var t = document.createElement('span');
    t.className = 'demo-label';
    t.textContent = page === 'compare' ? '데모 비교' : '데모 예제';
    el.appendChild(t);
    list.forEach(function (g) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = g.name;
      b.title = g.title;
      b.addEventListener('click', function () { open(g); });
      el.appendChild(b);
    });
    // 다른 화면에 넣은 예제가 있을 때만 그 화면으로 가는 연결을 둡니다.
    var otherList = D[page === 'compare' ? 'viewer' : 'compare'] || [];
    if (otherList.length) {
      var other = document.createElement('a');
      other.className = 'demo-link';
      other.href = page === 'compare' ? 'index.html' : 'compare.html';
      other.textContent = page === 'compare' ? '결과 뷰어로' : '두 판 비교로';
      el.appendChild(other);
    }
    if (D.notice) {
      var n = document.createElement('span');
      n.className = 'demo-notice';
      n.textContent = D.notice;
      el.appendChild(n);
    }
    document.body.appendChild(el);
  }
  window.addEventListener('DOMContentLoaded', function () {
    if (!list.length) return;
    bar();
    // 화면이 이벤트를 듣기 시작한 뒤(semirang:ready) 첫 예제를 엽니다.
    var opened = false;
    function first() { if (!opened) { opened = true; open(list[0]); } }
    if (window.semirangReady) first();
    else window.addEventListener('semirang:ready', first);
  });
})();
