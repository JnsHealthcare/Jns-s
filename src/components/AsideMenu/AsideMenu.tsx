import React from 'react';
import { ASIDE_MENU_DATA } from './ASIDE_MENU_DATA';
import AsideMenuItem from './AsideMenuItem';
import './AsideMenu.scss';

interface DetailItem {
  value: string;
  text: string;
}

interface Item {
  id: number;
  text: string;
  detail: DetailItem[];
}

const info: Item = {
  id: 1,
  text: '색상',
  detail: [
    { value: 'color', text: 'Red' },
    { value: 'color', text: 'Blue' },
    { value: 'color', text: 'Orange' },
  ],
};

const SideMenu = () => {
  return (
    <aside className="sideMenu">
      <div className="menuContainer">
        {ASIDE_MENU_DATA.map((info: Item) => (
          <AsideMenuItem key={info.id} info={info} />
        ))}
      </div>
    </aside>
  );
};

export default SideMenu;
