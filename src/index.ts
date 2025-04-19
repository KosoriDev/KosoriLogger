class Logger {
    
    /**
     * The function `Log` logs messages with a timestamp in UTC format.
     * @param {string[]} message - The `message` parameter in the `Log` function is a rest parameter
     * that allows you to pass in an array of strings as arguments. This means you can provide multiple
     * strings when calling the `Log` function, and they will be stored in the `message` array within
     * the function.
     * @returns The `Log` function is returning `void`, which means it does not return any value.
     */

    public static Log(...message: string[]): void {
        const timeDateUTC = new Date().toUTCString();

        message.forEach((msg) => {
            console.log(`ℹ️  ${timeDateUTC} | ${msg}`);
        });

        return;
    }

    /**
     * The function `Error` logs error messages with a timestamp in UTC format.
     * @param {string[]} message - The `message` parameter in the `Error` function is a rest parameter
     * that allows you to pass in an array of strings as arguments. This function logs each message
     * with a timestamp in UTC using `console.error`.
     * @returns `void`, which means it does not return any value.
     */
    
    public static Error(...message: string[]): void {
        const timeDateUTC = new Date().toUTCString();

        message.forEach((msg) => {
            console.error(`❌ ${timeDateUTC} | ${msg}`);
        });

        return;
    }

    /**
     * The Warn function logs warning messages with a timestamp in UTC format.
     * @param {string[]} message - The `message` parameter in the `Warn` function is a rest parameter
     * that allows you to pass in multiple string arguments. The function then logs each of these
     * messages as warnings along with the current UTC date and time.
     * @returns The function `Warn` is returning `void`, which means it does not return any value. It
     * simply logs warning messages to the console.
     */

    public static Warn(...message: string[]): void {
        const timeDateUTC = new Date().toUTCString();

        message.forEach((msg) => {
            console.warn(`⚠️ ${timeDateUTC} | ${msg}`);
        });

        return;
    }
}

export default Logger;