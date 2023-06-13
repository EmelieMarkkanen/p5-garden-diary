import { rest } from "msw";

const baseURL = "https://garden-diary-api.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json(
                {
                    "pk": 1,
                    "username": "Emelie",
                    "email": "",
                    "first_name": "",
                    "last_name": "",
                    "profile_id": 1,
                    "profile_image": "https://res.cloudinary.com/dbgnna5vv/image/upload/v1/media/images/Emelie_markkanen_1_eq560p"
                })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200))
    }),
];