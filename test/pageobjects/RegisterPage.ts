class RegisterPage {


    // ==========================
    // LOGIN PAGE
    // ==========================


    get phoneField() {
        return $('id=id.flip.staging:id/PASSWORD_LESS_LOGIN_SCENE-TEXT_INPUT-CREDENTIAL_PHONE_NUMBER');
    }


    get emailField() {
        return $('id=id.flip.staging:id/PASSWORD_LESS_LOGIN_SCENE-TEXT_INPUT-CREDENTIAL_EMAIL');
    }


    get useEmailButton() {
        return $('id=id.flip.staging:id/PASSWORD_LESS_LOGIN_SCENE-TEXT-CHANGE_CREDENTIAL');
    }


    get nextButton() {
        return $('id=id.flip.staging:id/PASSWORD_LESS_LOGIN_SCENE-BUTTON-NEXT');
    }



    async inputPhone(phone:string){

        await this.phoneField.waitForDisplayed({
            timeout:10000
        });


        await this.phoneField.clearValue();


        await this.phoneField.setValue(phone);


        try{
            await browser.hideKeyboard();
        }catch{}

    }



    async chooseEmail(){

        await this.useEmailButton.waitForDisplayed({
            timeout:10000
        });


        await this.useEmailButton.click();


        await this.emailField.waitForDisplayed({
            timeout:10000
        });

    }



    async inputEmail(email:string){

        await this.emailField.waitForDisplayed({
            timeout:10000
        });


        await this.emailField.clearValue();


        await this.emailField.setValue(email);


        try{
            await browser.hideKeyboard();
        }catch{}

    }




    async clickNext(){


        await this.nextButton.waitForDisplayed({
            timeout:10000
        });


        await this.nextButton.waitForEnabled({
            timeout:10000
        });


        await this.nextButton.click();


    }




    // ==========================
    // SIGN UP PAGE
    // ==========================


    get fullNameField(){

        return $('id=id.flip.staging:id/PASSWORD_LESS_SIGNUP_SCENE-TEXT_INPUT-FULL_NAME');

    }



    get signupEmailField(){

        return $('id=id.flip.staging:id/PASSWORD_LESS_SIGNUP_SCENE-TEXT_INPUT-CREDENTIAL_EMAIL');

    }



    get signupPhoneField(){

        return $('id=id.flip.staging:id/PASSWORD_LESS_SIGNUP_SCENE-TEXT_INPUT-CREDENTIAL_PHONE_NUMBER');

    }




    get signUpButton(){

        return $('id=id.flip.staging:id/PASSWORD_LESS_SIGNUP_SCENE-BUTTON-SIGNUP');

    }





    async waitForSignupPage(){

        await this.fullNameField.waitForDisplayed({
            timeout:10000
        });

    }





    async inputFullName(name:string){


        await this.fullNameField.waitForDisplayed({
            timeout:10000
        });


        await this.fullNameField.clearValue();


        await this.fullNameField.setValue(name);


    }




    async inputSignupEmail(email:string){


        await this.signupEmailField.waitForDisplayed({
            timeout:10000
        });


        await this.signupEmailField.clearValue();


        await this.signupEmailField.setValue(email);



        try{
            await browser.hideKeyboard();
        }catch{}

    }





    async inputSignupPhone(phone:string){


        await this.signupPhoneField.waitForDisplayed({
            timeout:10000
        });



        await this.signupPhoneField.clearValue();



        await this.signupPhoneField.setValue(phone);



        try{
            await browser.hideKeyboard();
        }catch{}


    }






    async clickSignUp(){


        await this.signUpButton.waitForDisplayed({
            timeout:10000
        });


        await this.signUpButton.waitForEnabled({
            timeout:10000
        });



        await this.signUpButton.click();


    }
async register(
    type: "phone" | "email",
    credential: string,
    name: string,
    signupCredential: string
){

    // Step 1: Input initial credential

    if(type === "phone"){

        await this.inputPhone(
            credential
        );

    }else{

        await this.chooseEmail();

        await this.inputEmail(
            credential
        );

    }



    // Step 2: Next

    await this.clickNext();



    // Step 3: Signup Page

    await this.waitForSignupPage();



    // Step 4: Full Name

    await this.inputFullName(
        name
    );



    // Step 5: Input second credential

    if(type === "phone"){

        await this.inputSignupEmail(
            signupCredential
        );


    }else{


        await this.inputSignupPhone(
            signupCredential
        );


    }



    // Step 6: Submit

    await this.clickSignUp();


}




    // ==========================
    // OTP PAGE
    // ==========================


    get otpField(){

        return $('id=id.flip.staging:id/PHONE_NUMBER_VERIFICATION_SCENE-TEXT-INPUT_OTP_1');

    }

    get otpErrorMessage(){

        return $('android.widget.TextView');
    }



    async inputOTP(code:string){


        await this.otpField.waitForDisplayed({
            timeout:10000
        });



        await this.otpField.click();



        await browser.keys(code);



    }



    async verifyOTP(){


        await browser.hideKeyboard();


    }



}


export default new RegisterPage();