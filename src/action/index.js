export const getPeople = () => {
  const getPeople = fetch("http://localhost:3004/people").then((res) =>
    res.json()
  );

  return {
    type: "GET_PEOPLE",
    payload: getPeople,
  };
};

export const personDetail = (name) => {
  const getPerson = fetch(`http://localhost:3004/people?name=${name}`, {
    method: "GET",
  }).then((res) => res.json());
  return {
    type: "PERSON_DETAIL",
    payload: getPerson,
  };
};
