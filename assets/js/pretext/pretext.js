/*******************************************************************************
 * pretext.js - Adapted for Chirpy integration
 *******************************************************************************
 * This version adapts the PreTeXt TOC behavior to work with Chirpy's layout
 * and responsive design patterns while maintaining PreTeXt's original behavior.
 *******************************************************************************/

class PretextTOC {
  static #barHeight = 16 * 3; // 3rem
  static #desktopMode = matchMedia('(min-width: 850px)');

  static init() {
    if (!document.querySelector('template#head-toc')) {
      return;
    }

    // Extract TOC content from template
    const template = document.querySelector('template#head-toc');
    const tocContent = template.content.cloneNode(true);
    const tocContentTwo = template.content.cloneNode(true);

    // Insert into both possible locations with PreTeXt IDs
    const panelToc = document.getElementById('pretext-toc');
    const popupToc = document.getElementById('pretext-toc-popup-content');

    if (panelToc) panelToc.appendChild(tocContent);
    if (popupToc) popupToc.appendChild(tocContentTwo);

    // Initialize based on screen size
    if (this.#desktopMode.matches) {
      this.initPretextDesktop();
    } else {
      this.initPretextMobile();
    }

    // Set up responsive behavior
    this.#desktopMode.onchange = (e) => {
      if (e.matches) {
        if (this.popupOpened) {
          this.hidePopup();
        }
        this.initPretextDesktop();
      } else {
        this.initPretextMobile();
      }
    };

    // Initialize TOC item behavior first
    this.initPretextTOCItems();

    // Set up toggle behavior
    this.#setupTocToggle();

    // Make TOC wrapper visible
    document.getElementById('pretext-toc-wrapper')?.classList.remove('unshow');

