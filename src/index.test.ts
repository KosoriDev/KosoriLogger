import Logger from "./index";

test("Logger Logging 1 object", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const timeDateUTC = new Date().toUTCString();
    Logger.Log("Test message");
    expect(logSpy).toHaveBeenCalledWith(`ℹ️  ${timeDateUTC} | Test message`);
    logSpy.mockRestore();
});

test("Logger Error logging 1 object", () => {
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    const timeDateUTC = new Date().toUTCString();
    Logger.Error("Test error message");
    expect(errorSpy).toHaveBeenCalledWith(`❌ ${timeDateUTC} | Test error message`);
    errorSpy.mockRestore();
});

test("Logger Warning 1 object", () => {
    const warnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    const timeDateUTC = new Date().toUTCString();
    Logger.Warn("Test warning message");
    expect(warnSpy).toHaveBeenCalledWith(`⚠️ ${timeDateUTC} | Test warning message`);
    warnSpy.mockRestore();
});

test("Logger Logging multiple objects", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const timeDateUTC = new Date().toUTCString();
    Logger.Log("Test message 1", "Test message 2");
    expect(logSpy).toHaveBeenCalledWith(`ℹ️  ${timeDateUTC} | Test message 1`);
    expect(logSpy).toHaveBeenCalledWith(`ℹ️  ${timeDateUTC} | Test message 2`);
    logSpy.mockRestore();
});

test("Logger Error logging multiple objects", () => {
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    const timeDateUTC = new Date().toUTCString();
    Logger.Error("Test error message 1", "Test error message 2");
    expect(errorSpy).toHaveBeenCalledWith(`❌ ${timeDateUTC} | Test error message 1`);
    expect(errorSpy).toHaveBeenCalledWith(`❌ ${timeDateUTC} | Test error message 2`);
    errorSpy.mockRestore();
});

test("Logger Warning multiple objects", () => {
    const warnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    const timeDateUTC = new Date().toUTCString();
    Logger.Warn("Test warning message 1", "Test warning message 2");
    expect(warnSpy).toHaveBeenCalledWith(`⚠️ ${timeDateUTC} | Test warning message 1`);
    expect(warnSpy).toHaveBeenCalledWith(`⚠️ ${timeDateUTC} | Test warning message 2`);
    warnSpy.mockRestore();
});