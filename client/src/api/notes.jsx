export const API_BASE_URL = process.env.REACT_APP_API_ROOT;
export const HOME_URL = process.env.REACT_APP_HOME_URL;
// render.com: const HOST_URL = "https://samuelhan-portfolio.onrender.com"
const HOST_URL = "https://samuelhan-portfolio-server.vercel.app"
const LOCAL_HOST = "http://localhost:3001";

const defaultHeaders = {
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
};

export const getAllNotesAPI = () => {
    const res = fetch(`${HOST_URL}/api/notes`, {
        ...defaultHeaders,
        method: "GET",
    });
    return res.then(parseJSON);
};

export const createNoteAPI = (note) => {
    return fetch(`${HOST_URL}/api/createNotes`,
        {
            ...defaultHeaders,
            method: "POST",
            body: JSON.stringify(note),
        }

    ).then(parseJSON);
};

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 0 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        throw error;
    }
}