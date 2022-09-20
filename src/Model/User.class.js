class User {
    constructor(id, email, username, company_id) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.company_id = company_id;
    }

    toJSON() {
        return { ...this };
    }
}

export default UserInfo;