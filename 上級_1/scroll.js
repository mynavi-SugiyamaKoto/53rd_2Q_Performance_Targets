window.onload = function() {
    // data-reveal-class 属性が指定されている要素をすべて取得
    var elements = document.querySelectorAll('[data-reveal-class]');
    
    var observer = new IntersectionObserver( (entries, observer) => {
      // 監視対象で変化があったものすべてが entries に入ってくる
      entries.forEach(entry => {
        var target = entry.target;
        if (entry.isIntersecting) {
          target.classList.add(target.dataset.revealClass);
        }
        else {
          target.classList.remove(target.dataset.revealClass);
        }
      });
    });
    
    // すべての要素を監視対象にする
    Array.from(elements).forEach($elm => {
      observer.observe($elm);
    });
  };