"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
pageRouter.get("/", (req, res) => {
    res.status(200).render("index", { pageTitle: 'Home' });
});
pageRouter.get("/about", (req, res) => {
    res.status(200).render("about", { pageTitle: 'About' });
});
pageRouter.get("/contact", (req, res) => {
    res.status(200).render("contact", { pageTitle: "Contact" });
});
exports.default = pageRouter;
