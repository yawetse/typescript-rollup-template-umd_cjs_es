export function add(...args) {
    console.log({ args });
    return args.reduce((result, current) => result += current, 0);
}
