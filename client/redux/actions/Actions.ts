export const toggleMenu = () => ({
    type: 'TOGGLE_MENU',
});

export const closeMenu = () => ({
    type: 'CLOSE_MENU',
});

export const openModal = () => {
  return {
    type: 'OPEN_MODAL',
  };
};

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL',
  };
};