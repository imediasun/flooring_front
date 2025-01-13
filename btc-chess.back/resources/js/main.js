// (function () {
//   'use strict';

//   function _toPrimitive(t, r) {
//     if ("object" != typeof t || !t) return t;
//     var e = t[Symbol.toPrimitive];
//     if (void 0 !== e) {
//       var i = e.call(t, r || "default");
//       if ("object" != typeof i) return i;
//       throw new TypeError("@@toPrimitive must return a primitive value.");
//     }
//     return ("string" === r ? String : Number)(t);
//   }
//   function _toPropertyKey(t) {
//     var i = _toPrimitive(t, "string");
//     return "symbol" == typeof i ? i : i + "";
//   }
//   function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
//     try {
//       var info = gen[key](arg);
//       var value = info.value;
//     } catch (error) {
//       reject(error);
//       return;
//     }
//     if (info.done) {
//       resolve(value);
//     } else {
//       Promise.resolve(value).then(_next, _throw);
//     }
//   }
//   function _asyncToGenerator(fn) {
//     return function () {
//       var self = this,
//         args = arguments;
//       return new Promise(function (resolve, reject) {
//         var gen = fn.apply(self, args);
//         function _next(value) {
//           asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
//         }
//         function _throw(err) {
//           asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
//         }
//         _next(undefined);
//       });
//     };
//   }
//   function _defineProperty(obj, key, value) {
//     key = _toPropertyKey(key);
//     if (key in obj) {
//       Object.defineProperty(obj, key, {
//         value: value,
//         enumerable: true,
//         configurable: true,
//         writable: true
//       });
//     } else {
//       obj[key] = value;
//     }
//     return obj;
//   }

//   var convertLinkToTelPattern = linkNode => {
//     if (!linkNode || !linkNode.href.includes("tel")) return;
//     var linkHref = linkNode.getAttribute("href");
//     var newTelLink = "tel:" + "+" + linkHref.replace(/\D/g, "");
//     linkNode.href = newTelLink;
//   };

//   class Header {
//     constructor() {
//       _defineProperty(this, "scrollHandle", () => {
//         this.toggleHeaderVisible();
//       });
//       _defineProperty(this, "resizeHandle", () => {
//         this.setCssVars();
//       });
//       /** @type { HTMLElement } */
//       this.$header = document.querySelector(".header");
//       if (!this.$header) {
//         return console.warn("Can not initialize header without header", this);
//       }

//       /** @type { string } */
//       this.headerHeightCssVar = "--header-height";
//       /** @type { string } */
//       this.hiddenVisibleVlass = "_hidden";

//       /** @type { number } */
//       this.currentScrollPosition = window.scrollY;
//       this.init();
//     }
//     init() {
//       this.setCssVars();
//       this.toggleHeaderVisible();
//       window.addEventListener("scroll", this.scrollHandle);
//       window.addEventListener("resize", this.resizeHandle);
//     }
//     toggleHeaderVisible() {
//       if (window.scrollY < this.currentScrollPosition || window.scrollY < this.$header.offsetHeight) {
//         this.$header.classList.remove(this.hiddenVisibleVlass);
//       } else {
//         this.$header.classList.add(this.hiddenVisibleVlass);
//       }
//       this.currentScrollPosition = window.scrollY;
//     }
//     setCssVars() {
//       document.documentElement.style.setProperty(this.headerHeightCssVar, "".concat(this.$header.offsetHeight, "px"));
//     }
//   }

