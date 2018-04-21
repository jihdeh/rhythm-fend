import endpoints from "./endpoints";

export default {
  charge: async (email, amount, card, pin) => {
    const metadata = {
      custom_fields: [
        {
          value: "SOUND IT AFRICA",
          display_name: "registration fee",
          variable_name: "registration_fee"
        }
      ]
    };
    const body = {
      email,
      amount,
      card,
      pin,
      metadata
    };
    try {
      const response = await fetch(endpoints.paystack_charge, {
        method: "POST",
        headers: {
          Authorization: process.env.REACT_APP_AUTH
        },
        body: JSON.stringify(body)
      });
      const json = await response.json();

      if (json.data.status === "success") {
        const { reference } = json.data;
        console.log("reference", reference);
        //verify payment here
      } else {
        //payment not successful or pending
        console.log(json);
      }
    } catch (err) {
      //error
      console.log(err);
    }
  }
};
