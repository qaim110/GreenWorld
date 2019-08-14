import _ from "lodash";

const INITIAL_STATE = {
  postStatus: "",
  location: "",
  postType: "",
  loadedFiles: [],
  fd: ""
  // submitButtonClicked: false
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      let fieldToChange = action.fieldToChange;
      console.log(fieldToChange);
      return {
        ...state,
        fieldToChange
      };
    case "LOAD_IMAGE":
      let newImage = action.newImage;
      console.log(newImage);
      console.log([...state.loadedFiles, newImage]);
      return {
        ...state,
        loadedFiles: [...state.loadedFiles, newImage],
        fd: newImage
      };
    case "ADD_TO_IMAGE_LIST":
      let addToImageList = action.addToImageList;
      console.log(addToImageList);
      // let loadedFiles = state.loadedFiles;
      // _.find(loadedFiles, (file, idx) => {
      //   if (file == oldFile) loadedFiles[idx] = newFile;
      // });

      return {
        ...state,
        loadedFiles: addToImageList
      };
    case "ADD_TO_IMAGE_LIST":
      return {
        ...state,
        loadedFiles: []
      }
    default:
      return state;
  }
};

export default postReducer;
