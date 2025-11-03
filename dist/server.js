"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This is your server file :)
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const page_routes_1 = __importDefault(require("./routes/page.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.set('view engine', 'EJS');
app.set('views', path_1.default.join(__dirname, "../src/views"));
//midleware
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//Routes
app.use("/", page_routes_1.default);
//fallback
app.use((req, res, nexr) => {
    res.status(404).send("Page not found");
});
//start server
const PORT = process.env.PORT;
if (!PORT) {
    throw new Error("Missing port");
}
app.listen(PORT, () => {
    console.log(`Serevr is running on http://localhost:${PORT}`);
});
