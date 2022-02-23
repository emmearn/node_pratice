class ErrorHandler extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
        this.handle();
    }

    handle() {
        switch(this.code) {
            case 400: this.badRequest(); break;
            case 404: this.notFound(); break;
            case 500: this.serverError(); break;
            default: this.message = `${this.message || 'Internal error. Retry...'}`;
        }
    }

    badRequest() {
        this.message = `${this.message || 'Bad Request'}`
    }

    notFound() {
        this.message = `${this.message || 'Not found'}`
    }

    serverError() {
        // insert into DB or send mail
        this.message = `${this.message || 'Server error'}`
    }
}

module.exports = ErrorHandler;