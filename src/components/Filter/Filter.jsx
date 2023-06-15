import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';


import { LabelWrapper, Input, LabelDescr, LabelSpan } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <LabelDescr>
      <LabelWrapper>
       
        <LabelSpan>Find contacts by name</LabelSpan>
      </LabelWrapper>
      <Input
        type="text"
        value={filter}
        onChange={changeFilter}
        placeholder="Search..."
      />
    </LabelDescr>
  );
};
