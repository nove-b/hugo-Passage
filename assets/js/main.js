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

// search dialog
let fuse;
let searchIndex = [];
async function fetchIndex() {
  const host = window.location.host;

  return fetch(
    `${host.indexOf("localhost") > -1 ? "http://" : "https://"}${host}/index.xml`,
  )
    .then((response) => response.text())
    .then((xmlText) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      const items = Array.from(xmlDoc.getElementsByTagName("item"));

      searchIndex = items.map((item) => ({
        title: item.getElementsByTagName("title")[0].textContent,
        link: item.getElementsByTagName("link")[0].textContent,
        content: item.getElementsByTagName("description")[0]?.textContent || "",
      }));

      fuse = new Fuse(searchIndex, {
        keys: ["title", "content"],
        threshold: 0.3,
      });
    });
}

const search = (query) => {
  const resultDom = document.getElementById("search-results");
  resultDom.innerHTML = "";

  if (!query || !fuse) return;
  localStorage.setItem("keyword", query);

  const results = fuse.search(query).map((res) => res.item);

  const createSearchItem = (title, link, index) => {
    return `
      <p>
        <a href="${link}" class="block py-2 border-b border-gray-200 text-sm">${title}</a>
      </p>
    `;
  };

  if (results.length === 0) {
    resultDom.innerHTML = `<p class="text-gray-500 p-5">No results found.</p>`;
    return;
  }
  results.forEach((item, index) => {
    resultDom.innerHTML += createSearchItem(item.title, item.link, index + 1);
  });
};

const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
};

(async () => {
  await fetchIndex();

  const searchDialog = document.querySelector("#search-dialog");
  const searchDialogClose = document.querySelector("#search-dialog-close");
  const searchButton = document.querySelector(".search-button");

  searchButton.addEventListener("click", () => {
    if (searchDialog) {
      searchDialog.showModal();
      searchDialogClose.addEventListener("click", () => {
        searchDialog.close();
      });
    }
  });

  const searchInput = document.querySelector("#search-input");
  searchInput.addEventListener("input", function () {
    const debouncedSearch = debounce((e) => search(e), 300);

    debouncedSearch(this.value);
  });
})();
