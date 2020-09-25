import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getCategories,
  changeCategory
} from "../Redux/actions/categoryActions";
import Select from "./Tools/Select";

const CategoryList = ({
  categories,
  getCategories,
  changeCategory,
  ...props
}) => {
  useEffect(() => {
    if (categories.categories.length === 0) {
      getCategories();
    }
  }, [categories.categories.length, getCategories]);

  const changeCategoryHandler = category => {
    changeCategory(category);
  };

  return (
    <>
      <Select
        selectedCategory={
          categories.currentCategory.categoryName || "Tüm kategoriler"
        }
        items={categories.categories}
        changeCategoryHandler={changeCategoryHandler}
      />
    </>
  );
};

const mapStateToProps = state => ({
  categories: state.categoryReducer
});

const mapDispatchToProps = dispatch => ({
  getCategories: bindActionCreators(getCategories, dispatch),
  changeCategory: bindActionCreators(changeCategory, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
