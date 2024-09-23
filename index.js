export class Bnvmenu {
  constructor(config) {
    this.errorPrefix = "BnvMenu - ERROR: ";
    this.buttons = document.querySelectorAll(config.button);
    if (!this.buttons) {
      console.error(
        this.errorPrefix +
          "Provide a valid css selector for the button that will toggle the sidebar. There may be multiple buttons that share the same selector and toggle a single sidebar."
      );

      return;
    }

    this.sidebar = document.querySelector(config.sidebar);
    if (!this.sidebar) {
      console.error(
        this.errorPrefix +
          "Provide a valid css selector for the container of your sidebar. You can only use one sidebar for each instance of BnvMenu."
      );

      return;
    }

    this.init();
  }

  init() {
    this.buttons.forEach((el) => {
      el.addEventListener("click", () => {
        this.toggleSidebar();
      });
    });

    const sideLinks = this.sidebar.querySelectorAll("a");

    if (sideLinks.length > 0) {
      sideLinks.forEach((el) => {
        el.addEventListener("click", (ev) => {
          ev.preventDefault();

          document.querySelectorAll(".bnv-open").forEach((el) => {
            el.classList.remove("bnv-open");
          });

          setTimeout(() => {
            window.location.assign(el.href);
          }, 800);
        });
      });
    }
  }

  toggleSidebar() {
    this.sidebar.classList.toggle("bnv-open");
  }
}

// module.exports = {
//   Bnvmenu,
// };
