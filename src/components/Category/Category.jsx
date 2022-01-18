/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import {
  CategoryTitle, CategoryList, CategoryListItem, CategoryLink,
} from './styles';

export default function Category({ name, options = [] }) {
  return (
    <section>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CategoryListItem key={singleOption} index={index} type="primary">
            <CategoryLink to={`/search/${singleOption}`}>
              {singleOption}
            </CategoryLink>

          </CategoryListItem>
        ))}
      </CategoryList>
    </section>
  );
}
Category.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(String),
};

Category.defaultProps = {
  options: [],
};
