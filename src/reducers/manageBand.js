// the manageBand reducer, change the structure of the state such that each band is assigned its own ID. You will also need to pass this info through to the band object (this should include the id and name of the band) as the props to each rendered Band component.
// You will have to alter the reducer such that it creates a new list of bands that does not include the one whose delete button was pressed.
import uuid from 'uuid';


export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const newBand = {
        id: uuid(),
        name: action.name
      }

      return { ...state, bands: [...state.bands, newBand] }

    case 'DELETE_BAND':
      return {bands: state.bands.filter(band => band.id !== action.id)};

    default:
      return state;
  }
};
