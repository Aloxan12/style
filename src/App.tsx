import React from 'react';
import './App.scss';
import {Header} from "./components/AppHeader/Header";
import {AppPreview} from "./components/AppPreview/AppPreview";
import {AppList} from "./components/AppList/AppList";
import {AppEmployees} from "./components/AppEmployees/AppEmployees";
import {AppEffectsList} from "./components/AppEffectsList/AppEffectsList";

function App() {
  return (
    <div className="container">
        <Header />
        <AppEffectsList />
        <AppPreview />
        <AppList />
        <AppEmployees />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at autem consectetur consequatur, delectus dicta doloribus eligendi eos esse et explicabo fugit id illum ipsum itaque iure laborum libero magnam nemo neque odit officiis omnis pariatur placeat possimus, provident quaerat quam quas quia quod recusandae repellendus sequi sit temporibus unde veritatis voluptates. Accusantium aperiam aut, cumque deserunt ducimus eum nihil possimus rem repudiandae sit? Accusantium alias architecto, assumenda autem consequatur cumque, dicta, eligendi enim eum ex fugit id magni maiores nemo nobis officiis pariatur quia quisquam quod rem sit sunt tempore veniam? Esse incidunt, temporibus! Corporis iste reiciendis veritatis voluptatum?</p>
    </div>
  );
}

export default App;
