import RegisterPage from "../pageobjects/RegisterPage";


describe("Flip Registration - Email",()=>{


it("should register using email", async()=>{


    await RegisterPage.register(

        "email",

        "taichanbakarcoklat@gmail.com",

        "Yasmin Tiara",

        "83873114931"

    );



    await expect(
        RegisterPage.otpField
    )
    .toBeDisplayed();


});


});