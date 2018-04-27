import ajax from "./ajax";

export const getcontestant = async uniqueCode => {
  try {
    const url = `${ajax.getcontestant + uniqueCode}`;
    const response = await fetch(url);
    const json = await response.json();

    return {
      profilePicture: json.data.profilePicture,
      country: json.data.country,
      state: json.data.state,
      firstName: json.data.firstName,
      lastName: json.data.lastName,
      bio: json.data.bio,
      profileUrl: `${ajax.profileUrl + uniqueCode}`,
      videoUrl: json.data.contestantVideo,
      uniqueCode
    };
  } catch (err) {
    return err;
  }
};

export const getStyle = (type, activity, profilePicture) =>
  activity
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`
      }
    : type == "myStyle"
      ? {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${profilePicture ||
            ajax.backupbackground})`
        }
      : {
          backgroundImage: `url(${profilePicture || ajax.backupbackground})`
        };

export default {
  mybio: `It is a long established fact that a reader will be distracted by the readable content of
a page when looking at its layout. The point of using Lorem Ipsum is that it has a
more-or-less normal distribution of letters, as opposed to using 'Content here, content
here', making it look like readable English. Many desktop publishing packages`
};
