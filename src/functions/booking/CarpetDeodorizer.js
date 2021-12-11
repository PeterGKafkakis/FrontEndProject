export const getRoomDeodorizerPrice = (carpetState, price) => {
  if (carpetState.room_deodorize >= 0) {
    price += 25;
  }
  return price;
};

export const getStairDeodorizerPrice = (carpetState, price) => {
  if (carpetState.staircase_deodorize >= 0) {
    price += 25;
  }
  return price;
};

export const getBathDeodorizerPrice = (carpetState, price) => {
  if (carpetState.bath_deodorize >= 0) {
    price += 10;
  }
  return price;
};

export const getHallDeodorizerPrice = (carpetState, price) => {
  if (carpetState.entry_deodorize >= 0) {
    price += 12;
  }
  return price;
};

export const decRoomDeodorizerPrice = (carpetState, price) => {
  if (carpetState.room_deodorize >= 0) {
    price -= 25;
  }
  return price;
};

export const decStaircaseDeodorizerPrice = (carpetState, price) => {
  if (carpetState.room_deodorize >= 0) {
    price -= 25;
  }
  return price;
};
export const decBathDeodorizerPrice = (carpetState, price) => {
  if (carpetState.room_deodorize >= 0) {
    price -= 10;
  }
  return price;
};
export const decHallDeodorizerPrice = (carpetState, price) => {
  if (carpetState.room_deodorize >= 0) {
    price -= 12;
  }
  return price;
};
