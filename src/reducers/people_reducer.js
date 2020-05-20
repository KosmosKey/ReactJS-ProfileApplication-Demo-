const people = {};

function people_reducer(state = people, action) {
  switch (action.type) {
    case "GET_PEOPLE":
      return {
        ...state,
        getPeople: action.payload,
      };

    case "PERSON_DETAIL":

    default:
      return {
        ...state,
        personDetail: action.payload,
      };
  }
}

export default people_reducer;
