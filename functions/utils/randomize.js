const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomize (size, input = chars) {
    let result = "";
    for (var i = size; i > 0; --i)
        result += input[Math.floor(Math.random() * input.length)];
    return result;
};

function generateUrl(hashLen = 6) {
    const hash = randomize(hashLen)
    const baseUrl = process.env.API_BASE_URL;
    return {
        hash,
        url: baseUrl + hash
    }
}

module.exports = { randomize, generateUrl }
