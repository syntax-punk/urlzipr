const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

exports.randomize = (size, input = chars) => {
    let result = "";
    for (var i = size; i > 0; --i)
        result += input[Math.floor(Math.random() * input.length)];
    return result;
}
