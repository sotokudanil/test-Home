import RegisterPage from "../pageobjects/RegisterPage";


describe("Flip Registration - Phone",()=>{


it("should register using phone number", async()=>{


    await RegisterPage.register(

        "phone",

        "83873114931",

        "Yasmin Tiara",

        "taichanbakarcoklat@gmail.com"

    );



    await expect(
        RegisterPage.otpField
    )
    .toBeDisplayed();


});


});