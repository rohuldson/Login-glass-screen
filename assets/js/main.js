/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) =>{
    const input = document.getElementById(inputPass),
    iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', ()=> {
        // change password text
        if(input.type === 'password'){
            // switch to text
            input.type = 'text'

            // Add icon
            iconEye.classList.add('ri-eye-line')

            // Remove icon
            iconEye.classList.remove('ri-eye-off-line')
        }else{
            input.type = 'password'

             // Add icon eye line again
            iconEye.classList.add('ri-eye-off-line')
            

            // Remove icon
            iconEye.classList.remove('ri-eye-line')

        }
    })
}

showHiddenPass( 'input-pass', 'input-icon')