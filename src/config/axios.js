import AsyncStorage from '@react-native-async-storage/async-storage';
import { getItem } from '../utils/Storage';
import axios from 'axios';
// export const Token = 'U2FsdGVkX19kcgkVnfCqVXnVa4xlElpKt6o0vx6nDPoOwMbe9uisf0MQTOwchqG4VDUT2eY0kInhRtr5Hqx+KBKQt/IXJYhiEm0w8bEmfnXkCY9Xz9RWhwvhnq6znJUoT70d9fk+6+Kc2ttVWoMHcayPJmgWzN/EHSpxvNMt6VYd6dzf5isOJei/AVXzymExbAnTAbp5Ss09+dcXrTQaSWj3kaIYn+ul1+hV14XuYbL1WmZybqhqErpvqyT8J1toLquU3ovkZYtIqU6fkw780VggT9pEGhioZl/P/OMW8gGAQwMUSMkIVZxuJYfoZ1PDdVvUKocNs/KfgzfH1uEEHEkdSL3khUxdT6E4iCK647NaE81o4MCvyBzy8owRUwQtoLwFy1WdetlpopxCoLNBATamloyIAeo3y8COWqq2QLVm/oxDw8Rl/eb+RKcg1AMj6sGJufAQSDKRMrQsn3ybq0Jv8SN+gs1AIDWvU66amLmFandLxrZn3YK0lX63xRGBFu0CWpdflzAYjxbfOz+Edt7yBqywpVlOetnLI8uMcEtPT59xhmlZkwTG3+7jxngQIdRV5ssmZsv7cFfMA9ETJ8eakdZS3TTY2nd2LhAj0GXGnAbgaZq2Sue7qdFdiRuv3kW01HKG07IonK7Y2goEvA9wOOGUTgEjoWw4BoFKsKXWvS2xpqh7kAeKwrLnmx66RqR2vnNFHa+dzHLL44wE1uNqGyFvA3WEf0me9rbel6GWwXwHBjb4Vz82soYgRGKHfdQksqrOcTbVnNvPMm4TfhqJrjFIGAtox48PgMLcEvLdvabCpr9zhPEiCGBl0Kn7s6dYcUSreLV2vjWZhFJHw1+FknM9XEe3HL1Ql2Aa+yN5jeztGnGo1WujJrRYaTsxoWsfh0oQKVJEmBcovHSwlIxs6PBG3eymvnhLeoerZrez6aWpYHOEP+FZJW+kpuuJpbhqPvdzNvMlo2narF12xVcd0skp/DwfBbXsSTH8Qt3qZ8QiZJL34FaaDbTz0kVptAFFpqqxNNUeS5X6wqWelPLUH1ztb7CDFh54CodClc9nZgldDZqwt4L1yn0Ol1Vt94A58xHCTLOsA1V7Ydd+zckKDt/gwns3H7WxENIW6h4cePWa2GpCVALriAi3LrDd8RDAhtJ0D9XTLYXmHTfw9/cAOVoKsYiwKX7porDifZjidnLbt+xUcN1cs5Xj6mcPKvLsAsQEOgE6aeimM7MKrpAJsm2gGbR3uNRAxwWfd8CVY+MKv/68jqmf2t32XJ+SOtc6wP4Z/RZTiMTC9Zm1x6HU+DTF+VtiGKTLb7mJCSPcayD4w1GHnS6iWnNwU9fq'
export const Token =
    'eyJraWQiOiJZaEJIZk9iRUFQXC9pd1BsRVZQRzQyVDQwMWh4S2pxNTNFam1zRmdDajI0WT0iLCJhbGciOiJSUzI1NiJ9.eyJjdXN0b206dXNlclR5cGUiOiJMMiIsInN1YiI6IjQ5ZDQ0ZTljLTkzMjgtNDg0NS05MzQ2LWU3ODgxYzE1MDZkZiIsImF1ZCI6IjM0Y2R1M2oyZ2o2MWRncDNnc2Fha2tjaTNwIiwiZXZlbnRfaWQiOiJiMDhmMTdmNi02NTEwLTQzODItYjQyYS05YzZhOWFkNWRjYWEiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY4OTkzODY2MSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0xX3dqcnRhZ3VvayIsImNvZ25pdG86dXNlcm5hbWUiOiI0OWQ0NGU5Yy05MzI4LTQ4NDUtOTM0Ni1lNzg4MWMxNTA2ZGYiLCJleHAiOjE2OTAwMjUwNjAsImlhdCI6MTY4OTkzODY2MSwiZW1haWwiOiJwZXJ2ZXpuYXdhenJpbmRAZ21haWwuY29tIn0.WHU0w89ep3QQK5CJQmozgYfkdKRLW-rjinyZm_TpYmuA_frH-fLV54ItFSZNk1_agUlJ77VYA7VxEYtahWfaK0qzXQ6Cgfvw03LOzM_hKYnSebUBn9ZsO00EVnqI4wrQt-7YaVauh4GD27uHtIMQ01qXHSWuN-9QB9tYaEhTF2oSw6z-goUip1mbanOmSf0WmWD_7ygSqcwr9h9sT146YYrC0fTfAAskIrsEBGwDITRfLXNPSx9GGmQ8G-nT54beaM0TCWim4idsNWHCyGRbsWwaneIKYSLuCr1_XIis42oC7wLEnUD8KT-jG9vYufSdLET7wfl8pNuKl4YOE4EKHw';
// import { isTokenEpired } from './utils'
const config = {
    apiUrl: 'https://8yyj2ehu82.execute-api.ap-southeast-1.amazonaws.com/test/',
    apiUrlV2: 'https://3auonxowpk.execute-api.ap-southeast-1.amazonaws.com/test/',
    apiKey: 'fWXOewHZVL4EX6q7qgv9H5v85SF96wLh7jAMsFCs',
    //   regId: "0b04cf35-57ca-4ee7-b81f-b338c7f58df8",
    //   deviceName: 'mobile',
};

export const agent = axios.create({
    baseURL: config.apiUrl,
    transformRequest: [transformRequest],
    transformResponse: [transformResponse],
    headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
        'x-api-key': config.apiKey,
    },
});

agent.CancelToken = axios.CancelToken;

agent.interceptors.request.use(async (config) => {
    const token = (await getItem('token')) || Token;
    // const token =  Token;
    config.headers.Authorization = token;
    return config;
});

function transformRequest(request, headers) {
    return JSON.stringify(request);
}

function transformResponse(response, headers, code) {
    return response ? JSON.parse(response) : null;
}


export default agent;
