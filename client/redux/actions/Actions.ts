// MENU
export const toggleMenu = () => ({
    type: 'TOGGLE_MENU',
});
export const closeMenu = () => ({
    type: 'CLOSE_MENU',
});
// MODAL
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
// INPUT
export const disableInput = () => ({
  type: "DISABLE_INPUT",
});
export const enableInput = () => ({
  type: "ENABLE_INPUT",
});
// VISIBILTY
export const toggleVisibilityEdit = () => ({
  type: 'TOGGLE_VISIBILITY_EDIT',
});
export const toggleVisibilityChanges = () => ({
  type: 'TOGGLE_VISIBILITY_CHANGES',
});
