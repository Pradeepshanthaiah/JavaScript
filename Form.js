class person {
    constructor (firstname, lastname, mailid) {
        this.FirstName = firstname;
        this.Lastname = lastname;
        this.Mailid = mailid;
    }
    display() {
        let first = this.FirstName + ' ' + this.Lastname;
        return first 
    }

    log() {
        let logs = (this.display() + ' ' + 'Logged In');
        return logs
    }
} 
let nam = new person ('pradeep', 'Shanthaiah', 'pradeepshanthaiah7@gmail.com');
console.log(nam.log());
 