    // Initialize active state and scroll
    this.scrollTocToActive();
  }

  static initPretextDesktop() {
    // For desktop, just ensure proper scrolling behavior
    this.scrollTocToActive();
  }

  static initPretextMobile() {
    this.initPretextBar();
    this.initPretextPopup();
    this.listenAnchors();
  }

  static initPretextBar() {
    const soloTrigger = document.getElementById('pretext-toc-solo-trigger');
    if (!soloTrigger) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const tocBar = document.getElementById('pretext-toc-bar');
        if (tocBar) {
          entries.forEach((entry) => {
            tocBar.classList.toggle('invisible', entry.isIntersecting);
          });
        }
      },
      { rootMargin: `-${this.#barHeight}px 0px 0px 0px` }
    );

    observer.observe(soloTrigger);
  }

  static initPretextPopup() {
    const triggers = document.querySelectorAll('.pretext-toc-trigger');
    const popup = document.getElementById('pretext-toc-popup');
    const btnClose = document.getElementById('pretext-toc-popup-close');

    if (!popup || !btnClose) return;

    [...triggers].forEach((trigger) => {
      trigger.onclick = () => this.showPopup();
    });

    // Improved backdrop click handling
    popup.onclick = (e) => this.clickBackdrop(e);
    btnClose.onclick = () => this.hidePopup();
    popup.oncancel = (e) => {
      e.preventDefault();
      this.hidePopup();
    };

    // Prevent popup closing when clicking inside the content
    const popupContent = popup.querySelector('#pretext-toc-popup-content');
    if (popupContent) {
      popupContent.onclick = (e) => e.stopPropagation();
    }
  }

  static get popupOpened() {
    const popup = document.getElementById('pretext-toc-popup');
    return popup ? popup.open : false;
  }

  static showPopup() {
    this.lockScroll(true);
    const popup = document.getElementById('pretext-toc-popup');
    if (popup) {
      popup.showModal();

      // Scroll to active item in popup
      requestAnimationFrame(() => {
        const activeItem = popup.querySelector('li.active, li.contains-active');
        if (activeItem) {
          activeItem.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
          });
        }
      });
    }
  }

  static hidePopup() {
    const popup = document.getElementById('pretext-toc-popup');
    if (!popup || popup.hasAttribute('closing')) return;

    popup.setAttribute('closing', '');

    popup.addEventListener(
      'animationend',
      () => {
        popup.removeAttribute('closing');
        popup.close();
      },
      { once: true }
    );

    this.lockScroll(false);
  }

  static lockScroll(enable) {
    document.documentElement.classList.toggle('overflow-hidden', enable);
    document.body.classList.toggle('overflow-hidden', enable);
  }

  static clickBackdrop(event) {
    const popup = document.getElementById('pretext-toc-popup');
    if (!popup || popup.hasAttribute('closing')) return;

    // Check if click is on the backdrop (outside the dialog content)
    const dialogRect = popup.getBoundingClientRect();
    if (
      event.clientX < dialogRect.left ||
      event.clientX > dialogRect.right ||
      event.clientY < dialogRect.top ||
      event.clientY > dialogRect.bottom
    ) {
      this.hidePopup();
    }
  }

  static listenAnchors() {
    const anchors = document.querySelectorAll(
      '#pretext-toc a, #pretext-toc-popup-content a'
    );
    [...anchors].forEach((anchor) => {
      anchor.onclick = () => {
        // Only close popup for navigation links, not for expanders
        if (!anchor.classList.contains('toc-expander')) {
          this.hidePopup();
        }
      };
    });
  }

  static initPretextTOCItems() {
    // Find all TOC containers (both panel and popup)
    const tocContainers = [
      document.querySelector('#pretext-toc'),
      document.querySelector('#pretext-toc-popup-content')
    ].filter((toc) => toc !== null);

    tocContainers.forEach((toc) => {
      const maxDepth = toc.classList.contains('depth3')
        ? 3
        : toc.classList.contains('depth2')
        ? 2
        : 1000;

      const preexpandedLevels = toc.dataset.preexpandedLevels
        ? Number(toc.dataset.preexpandedLevels)
        : 1;

      const tocItems = toc.querySelectorAll(
        'ul.structural > .toc-item, .toc-item'
      );
      for (const tocItem of tocItems) {
        // Skip if already has expander
        if (tocItem.querySelector('.toc-expander')) continue;

        const hasChildren = tocItem.querySelector('ul.structural') !== null;
        const depth = this.getTOCItemDepth(tocItem);

        if (hasChildren && depth < maxDepth) {
          const expander = document.createElement('button');
          expander.classList.add('toc-expander');
          expander.classList.add('toc-chevron-surround');
          expander.setAttribute('type', 'button');
          expander.title = 'toc-expander';
          expander.innerHTML =
            '<span class="icon material-symbols-outlined" aria-hidden="true">chevron_left</span>';

          const titleBox = tocItem.querySelector('.toc-title-box');
          if (titleBox) titleBox.append(expander);

          // Prevent event bubbling on expander click
          expander.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.toggleTOCItem(expander);
          });

          const isActive =
            tocItem.classList.contains('contains-active') ||
            tocItem.classList.contains('active');
          const preExpanded = isActive || depth < preexpandedLevels;
          const itemType = this.getTOCItemType(tocItem);

          if (preExpanded) {
            this.toggleTOCItem(expander);
          } else {
            expander.title = 'Expand' + (itemType !== '' ? ' ' + itemType : '');
          }
        }
      }
    });
  }

  static toggleTOCItem(expander) {
    const listItem = expander.closest('.toc-item');
    if (!listItem) return;

    listItem.classList.toggle('expanded');
    const expanded = listItem.classList.contains('expanded');

    const itemType = this.getTOCItemType(listItem);
    if (expanded) {
      expander.title = 'Close' + (itemType !== '' ? ' ' + itemType : '');
    } else {
      expander.title = 'Expand' + (itemType !== '' ? ' ' + itemType : '');
    }

    // Toggle visibility of child items
    for (const childUL of listItem.querySelectorAll(
      ':scope > ul.toc-item-list'
    )) {
      for (const childItem of childUL.querySelectorAll(
        ':scope > li.toc-item'
      )) {
        if (expanded) {
          childItem.classList.add('visible');
          childItem.classList.remove('hidden');
        } else {
          childItem.classList.remove('visible');
          childItem.classList.add('hidden');
        }
      }
    }
  }

  static getTOCItemType(item) {
    for (let className of item.classList) {
      if (
        className !== 'toc-item' &&
        className.length > 3 &&
        className.slice(0, 4) === 'toc-'
      )
        return className.slice(4);
    }
    return '';
  }

  static getTOCItemDepth(item) {
    let depth = 0;
    let curParent = item.closest('.toc-item-list');
    while (curParent !== null) {
      depth++;
      curParent = curParent.parentElement.closest('.toc-item-list');
    }
    return depth;
  }

  static scrollTocToActive() {
    // Try to figure out current TocItem from URL
    let fileNameWHash = window.location.href.split('/').pop();
    let fileName = fileNameWHash.split('#')[0];

    // Clear existing active states
    document
      .querySelectorAll(
        '#pretext-toc .active, #pretext-toc-popup-content .active'
      )
      .forEach((item) => {
        item.classList.remove('active');
      });

    // Find just the filename in ToC (try both locations)
    let tocEntry = document.querySelector(
      '#pretext-toc a[href="' + fileName + '"]'
    );
    if (!tocEntry) {
      tocEntry = document.querySelector(
        '#pretext-toc-popup-content a[href="' + fileName + '"]'
      );
      if (!tocEntry) return;
    }

    // See if we can also match fileName#hash
    let tocEntryWHash = document.querySelector(
      '#pretext-toc a[href="' +
        fileNameWHash +
        '"], #pretext-toc-popup-content a[href="' +
        fileNameWHash +
        '"]'
    );

    if (tocEntryWHash) {
      // Matched something below a subsection - activate the list item that contains it
      tocEntryWHash.closest('li').classList.add('active');

      // Also mark parent items as contains-active
      let parent = tocEntryWHash
        .closest('li')
        .parentElement.closest('li.toc-item');
      while (parent) {
        parent.classList.add('contains-active');
        parent = parent.parentElement.closest('li.toc-item');
      }
    }

    // Now activate ToC item for fileName and scroll to it
    const activeItem = tocEntry.closest('li');
    activeItem.classList.add('active');

    // Mark parent items as contains-active
    let parent = activeItem.parentElement.closest('li.toc-item');
    while (parent) {
      parent.classList.add('contains-active');
      parent = parent.parentElement.closest('li.toc-item');
    }

    // Scroll only in panel TOC (not popup)
    const panelToc = document.getElementById('pretext-toc');
    if (panelToc && activeItem) {
      requestAnimationFrame(() => {
        panelToc.scrollTop = Math.max(
          0,
          activeItem.offsetTop - 0.4 * window.innerHeight
        );
      });
    }
  }

  static #setupTocToggle() {
    const toggle = document.getElementById('pretext-toc-toggle');
    const wrapper = document.getElementById('pretext-toc-wrapper');

    if (!toggle || !wrapper) return;

    // Initialize from localStorage
    if (typeof localStorage !== 'undefined') {
      const isVisible = localStorage.getItem('pretextTocVisible') !== 'false';
      wrapper.classList.toggle('unshow', !isVisible);
    }

    // Handle click
    toggle.addEventListener('click', () => {
      const willBeVisible = wrapper.classList.toggle('unshow');

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('pretextTocVisible', !willBeVisible);
      }

      // Scroll to active after toggle
      if (!willBeVisible) {
        requestAnimationFrame(() => this.scrollTocToActive());
      }
    });
  }
}

