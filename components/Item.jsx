import React from 'react';
import { Card } from 'primereact/card';
import ItemCount from '../components/ItemCount';
import Celular from '../assets/samsungA36.png';

const Item = () => {
  return (
    <Card title="Simple Card">
      <img src={Celular} alt="Celular" />
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </p>
      <ItemCount />
    </Card>
  );
};

export default Item;
