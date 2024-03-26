import { LuccaTimmiAbsences } from "./index";

describe("lucca-timmi-absences-typescript-sdk", () => {
    it("initialize client", async () => {
        const luccatimmiabsences = new LuccaTimmiAbsences({
            apiKey: "API_KEY",
        });
    });
});