// Compatibility functions for legacy PreTeXt scripts
function scrollTocToActive() {
  PretextTOC.scrollTocToActive();
}

function toggleTOCItem(expander) {
  PretextTOC.toggleTOCItem(expander);
}

function getTOCItemType(item) {
  return PretextTOC.getTOCItemType(item);
}

function getTOCItemDepth(item) {
  return PretextTOC.getTOCItemDepth(item);
}

// Initialize when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  PretextTOC.init();
});

// /*******************************************************************************
//  * pretext.js - Adapted for Chirpy integration
//  *******************************************************************************
//  * This version adapts the PreTeXt TOC behavior to work with Chirpy's layout
//  * and responsive design patterns.
//  *******************************************************************************/

// class PretextTOC {
//   static #barHeight = 16 * 3; // 3rem
//   static #desktopMode = matchMedia('(min-width: 1200px)');

//   static init() {
//     if (!document.querySelector('template#head-toc')) {
//       return;
//     }

//     // Extract TOC content from template
//     const template = document.querySelector('template#head-toc');
//     const tocContent = template.content.cloneNode(true);
//     const tocContentTwo = template.content.cloneNode(true);

//     // Insert into both possible locations
//     const panelToc = document.getElementById('pretext-toc');
//     const popupToc = document.getElementById('pretext-toc-popup-content');

//     if (panelToc) panelToc.appendChild(tocContent);
//     if (popupToc) popupToc.appendChild(tocContentTwo);

//     // Initialize based on screen size
//     if (this.#desktopMode.matches) {
//       this.initPretextDesktop();
//     } else {
//       this.initPretextMobile();
//     }

//     // Set up responsive behavior
//     this.#desktopMode.onchange = (e) => {
//       if (e.matches) {
//         if (this.popupOpened) {
//           this.hidePopup();
//         }
//         this.initPretextDesktop();
//       } else {
//         this.initPretextMobile();
//       }
//     };

