import React from "react";

const Autocomplete = props => {
  const { list, inputName } = props;
  const _handleClick = index => {
    props.onSelect(list[index].name, inputName, list[index].id);
  };
  return (
    <ul className="list mt-0 pt-0 pl-0 mb-0 pb-0 pr-0">
      {list.map((item, index) => {
        return (
          <li
            className="listItem pl-15"
            onClick={() => {
              _handleClick(index);
            }}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Autocomplete;
