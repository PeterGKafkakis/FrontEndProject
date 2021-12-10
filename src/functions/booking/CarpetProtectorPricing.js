export const getRoomProtectPrice = (carpetState, price) => {
  if (carpetState.room_protect >= 0) {
    price = price + 25;
  }
  return price;
};

export const getStairProtectPrice = (carpetState, price) => {
  if (carpetState.staircase_protect >= 0) {
    price = price + 25;
  }
  return price;
};

export const getBathProtectPrice = (carpetState, price) => {
  if (carpetState.bath_protect >= 0) {
    price = price + 10;
  }
  return price;
};

export const getHallProtectPrice = (carpetState, price) => {
  if (carpetState.entry_protect >= 0) {
    price = price + 12;
  }
  return price;
};

export const decRoomProtectPrice = (carpetState, price) => {
  if (carpetState.room_protect >= 0) {
    price = price - 25;
  }
  return price;
};

export const decStaircaseProtectPrice = (carpetState, price) => {
  if (carpetState.room_protect >= 0) {
    price = price - 25;
  }
  return price;
};
export const decBathProtectPrice = (carpetState, price) => {
  if (carpetState.room_protect >= 0) {
    price = price - 10;
  }
  return price;
};
export const decHallProtectPrice = (carpetState, price) => {
  if (carpetState.room_protect >= 0) {
    price = price - 12;
  }
  return price;
};
