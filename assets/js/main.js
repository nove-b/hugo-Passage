// anchor button click event
(() => {
  const anchorButtons = document.querySelectorAll(".anchor-button");

  for (const button of anchorButtons) {
    button.addEventListener("click", function () {
      const targetYear = this.getAttribute("data-year");
      const targetDom = document.querySelector(`#year-${targetYear}`);

      if (targetDom) {
        targetDom.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
})();

// refine button click event
(() => {
  const refineButton = document.querySelectorAll(".refine-button");

  for (const button of refineButton) {
    button.addEventListener("click", function () {
      const targetType = this.getAttribute("data-type");
      const sameType = document.querySelectorAll(`.${targetType}`);
      const articleItem = document.querySelectorAll(".article-item");

      for (const dom of articleItem) {
        dom.classList.add("hidden");
      }

      for (const dom of sameType) {
        dom.classList.remove("hidden");
      }

      const articleLists = document.querySelectorAll(".article-list");
      if (!articleLists.length) return false;

      for (const list of articleLists) {
        const items = list.querySelectorAll(".article-item");

        let hasVisible = false;

        for (const item of items) {
          if (!item.classList.contains("hidden")) {
            hasVisible = true;
            break;
          }
        }

        if (hasVisible) {
          const posts = list.querySelector(".posts");
          const noArticles = posts?.querySelector(".no-articles-message");
          if (noArticles) {
            noArticles.remove();
          }
        } else {
          const posts = list.querySelector(".posts");
          if (posts && !posts.querySelector(".no-articles-message")) {
            const message = document.createElement("div");
            message.textContent = "No articles match your selection.";
            message.className = "no-articles-message text-gray-500 mt-4";
            posts.appendChild(message);
          }
        }
      }
    });
  }
})();

// page-top-button click event
(() => {
  const pageTopButton = document.querySelector(".page-top-button");
  pageTopButton.addEventListener("click", () => {
    const body = document.querySelector("body");

    if (body) {
      body.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
})();
