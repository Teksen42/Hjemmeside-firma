      // Hamburger toggle and animated dropdowns
      (function () {
        var toggle = document.getElementById('mobile-menu-toggle');
        var nav = document.getElementById('primary-navigation');
        if (!toggle || !nav) return;

        function setExpanded(expanded) {
          toggle.setAttribute('aria-expanded', String(expanded));
          toggle.classList.toggle('is-active', expanded);
          nav.classList.toggle('is-active', expanded);
          document.documentElement.classList.toggle('no-scroll', expanded);
        }

        toggle.addEventListener('click', function () {
          var expanded = toggle.getAttribute('aria-expanded') === 'true';
          setExpanded(!expanded);
        });

        // Close menu on resize back to desktop
        window.addEventListener('resize', function () {
          if (window.innerWidth > 992) setExpanded(false);
        });

        // Mobile dropdown open/close with smooth animation
        Array.prototype.forEach.call(document.querySelectorAll('.dropdown > a'), function (anchor) {
          anchor.addEventListener('click', function (e) {
            // Only intercept on mobile/tablet
            if (window.matchMedia('(max-width: 992px)').matches) {
              e.preventDefault();
              var li = anchor.parentElement;
              li.classList.toggle('open');
              var menu = li.querySelector('.dropdown-menu');
              if (!menu) return;
              if (li.classList.contains('open')) {
                menu.style.maxHeight = menu.scrollHeight + 'px';
              } else {
                menu.style.maxHeight = '0px';
              }
            }
          });
        });
      })();
