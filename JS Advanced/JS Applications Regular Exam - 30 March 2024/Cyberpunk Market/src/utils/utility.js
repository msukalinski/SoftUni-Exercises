export const submitHandler = (callback) => {
    return (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));

        callback(data, e.currentTarget);
    }
}