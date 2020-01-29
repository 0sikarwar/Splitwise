import React from "react";

const Autocomplete = props => {
  const { list, inputName } = props;
  const _handleClick = index => {
    props.onSelect(list[index].name, inputName, list[index].id);
  };
  return (
    <div>
      {list.map((item, index) => {
        return (
          <div
            onClick={() => {
              _handleClick(index);
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Autocomplete;
