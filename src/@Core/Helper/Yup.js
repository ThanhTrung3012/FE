

import * as Yup from 'yup'

export { yupResolver } from '@hookform/resolvers/yup'

const REGEX = {
	PASSWORD: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
	PASSWORD_V2: /^(?=.*[a-z])(?=.*[A-Z]{1,})(?=(.*[\d]){1,}).{8,}$/,
	PASSWORD_V3: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
}

Yup.addMethod(Yup.string, 'password', function (errorMessage = 'Mật khẩu phải trên 8 ký tự và có chứa cả số và chữ') {
	return this.matches(REGEX.PASSWORD_V3, {
		message: errorMessage,
		excludeEmptyString: true
	})
})

export default Yup
