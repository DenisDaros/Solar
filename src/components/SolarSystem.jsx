import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((lista) => (<PlanetCard
          key={ lista.name }
          planetName={ lista.name }
          planetImage={ lista.image }
        />))}
      </div>);
  }
}
export default SolarSystem;
