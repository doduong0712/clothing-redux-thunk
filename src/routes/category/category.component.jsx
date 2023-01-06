import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoriesLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";

import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  // console.log("render / re-rendering category");
  const categoriesMap = useSelector(selectCategoriesMap); //Nếu thay đổi useSelect sẽ làm re-run và re-render
  // console.log(categoriesMap);//useSelect như một hook thưc sự được nối vào cửa hàng Redux và khi có bất cứ hành động nào, sẽ làm re-run(re-render)
  // useSelector vẫn sẽ chạy ở bất cứ đâu, bất kể bạn đang cố gắng chọn gì, chỉ re-render khi có sự thay đổi trong biến chuyển vào.
  const isLoading = useSelector(selectCategoriesLoading);
  console.log(isLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    // console.log("efect fied calling setProducts");

    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
