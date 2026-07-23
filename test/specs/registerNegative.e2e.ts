import RegisterPage from "../pageobjects/RegisterPage";


describe("Flip Registration - Invalid OTP",()=>{


    it("should show error when input invalid OTP", async()=>{


        // Register flow

        await RegisterPage.register(

            "phone",

            "83873114931",

            "Yasmin Tiara",

            "taichanbakarcoklat@gmail.com"

        );



        // Verify OTP page displayed

        await expect(
            RegisterPage.otpField
        )
        .toBeDisplayed();




        // Input invalid OTP

        await RegisterPage.inputOTP(
            "111111"
        );



        await RegisterPage.verifyOTP();




        // Expected:
        // OTP validation error appears


        await expect(
            RegisterPage.otpErrorMessage
        )
        .toBeDisplayed();



    });


});