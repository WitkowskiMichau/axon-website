"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadController = void 0;
const dataProcessor_1 = require("../utils/dataProcessor");
const uploadController = async (req, res) => {
    try {
        // Załaduj dane z Excela (załóżmy, że dane są przekazywane w JSON z middleware)
        const excelData = req.body;
        // Przetwórz dane
        const result = (0, dataProcessor_1.processExcelData)(excelData);
        // Zwróć wynik do frontendu
        res.status(200).json(result);
    }
    catch (error) {
        console.error("Error processing Excel data:", error);
        res.status(500).json({ error: "Error processing data" });
    }
};
exports.uploadController = uploadController;
exports.default = exports.uploadController;
