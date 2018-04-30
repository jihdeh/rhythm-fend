export const getStyle = (type, activity, profilePicture) =>
  activity
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`
      }
    : type === "myStyle"
      ? {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${profilePicture})`
        }
      : {
          backgroundImage: `url(${profilePicture})`
        };

export default {
  mybio: `It is a long established fact that a reader will be distracted by the readable content of
a page when looking at its layout. The point of using Lorem Ipsum is that it has a
more-or-less normal distribution of letters, as opposed to using 'Content here, content
here', making it look like readable English. Many desktop publishing packages`
};
