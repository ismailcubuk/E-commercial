export const handleSubmit = async (data, newFirstName, newLastName, newEmail, newPassword, refetch) => {
  try {
    const response = await fetch('/api/update', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: data?._id,
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        password: newPassword
      })
    });

    if (response.ok) {
      const responseData = await response.json();
      if (responseData.token) {
        localStorage.setItem('token', responseData.token);
        refetch();
      }
      console.log("response", "response ok");
    } else {
      console.log("response", "response not ok");
    }
  } catch (error) {
    console.error(error);
  }
};
