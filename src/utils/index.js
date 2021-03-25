export const getComments = async (bookId) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + bookId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVjOTA2YTFjZmRmMzAwMTVkNjBhYTciLCJpYXQiOjE2MTY2NzkwMTgsImV4cCI6MTYxNzg4ODYxOH0.gHhKFOEEJvurspQQj4MWPwVXrgdzJrL5yM6Q3P3t7Js",
        },
      }
    );
    if (response.ok) {
      return await response.json();
    } else {
      console.log("Error happened");
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (commentId, bookId) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + commentId,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVjOTA2YTFjZmRmMzAwMTVkNjBhYTciLCJpYXQiOjE2MTY2NzkwMTgsImV4cCI6MTYxNzg4ODYxOH0.gHhKFOEEJvurspQQj4MWPwVXrgdzJrL5yM6Q3P3t7Js",
        },
      }
    );

    if (response.ok) {
      console.log("delete", await getComments(bookId));
      return await getComments(bookId);
    } else {
      console.log("Error happened");
    }
  } catch (error) {
    console.log(error);
  }
};
