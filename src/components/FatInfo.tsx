import React, { FC } from 'react';
import './FatInfo.css';

const HEIGHT = 168;
const HEIGHT_METER = 1.68;
const AGE = 21;

type Props = { fat: number };

const FatInfo: FC<Props> = ({ fat }) => {
  const bmi = Math.floor(fat / (HEIGHT_METER * HEIGHT_METER) * 100) / 100;
  const metabolic = Math.floor(((13.7516 * fat) + (5.0033 * HEIGHT) - (6.7550 * AGE) + 66.4730) * 100) / 100;

  return (
    <div className='fat-info'>
      <div>오늘의 내 체중은 <b>{fat}kg</b>입니다.</div>
      <div>오늘의 내 비만도는 <b>{bmi}</b>입니다.</div>
      <div>오늘의 내 기초 대사량은 <b>{metabolic}kcal</b>입니다.</div>
      <div>오늘은 <b>{metabolic - 300}kcal</b> 만큼만 먹어봅시다.</div>
    </div>
  )
};

export default FatInfo;
