export function getCategories() {
  return fetch("https://api.example.com/categories")
    .then((response) => response.json())
    .then((data) => data.categories);
}

export function createCategory() {
  return fetch("https://api.example.com/categories", {});
}

export const name = "categories";

export default createCategory;