//     // Make TOC wrapper visible
//     // Make TOC wrapper visible
//     this.#setupTocToggle();
//     document
//       .getElementById('pretext-toc-wrapper')
//       ?.classList.remove('invisible');

//     // Initialize TOC item behavior
//     this.initPretextTOCItems();
//     this.scrollTocToActive();
//   }

//   static initPretextDesktop() {
//     // For desktop, just ensure proper scrolling behavior
//     this.scrollTocToActive();
//   }

//   static initPretextMobile() {
//     this.initPretextBar();
//     this.initPretextPopup();
//     this.listenAnchors();
//   }

//   static initPretextBar() {
//     const soloTrigger = document.getElementById('pretext-toc-solo-trigger');
//     if (!soloTrigger) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const tocBar = document.getElementById('pretext-toc-bar');
//         if (tocBar) {
//           entries.forEach((entry) => {
//             tocBar.classList.toggle('invisible', entry.isIntersecting);
//           });
//         }
//       },
//       { rootMargin: `-${this.#barHeight}px 0px 0px 0px` }
//     );

//     observer.observe(soloTrigger);
//   }

//   static initPretextPopup() {
//     const triggers = document.querySelectorAll('.pretext-toc-trigger');
//     const popup = document.getElementById('pretext-toc-popup');
//     const btnClose = document.getElementById('pretext-toc-popup-close');

//     if (!popup || !btnClose) return;

//     [...triggers].forEach((trigger) => {
//       trigger.onclick = () => this.showPopup();
//     });

//     popup.onclick = (e) => this.clickBackdrop(e);
//     btnClose.onclick = () => this.hidePopup();
//     popup.oncancel = (e) => {
//       e.preventDefault();
//       this.hidePopup();
//     };
//   }

//   static get popupOpened() {
//     const popup = document.getElementById('pretext-toc-popup');
//     return popup ? popup.open : false;
//   }

//   static showPopup() {
//     this.lockScroll(true);
//     const popup = document.getElementById('pretext-toc-popup');
//     if (popup) {
//       popup.showModal();
//       const activeItem = popup.querySelector('li.active');
//       if (activeItem) {
//         activeItem.scrollIntoView({ block: 'center' });
//       }
//     }
//   }

//   static hidePopup() {
//     const popup = document.getElementById('pretext-toc-popup');
//     if (!popup) return;

//     popup.setAttribute('closing', '');

//     popup.addEventListener(
//       'animationend',
//       () => {
//         popup.removeAttribute('closing');
//         popup.close();
//       },
//       { once: true }
//     );

//     this.lockScroll(false);
//   }

//   static lockScroll(enable) {
//     document.documentElement.classList.toggle('overflow-hidden', enable);
//     document.body.classList.toggle('overflow-hidden', enable);
//   }

//   static clickBackdrop(event) {
//     const popup = document.getElementById('pretext-toc-popup');
//     if (!popup || popup.hasAttribute('closing')) return;

//     const rect = event.target.getBoundingClientRect();
//     if (
//       event.clientX < rect.left ||
//       event.clientX > rect.right ||
//       event.clientY < rect.top ||
//       event.clientY > rect.bottom
//     ) {
//       this.hidePopup();
//     }
//   }

//   static listenAnchors() {
//     const anchors = document.querySelectorAll(
//       '#pretext-toc a, #pretext-toc-popup-content a'
//     );
//     [...anchors].forEach((anchor) => {
//       anchor.onclick = () => this.hidePopup();
//     });
//   }

//   static initPretextTOCItems() {
//     const toc = document.querySelector(
//       '#pretext-toc, #pretext-toc-popup-content'
//     );
//     if (!toc) return;

//     const maxDepth = toc.classList.contains('depth3')
//       ? 3
//       : toc.classList.contains('depth2')
//       ? 2
//       : 1000;

//     const preexpandedLevels = toc.dataset.preexpandedLevels
//       ? Number(toc.dataset.preexpandedLevels)
//       : 1;

//     const tocItems = toc.querySelectorAll('ul.structural > .toc-item');
//     for (const tocItem of tocItems) {
//       const hasChildren = tocItem.querySelector('ul.structural') !== null;
//       const depth = this.getTOCItemDepth(tocItem);

//       if (hasChildren && depth < maxDepth) {
//         const expander = document.createElement('button');
//         expander.classList.add('toc-expander');
//         expander.classList.add('toc-chevron-surround');
//         expander.title = 'toc-expander';
//         expander.innerHTML =
//           '<span class="icon material-symbols-outlined" aria-hidden="true">chevron_left</span>';

