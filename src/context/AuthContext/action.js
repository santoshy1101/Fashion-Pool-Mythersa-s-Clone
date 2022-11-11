export const loginSuccess = (state) => {
    return { ...state, isAuth: true }
}

export const loading = (state, payload) => {
    return { ...state, isLoading: payload }
}

export const error = (state) => {
    return { ...state, isError: true }
}