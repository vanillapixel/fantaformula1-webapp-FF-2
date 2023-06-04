/*
 * Copyright (C) Luna Srl - All Rights Reserved
 *
 * @project    lunarail-frontend.nosync
 * @file       Logger.ts
 * @author     Christian Ascone
 * @date       11/21/19 1:07 PM
 */


export class Logger {
    /**
     * Builds the log message with class name and date
     * @param {string} className
     * @param {any} message
     * @returns {string}
     */
    private static buildMessage(className: string, message: any) {
        let date = new Date().toLocaleString();
        let toPrint = typeof message == "string" ? message : JSON.stringify(message);
        return `[${date}] [${className}] - ${toPrint}`;
    }

    /**
     * Logs a message
     * @param {string} class_name
     * @param {any} message
     */
    static log(class_name: string, message: any) {
        try {
            let logMessage = this.buildMessage(class_name, message);
            console.log(logMessage);
        }catch (e){
            console.log("Cannot log");
        }
    }

    /**
     * Logs a warn message
     * @param {string} class_name
     * @param {any} message
     */
    static warn(class_name: string, message: any) {
        let logMessage = this.buildMessage(class_name, message);
        console.warn(logMessage);
    }
}