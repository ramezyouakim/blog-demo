import { config } from '../config';

export function getCommentslist(params) {
    return new Promise((resolve, reject) => {
        fetch(params ? `${config.serverUrl}/comments/${params}` : `${config.serverUrl}/comments`)
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })
    })
}