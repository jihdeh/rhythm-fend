export const getStyle = (type, activity, profilePicture) =>
  activity
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`
      }
    : type === "myStyle"
      ? profilePicture
        ? {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${profilePicture})`
          }
        : {
            backgroundImage: `linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.71)),url(/images/logo.png)`
          }
      : profilePicture
        ? { backgroundImage: `url(${profilePicture})` }
        : {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .71))`
          };

export const formatString = _ => {
  let str = _.toLowerCase(),
    ans;
  if (str.split(" ").length > 1) {
    ans = str
      .split(" ")
      .map(val => formatString(val))
      .join(" ");
  } else ans = str.charAt(0).toUpperCase() + str.slice(1);
  return ans;
};

export const firstLetter = _ => _.charAt(0).toUpperCase();
export default {
  mybio: `It is a long established fact that a reader will be distracted by the readable content of
a page when looking at its layout. The point of using Lorem Ipsum is that it has a
more-or-less normal distribution of letters, as opposed to using 'Content here, content
here', making it look like readable English. Many desktop publishing packages`
};
