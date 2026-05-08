"use server";
const action = async (prevdata, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const emailname = formData.get("email");

  if (!emailname) {
    return { message: "Email skal udfyldes" };
  }

  if (!emailname.includes("@")) {
    return { message: "Indtast gyldig email" };
  }

  try {
    const submitEmail = await fetch("http://localhost:4000//newsletters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: { emailname },
      }),
    });

    if (submitEmail.ok) {
      return { message: "Opskriften kunne ikke gemmes" };
    }

    return { message: `Opskriften blev gemt` };
  } catch (error) {
    return { message: "Noget gik galt" };
  }
};

export default action;
