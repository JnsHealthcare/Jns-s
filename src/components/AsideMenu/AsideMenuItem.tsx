import React, { useState, MouseEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

interface DetailItem {
  value: string;
  text: string;
}

interface Item {
  id: number;
  text: string;
  detail: DetailItem[];
}

interface Props {
  info: Item;
}

const AsideMenuItem = (props: Props) => {
  const { info } = props;

  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const detailClick = (event: MouseEvent<HTMLInputElement>): void => {
    const { id, value } = event.currentTarget.dataset;
    const params: string[] = searchParams.getAll(value || '');
    const isSelected: boolean = params.includes(id || '');

    if (isSelected) {
      searchParams.delete(value || '');
      params.forEach((param: string) => {
        if (param === id) return;

        searchParams.append(value || '', param);
      });
    } else {
      searchParams.append(value || '', id || '');
    }

    setSearchParams(searchParams);
  };

  return (
    <>
      <div className="borderBottom" onClick={onClick}>
        <h4>{info.text}</h4>
      </div>
      <div className={`menu ${isOpen ? 'openMenu' : 'closeMenu'}`}>
        {info.detail.map((data: DetailItem) => (
          <div key={data.text}>
            <label className="asideMenuCheckbox">
              <input
                type="checkbox"
                data-id={data.text}
                data-value={data.value}
                onClick={detailClick}
              />

              {data.text}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default AsideMenuItem;
