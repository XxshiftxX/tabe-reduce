import React, { FC, useState } from 'react';
import './Menu.css';

type Props = {};

const MENU: MenuItem[] = [
  { name: '샐러드', calorie: 184, selected: 0 },
  { name: '버거킹\n몬스터와퍼', calorie: 1055, selected: 0 },
  { name: '버거킹\n기네스와퍼', calorie: 778, selected: 0 },
  { name: '버거킹\n감자튀김', calorie: 280, selected: 0 },
  { name: '닭다리살 100g', calorie: 156, selected: 0 },
  { name: '오리훈제 100g', calorie: 462, selected: 0 },
  { name: '햇반', calorie: 315, selected: 0 },
  { name: '햇반\n작은공기', calorie: 190, selected: 0 },
];

type MenuItem = {
  name: string, calorie: number, selected: 0 | 1 | 2 | 3,
};

const Menu: FC<Props> = () => {
  const [menus, setMenus] = useState<MenuItem[]>(MENU);

  const totalCalorie = menus.map((menu) => menu.calorie * menu.selected).reduce((a, b) => a + b, 0);

  const handleClickItem = (name: string) => {
    const updatedMenus: MenuItem[] = menus.map((menu) => {
      if (menu.name === name) {
        const selected: any = menu.selected === 3 ? 0 : menu.selected + 1;
        return { ...menu, selected };
      }
      return menu;
    });
    setMenus(updatedMenus);
  };

  return (
    <div className='menu'>
      <h1>메뉴판</h1>
      <div className="menu-border">
        <div className="menu-list">
          {
            menus.map(({ name, calorie, selected }) => (
              <div className="menu-item"
                style={{backgroundColor: `#FFFFFF${selected*2}0`}}
                onClick={() => handleClickItem(name)}>
                <h3>
                  { name.split('\n').map((item, key) => {
                    return <span key={key}>{item}<br/></span>
                  }) }
                </h3>
                <div className="menu-item-bottom">
                  <span>
                    <b>{ calorie }</b> kcal
                  </span>
                  { selected > 0 && <b>{selected}개</b> }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='summary'>총 <b>{totalCalorie} kcal</b> 선택하셨습니다.</div>
    </div>
  )
};

export default Menu;
