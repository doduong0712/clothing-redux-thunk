import { createSelector } from "reselect"; // Kiểm tra đầu vào và đầu ra ,nếu ko có gì thay đổi sẽ ko re-run

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesMap
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, [])
); //Trừ khi giá trị trong mảng khác, nếu ko thì lấy giá trị cũ ko tạo ra obj mới

// console.log("selectorfied");
//   console.log(state.categories.categoriesMap);
// return state.categories.categoriesMap.reduce((acc, category) => {
//   const { title, items } = category;
//   acc[title.toLowerCase()] = items;
//   return acc;
//   // Do mỗi lần chạy sẽ trả về một đối tượng mới dù có trống nên làm re-render, do trả về khác ô nhớ
// }, []);

//   reduce((acc, docSnapshot) => {
//     const { title, items } = docSnapshot.data();
//     acc[title.toLowerCase()] = items;
//     return acc;

// .reduce((acc, docSnapshot) => {
//     const { title, items } = docSnapshot;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   },{})

export const selectCategoriesLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