//   class Scrollbar {
//     constructor() {
//       this.cssVar = "--current-scrollbar-width";
//       this.lockClass = "_lock";
//       this.scrollbarCurrentWidth = 0;
//       this.isLocked = false;
//     }
//     toggle() {
//       if (this.isLocked) {
//         this.lock();
//       } else {
//         this.unLock();
//       }
//     }
//     getScrollbarWidth() {
//       var $outer = document.createElement("div");
//       $outer.style.width = "100px";
//       $outer.style.height = "100px";
//       $outer.style.overflow = "scroll";
//       var $inner = document.createElement("div");
//       $inner.style.width = "100%";
//       $inner.style.height = "100%";
//       $outer.append($inner);
//       document.body.append($outer);
//       this.scrollbarCurrentWidth = $outer.offsetWidth - $inner.offsetWidth;
//       $outer.remove();
//       return this.scrollbarCurrentWidth;
//     }
//     lock() {
//       var scrollbarWidth = this.getScrollbarWidth();
//       document.documentElement.style.setProperty(this.cssVar, "".concat(scrollbarWidth, "px"));
//       document.body.classList.add(this.lockClass);
//       this.isLocked = true;
//     }
//     unLock() {
//       document.documentElement.style.setProperty(this.cssVar, "0px");
//       document.body.classList.remove(this.lockClass);
//       this.isLocked = false;
//     }
//   }

//   /**
//    * @property { string } cssVar - Is holding css variable name
//    * @property { string } lockClass - Is holding css class name to lock scroll on document
//    * @property { number } scrollbarCurrentWidth = Is holding scrollbar width value
//    * @property { boolean } isLocked = Is holding current scrollbar state
//    * @property { () => void } lock - The method is locking scrollbar
//    * @property { () => void } unLock - The method is unLocking scrollbar
//    * @property { () => void } toggle - The method is switching state between unlocking and locking
//    * @property { () => number } getScrollbarWidth - The method is calculating scrollbar width value
//    * */
//   var ScrollbarLocker = new Scrollbar();

//   class Navigation {
//     constructor() {
//       _defineProperty(this, "triggerClickHandle", () => {
//         this.toggle();
//       });
//       /** @type { HTMLElement } */
//       this.$nav = document.querySelector(".nav__wrap");
//       if (!this.$nav) {
//         return console.warn("Can not initialize navigation without nav", this);
//       }

//       /** @type { NodeListOf<HTMLButtonElement> } */
//       this.triggers = document.querySelectorAll(".js-nav-trigger");
//       this.navOpenClass = "_show";
//       this.triggerActiveClass = "_active";

//       /** @type { boolean } */
//       this.isOpen = false;
//       this.init();
//     }
//     init() {
//       this.triggers.forEach($trigger => {
//         $trigger.addEventListener("click", this.triggerClickHandle);
//       });
//     }
//     toggle() {
//       if (this.isOpened) {
//         this.close();
//       } else {
//         this.open();
//       }
//     }
//     open() {
//       ScrollbarLocker.lock();
//       this.$nav.classList.add(this.navOpenClass);
//       this.triggers.forEach($trigger => {
//         $trigger.classList.add(this.triggerActiveClass);
//       });
//       this.isOpened = true;
//     }
//     close() {
//       ScrollbarLocker.unLock();
//       this.$nav.classList.remove(this.navOpenClass);
//       this.triggers.forEach($trigger => {
//         $trigger.classList.remove(this.triggerActiveClass);
//       });
//       this.isOpened = false;
//     }
//   }

//   /**
//    * Show hidden elements as modals, popups, tooltips, etc.
//    * In a first load webpage html elements loads before styles. That's all
//    * elements with transition is jumping on a page.
//    * @type { NodeListOf<HTMLElement> }
//    * */
//   var hiddenElements = document.querySelectorAll(".important_none");
//   window.addEventListener("load", /*#__PURE__*/_asyncToGenerator(function* () {
//     hiddenElements.forEach($el => $el.classList.remove("important_none"));
//     var linksToCheckTelPattern = document.querySelectorAll("a");
//     linksToCheckTelPattern && linksToCheckTelPattern.forEach(linkTel => convertLinkToTelPattern(linkTel));
//     new Header();
//     new Navigation();
//   }));

// })();
// //# sourceMappingURL=main.js.map
