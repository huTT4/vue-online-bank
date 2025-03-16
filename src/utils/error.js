const ERROR_CODES = {
  INVALID_LOGIN_CREDENTIALS: 'Пользователь с такими данными не был найден',
  EMAIL_EXISTS: 'Пользователь с такой почтой уже зарегистрирован',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'Слишком много попыток. Попробуй позже',
  auth: 'Пожалуйста войдите в систему'
}

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}