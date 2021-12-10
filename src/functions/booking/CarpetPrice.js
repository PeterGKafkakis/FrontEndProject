export const decrementCarpetRoomPrice = (carpetState, price) => {
  if (carpetState.room_clean >= 0) {
    console.log(carpetState);
    price = price - 55;
  }
  return price;
};

export const decrementCarpetBathPrice = (carpetState, price) => {
  if (carpetState.room_clean >= 0) {
    console.log(carpetState);
    price = price - 20;
  }
  return price;
};
export const decrementCarpetHallPrice = (carpetState, price) => {
  if (carpetState.room_clean >= 0) {
    console.log(carpetState);
    price = price - 25;
  }
  return price;
};

export const decrementCarpetStaircasePrice = (carpetState, price) => {
  if (carpetState.room_clean >= 0) {
    console.log(carpetState);
    price = price - 50;
  }
  return price;
};

export const getCarpetRoomPrice = (carpetState, price) => {
  if (carpetState.room_clean >= 0) {
    console.log(carpetState);
    price = price + 55;
  }

  return price;
};

export const getCarpetBathPrice = (carpetState, price) => {
  if (carpetState.bath_clean >= 0) {
    console.log(carpetState);
    price = price + 20;
  }

  return price;
};

export const getCarpetHallPrice = (carpetState, price) => {
  if (carpetState.bath_clean >= 0) {
    console.log(carpetState);
    price = price + 25;
  }

  return price;
};

export const getCarpetStaircasePrice = (carpetState, price) => {
  if (carpetState.staircase_clean >= 0) {
    console.log(carpetState);
    price = price + 50;
  }

  return price;
};

// Protector Pricing
