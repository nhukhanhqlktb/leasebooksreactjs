import React from 'react';
import Card from '../components/Card';

export default { title: 'Card' };

const infoCard = {
    title: 'Toan hoc',
    discription: 'Toan ma tran',
    imgUrl: 'https://picsum.photos/id/1/200/200'
  };

export const With_Price = () => (
  <Card infoCard={infoCard}>    
  </Card>
);