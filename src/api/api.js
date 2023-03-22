import axios from "axios"

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

export const PeopleAPI = {
    getPeople() {
        return instance.get(`people`)
            .then(response => {
                return response.data;
            });
    }
}
//     getProfile(userId) {
//         console.warn('obsolete method. Please profileAPI object.')
//         return profileAPI.getProfile(userId);
//     }
// }

// export const profileAPI = {
//     getProfile(userId) {
//         return instance.get(`profile/${userId}`);
//     },
//     getStatus(userId) {
//         return instance.get(`profile/status/${userId}`);
//     },
//     updateStatus(status) {
//         return instance.put(`profile/status`, { status: status });
//     },
//     savePhoto(photoFile) {
//         const formData = new FormData();
//         formData.append("image", photoFile);

//         return instance.put(`profile/photo`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//     },
//     saveProfile(profile) {
//         return instance.put(`profile`, profile);
//     }
// }

