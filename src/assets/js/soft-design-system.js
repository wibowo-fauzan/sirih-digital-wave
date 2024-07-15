import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Popover, Tooltip } from 'bootstrap'; // Import specific Bootstrap components

// activate popovers (for elements with data-bs-toggle attribute)
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
  return new Popover(popoverTriggerEl)
})

// initialization of Tooltips (for elements with data-bs-toggle attribute)
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl)
})

// helper function for adding multiple attributes to elements
function setAttributes(el, options) {
  Object.keys(options).forEach(function(attr) {
    el.setAttribute(attr, options[attr]);
  })
}

// Tabs navigation
var totalTabs = document.querySelectorAll('.nav-pills');

totalTabs.forEach(function(tabGroup) {
  var movingTab = document.createElement('div');
  var firstTab = tabGroup.querySelector('li:first-child .nav-link');
  var tabClone = firstTab.cloneNode(true);
  tabClone.innerHTML = "-";

  movingTab.classList.add('moving-tab', 'position-absolute', 'nav-link');
  movingTab.appendChild(tabClone);
  tabGroup.appendChild(movingTab);

  var tabLength = tabGroup.getElementsByTagName("li").length;

  movingTab.style.padding = '0px';
  movingTab.style.width = tabGroup.querySelector('li:nth-child(1)').offsetWidth + 'px';
  movingTab.style.transform = 'translate3d(0px, 0px, 0px)';
  movingTab.style.transition = '.5s ease';

  tabGroup.onmouseover = function(event) {
    var target = event.target;
    var tabItem = target.closest('li'); // get reference to tab item
    if (tabItem) {
      var nodes = Array.from(tabItem.closest('ul').children); // get array of tab items
      var index = nodes.indexOf(tabItem) + 1;
      tabGroup.querySelector('li:nth-child(' + index + ') .nav-link').onclick = function() {
        movingTab = tabGroup.querySelector('.moving-tab');
        var sum = 0;
        if (tabGroup.classList.contains('flex-column')) {
          for (var j = 1; j <= nodes.indexOf(tabItem); j++) {
            sum += tabGroup.querySelector('li:nth-child(' + j + ')').offsetHeight;
          }
          movingTab.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
          movingTab.style.height = tabGroup.querySelector('li:nth-child(' + j + ')').offsetHeight;
        } else {
          for (var j = 1; j <= nodes.indexOf(tabItem); j++) {
            sum += tabGroup.querySelector('li:nth-child(' + j + ')').offsetWidth;
          }
          movingTab.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
          movingTab.style.width = tabGroup.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
        }
      }
    }
  }
});

// Tabs navigation resize
window.addEventListener('resize', function(event) {
  totalTabs.forEach(function(tabGroup) {
    tabGroup.querySelector('.moving-tab').remove();
    var movingTab = document.createElement('div');
    var activeTab = tabGroup.querySelector(".nav-link.active").cloneNode(true);
    activeTab.innerHTML = "-";

    movingTab.classList.add('moving-tab', 'position-absolute', 'nav-link');
    movingTab.appendChild(activeTab);

    tabGroup.appendChild(movingTab);

    movingTab.style.padding = '0px';
    movingTab.style.transition = '.5s ease';

    var activeTabParent = tabGroup.querySelector(".nav-link.active").parentElement;

    if (activeTabParent) {
      var nodes = Array.from(activeTabParent.closest('ul').children); // get array of tab items
      var index = nodes.indexOf(activeTabParent) + 1;

      var sum = 0;
      if (tabGroup.classList.contains('flex-column')) {
        for (var j = 1; j <= nodes.indexOf(activeTabParent); j++) {
          sum += tabGroup.querySelector('li:nth-child(' + j + ')').offsetHeight;
        }
        movingTab.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
        movingTab.style.width = tabGroup.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
        movingTab.style.height = tabGroup.querySelector('li:nth-child(' + j + ')').offsetHeight;
      } else {
        for (var j = 1; j <= nodes.indexOf(activeTabParent); j++) {
          sum += tabGroup.querySelector('li:nth-child(' + j + ')').offsetWidth;
        }
        movingTab.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
        movingTab.style.width = tabGroup.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
      }
    }
  });

  if (window.innerWidth < 991) {
    totalTabs.forEach(function(tabGroup) {
      if (!tabGroup.classList.contains('flex-column')) {
        tabGroup.classList.add('flex-column', 'on-resize');
      }
    });
  } else {
    totalTabs.forEach(function(tabGroup) {
      if (tabGroup.classList.contains('on-resize')) {
        tabGroup.classList.remove('flex-column', 'on-resize');
      }
    })
  }
});

// Function to get event target
function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

// Copy code function
function copyCode(el) {
  const selection = window.getSelection();
  const range = document.createRange();
  const textToCopy = el.nextElementSibling;
  range.selectNodeContents(textToCopy);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  window.getSelection().removeAllRanges()
  if (!el.parentElement.querySelector('.alert')) {
    var alert = document.createElement('div');
    alert.classList.add('alert', 'alert-success', 'position-absolute', 'top-0', 'border-0', 'text-white', 'w-25', 'end-0', 'start-0', 'mt-2', 'mx-auto', 'py-2');
    alert.style.transform = 'translate3d(0px, 0px, 0px)'
    alert.style.opacity = '0';
    alert.style.transition = '.35s ease';
    setTimeout(function() {
      alert.style.transform = 'translate3d(0px, 20px, 0px)';
      alert.style.setProperty("opacity", "1", "important");
    }, 100);
    alert.innerHTML = "Code successfully copied!";
    el.parentElement.appendChild(alert);
    setTimeout(function() {
      alert.style.transform = 'translate3d(0px, 0px, 0px)'
      alert.style.setProperty("opacity", "0", "important");
    }, 2000);
    setTimeout(function() {
      el.parentElement.querySelector('.alert').remove();
    }, 2500);
  }
}

// Input focus function
var getParent = function(elem, selector) {
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }
  return null;
};
document.addEventListener('click', function(event) {
  var parent = getParent(event.target, '.input-group');
  if (event.target.classList.contains('form-control')) {
    var focus = document.querySelectorAll('.input-group.focused');
    for (var i = 0; i < focus.length; i++) {
      focus[i].classList.remove('focused');
    }
    parent.classList.add('focused');
  }
  var focus = document.querySelectorAll('.input-group.focused');
  if (focus && event.target != parent && event.target.parentNode != parent) {
    for (var i = 0; i < focus.length; i++) {
      focus[i].classList.remove('focused');
    }
  }
}, false);

// Function to deounce other functions
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};
