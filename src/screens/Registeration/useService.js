import React from 'react'
import { userApi } from '../../common/api/api-routes/user-api'

const useService = () => {

    const loginWithPhoneNumber = async (phoneNumber) => {
        try {
            const response = await userApi.loginWithPhoneNumber({ phoneNumber });
            console.log('loginWihtPhoneNumber', phoneNumber, response)
        } catch (error) {
            console.error(error)
        }

    }

    return {
        // methods
        loginWithPhoneNumber,
    }

}

export default useService