//         const titleBox = tocItem.querySelector('.toc-title-box');
//         if (titleBox) titleBox.append(expander);

//         expander.addEventListener('click', () => {
//           this.toggleTOCItem(expander);
//         });

//         const isActive =
//           tocItem.classList.contains('contains-active') ||
//           tocItem.classList.contains('active');
//         const preExpanded = isActive || depth < preexpandedLevels;
//         const itemType = this.getTOCItemType(tocItem);

//         if (preExpanded) {
//           this.toggleTOCItem(expander);
//         } else {
//           expander.title = 'Expand' + (itemType !== '' ? ' ' + itemType : '');
//         }
//       }
//     }
//   }

//   static toggleTOCItem(expander) {
//     const listItem = expander.closest('.toc-item');
//     if (!listItem) return;

//     listItem.classList.toggle('expanded');
//     const expanded = listItem.classList.contains('expanded');

//     const itemType = this.getTOCItemType(listItem);
//     if (expanded) {
//       expander.title = 'Close' + (itemType !== '' ? ' ' + itemType : '');
//     } else {
//       expander.title = 'Expand' + (itemType !== '' ? ' ' + itemType : '');
//     }

//     for (const childUL of listItem.querySelectorAll(
//       ':scope > ul.toc-item-list'
//     )) {
//       for (const childItem of childUL.querySelectorAll(
//         ':scope > li.toc-item'
//       )) {
//         if (expanded) {
//           childItem.classList.add('visible');
//           childItem.classList.remove('hidden');
//         } else {
//           childItem.classList.remove('visible');
//           childItem.classList.add('hidden');
//         }
//       }
//     }
//   }

//   static getTOCItemType(item) {
//     for (let className of item.classList) {
//       if (
//         className !== 'toc-item' &&
//         className.length > 3 &&
//         className.slice(0, 4) === 'toc-'
//       )
//         return className.slice(4);
//     }
//     return '';
//   }

//   static getTOCItemDepth(item) {
//     let depth = 0;
//     let curParent = item.closest('.toc-item-list');
//     while (curParent !== null) {
//       depth++;
//       curParent = curParent.parentElement.closest('.toc-item-list');
//     }
//     return depth;
//   }

//   static scrollTocToActive() {
//     // Try to figure out current TocItem from URL
//     let fileNameWHash = window.location.href.split('/').pop();
//     let fileName = fileNameWHash.split('#')[0];

//     // Find just the filename in ToC
//     let tocEntry = document.querySelector(
//       '#pretext-toc a[href="' + fileName + '"]'
//     );
//     if (!tocEntry) {
//       tocEntry = document.querySelector(
//         '#pretext-toc-popup-content a[href="' + fileName + '"]'
//       );
//       if (!tocEntry) return;
//     }

//     // See if we can also match fileName#hash
//     let tocEntryWHash = document.querySelector(
//       '#pretext-toc a[href="' + fileNameWHash + '"]'
//     );
//     if (!tocEntryWHash) {
//       tocEntryWHash = document.querySelector(
//         '#pretext-toc-popup-content a[href="' + fileNameWHash + '"]'
//       );
//     }

//     if (tocEntryWHash) {
//       // Matched something below a subsection - activate the list item that contains it
//       tocEntryWHash.closest('li').classList.add('active');
//     }

//     // Now activate ToC item for fileName and scroll to it
//     tocEntry.closest('li').classList.add('active');

//     // Scroll only in panel TOC (not popup)
//     const panelToc = document.getElementById('pretext-toc');
//     if (panelToc) {
//       panelToc.scrollTop = tocEntry.offsetTop - 0.4 * window.innerHeight;
//     }
//   }

//   static #setupTocToggle() {
//     const toggle = document.getElementById('pretext-toc-toggle');
//     const wrapper = document.getElementById('pretext-toc-wrapper');

//     if (!toggle || !wrapper) return;

//     // Initialisation depuis localStorage
//     if (typeof localStorage !== 'undefined') {
//       const isVisible = localStorage.getItem('pretextTocVisible') !== 'false';
//       wrapper.classList.toggle('invisible', !isVisible);
//     }

//     // Gestion du clic
//     toggle.addEventListener('click', () => {
//       const willBeVisible = wrapper.classList.toggle('invisible');

//       if (typeof localStorage !== 'undefined') {
//         localStorage.setItem('pretextTocVisible', !willBeVisible);
//       }
//     });
//   }
// }

// // Initialize when DOM is loaded
// window.addEventListener('DOMContentLoaded', () => {
//   PretextTOC.init();
// });
