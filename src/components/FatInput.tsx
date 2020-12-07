import React, { FC, useState } from 'react';

import './FatInput.css';

type Props = { onFatSelected: (fat: number) => any };

const FatInput: FC<Props> = ({ onFatSelected }) => {
  const [fat, setFat] = useState<number>(NaN);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onFatSelected(fat)
    }
  }

  return (
    <div className='fat-input'>
      오늘의 내 체중은
      <input type="number" value={isNaN(fat) ? '' : fat}
        onChange={(e) => setFat(parseInt(e.target.value, 10))}
        onKeyDown={handleKeyDown}
      />
      입니다.
    </div>
  );
};

export default FatInput;
