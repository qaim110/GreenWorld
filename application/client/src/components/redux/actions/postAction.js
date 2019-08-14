export const updateForm = fieldToChange => {
  return {
    type: "UPDATE_FORM",
    fieldToChange
  };
};

export const onFileLoad = newImage => {
  return {
    type: "LOAD_IMAGE",
    newImage
  };
};

export const addLoadedFile = addToImageList => {
  return {
    type: "ADD_TO_IMAGE_LIST",
    addToImageList
  }
}

export const removeAllLoadedFile = () => {
  return {
    type: "REMOVE_ALL",
  }

}