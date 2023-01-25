import axios from "axios";

const CHILDREN_URL = "http://34.170.17.83/children/";

const getChildren = () => {
  return axios.get(CHILDREN_URL);
};

const CHILDREN_HOUSE_URL = "http://34.170.17.83/children_house";

const getChildrenHouse = () => {
  return axios.get(CHILDREN_HOUSE_URL);
};

const HOMELESS = "http://34.170.17.83/homeless";

const getHomeLess = () => {
  return axios.get(HOMELESS);
};

const NURSHING_HOUSE = "http://34.170.17.83/narsing_house/";

const getNarshingHouse = () => {
  return axios.get(NURSHING_HOUSE);
};

const PETS = "http://34.170.17.83/pets/";

const getPets = () => {
  return axios.get(PETS);
};

export default {
  getChildren,
  getChildrenHouse,
  getHomeLess,
  getNarshingHouse,
  getPets,
};
